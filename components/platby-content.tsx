"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download, Plus, Eye, Edit, FileText, Mail } from "lucide-react"

// Mock data pro platby
const platbyData = [
  {
    id: 1,
    cislo_faktury: "F2024-001",
    ucastnik: "Anna Nováková",
    akce: "Letní tábor 2024",
    celkova_castka: 8500,
    zaplaceno: 8500,
    zbyva_doplatit: 0,
    status: "zaplaceno",
    zpusob_platby: "bankovni_prevod",
    datum_vytvoreni: "2024-01-15",
    datum_splatnosti: "2024-02-15",
    posledni_platba: "2024-02-10",
    pocet_upominek: 0,
    historie_plateb: [{ datum: "2024-02-10", castka: 8500, zpusob: "bankovni_prevod" }],
  },
  {
    id: 2,
    cislo_faktury: "F2024-002",
    ucastnik: "Tomáš Svoboda",
    akce: "Zimní tábor 2024",
    celkova_castka: 7200,
    zaplaceno: 3600,
    zbyva_doplatit: 3600,
    status: "castecne",
    zpusob_platby: "karta",
    datum_vytvoreni: "2024-01-20",
    datum_splatnosti: "2024-02-20",
    posledni_platba: "2024-01-25",
    pocet_upominek: 1,
    historie_plateb: [{ datum: "2024-01-25", castka: 3600, zpusob: "karta" }],
  },
  {
    id: 3,
    cislo_faktury: "F2024-003",
    ucastnik: "Petra Dvořáková",
    akce: "Příměstský tábor",
    celkova_castka: 4500,
    zaplaceno: 0,
    zbyva_doplatit: 4500,
    status: "po_terminu",
    zpusob_platby: "nezvoleno",
    datum_vytvoreni: "2024-01-10",
    datum_splatnosti: "2024-02-10",
    posledni_platba: null,
    pocet_upominek: 3,
    historie_plateb: [],
  },
  {
    id: 4,
    cislo_faktury: "F2024-004",
    ucastnik: "Jan Procházka",
    akce: "Letní tábor 2024",
    celkova_castka: 8500,
    zaplaceno: 0,
    zbyva_doplatit: 8500,
    status: "nezaplaceno",
    zpusob_platby: "bankovni_prevod",
    datum_vytvoreni: "2024-02-01",
    datum_splatnosti: "2024-03-03",
    posledni_platba: null,
    pocet_upominek: 0,
    historie_plateb: [],
  },
  {
    id: 5,
    cislo_faktury: "F2024-005",
    ucastnik: "Marie Kratochvílová",
    akce: "Výtvarný workshop",
    celkova_castka: 2800,
    zaplaceno: 2800,
    zbyva_doplatit: 0,
    status: "vraceno",
    zpusob_platby: "hotovost",
    datum_vytvoreni: "2024-01-25",
    datum_splatnosti: "2024-02-25",
    posledni_platba: "2024-02-20",
    pocet_upominek: 0,
    historie_plateb: [
      { datum: "2024-02-20", castka: 2800, zpusob: "hotovost" },
      { datum: "2024-02-28", castka: -2800, zpusob: "vraceno" },
    ],
  },
]

export function PlatbyContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [zpusobFilter, setZpusobFilter] = useState("all")
  const [akceFilter, setAkceFilter] = useState("all")

  // Výpočet statistik
  const celkovyObrat = platbyData.reduce((sum, platba) => sum + platba.zaplaceno, 0)
  const nezaplaceneFaktury = platbyData.filter((p) => p.status === "nezaplaceno" || p.status === "po_terminu").length
  const castecneZaplacene = platbyData.filter((p) => p.status === "castecne").length
  const prumernaPlaba = celkovyObrat / platbyData.filter((p) => p.zaplaceno > 0).length || 0

  // Filtrace dat
  const filteredData = platbyData.filter((platba) => {
    const matchesSearch =
      platba.cislo_faktury.toLowerCase().includes(searchTerm.toLowerCase()) ||
      platba.ucastnik.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || platba.status === statusFilter
    const matchesZpusob = zpusobFilter === "all" || platba.zpusob_platby === zpusobFilter
    const matchesAkce = akceFilter === "all" || platba.akce === akceFilter

    return matchesSearch && matchesStatus && matchesZpusob && matchesAkce
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "zaplaceno":
        return <Badge className="bg-green-500 text-white border-2 border-black">🟢 ZAPLACENO</Badge>
      case "castecne":
        return <Badge className="bg-yellow-500 text-white border-2 border-black">🟡 ČÁSTEČNĚ</Badge>
      case "nezaplaceno":
        return <Badge className="bg-red-500 text-white border-2 border-black">🔴 NEZAPLACENO</Badge>
      case "po_terminu":
        return <Badge className="bg-red-700 text-white border-2 border-black">🚨 PO TERMÍNU</Badge>
      case "vraceno":
        return <Badge className="bg-blue-500 text-white border-2 border-black">🔵 VRÁCENO</Badge>
      case "zruseno":
        return <Badge className="bg-gray-500 text-white border-2 border-black">⚫ ZRUŠENO</Badge>
      default:
        return <Badge className="bg-gray-400 text-white border-2 border-black">❓ NEZNÁMÝ</Badge>
    }
  }

  const getZpusobIcon = (zpusob: string) => {
    switch (zpusob) {
      case "bankovni_prevod":
        return <span className="flex items-center gap-1">🏦 Bankovní převod</span>
      case "karta":
        return <span className="flex items-center gap-1">💳 Platební karta</span>
      case "hotovost":
        return <span className="flex items-center gap-1">💵 Hotovost</span>
      default:
        return <span className="flex items-center gap-1">❓ Nezvoleno</span>
    }
  }

  const getDaysToDeadline = (splatnost: string) => {
    const today = new Date()
    const deadline = new Date(splatnost)
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getDeadlineIndicator = (splatnost: string, status: string) => {
    if (status === "zaplaceno" || status === "vraceno") return null

    const days = getDaysToDeadline(splatnost)

    if (days < 0) {
      return <span className="text-red-600 font-bold">⚠️ {Math.abs(days)} dní po termínu</span>
    } else if (days <= 3) {
      return <span className="text-orange-600 font-bold">⏰ {days} dní do termínu</span>
    }
    return null
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-black">💰 PLATBY</h1>
          <p className="text-gray-600 font-medium">Správa faktur, plateb a upomínek</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-green-400 hover:bg-green-500 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Plus className="mr-2 h-4 w-4" />
            Nová faktura
          </Button>
          <Button variant="outline" className="border-2 border-black font-bold hover:bg-gray-100 bg-transparent">
            <Mail className="mr-2 h-4 w-4" />
            Hromadné upomínky
          </Button>
          <Button variant="outline" className="border-2 border-black font-bold hover:bg-gray-100 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Statistiky */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-gray-600">CELKOVÝ OBRAT</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-green-600">{celkovyObrat.toLocaleString()} Kč</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-gray-600">NEZAPLACENÉ FAKTURY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-red-600">{nezaplaceneFaktury}</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-gray-600">ČÁSTEČNĚ ZAPLACENO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-yellow-600">{castecneZaplacene}</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-gray-600">PRŮMĚRNÁ PLATBA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-blue-600">{Math.round(prumernaPlaba).toLocaleString()} Kč</div>
          </CardContent>
        </Card>
      </div>

      {/* Filtry */}
      <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-black">
            <Filter className="h-5 w-5" />
            FILTRY A VYHLEDÁVÁNÍ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Hledat fakturu nebo jméno..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-2 border-black font-medium"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Status platby" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny statusy</SelectItem>
                <SelectItem value="zaplaceno">Zaplaceno</SelectItem>
                <SelectItem value="castecne">Částečně</SelectItem>
                <SelectItem value="nezaplaceno">Nezaplaceno</SelectItem>
                <SelectItem value="po_terminu">Po termínu</SelectItem>
                <SelectItem value="vraceno">Vráceno</SelectItem>
              </SelectContent>
            </Select>

            <Select value={zpusobFilter} onValueChange={setZpusobFilter}>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Způsob platby" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny způsoby</SelectItem>
                <SelectItem value="bankovni_prevod">Bankovní převod</SelectItem>
                <SelectItem value="karta">Platební karta</SelectItem>
                <SelectItem value="hotovost">Hotovost</SelectItem>
                <SelectItem value="nezvoleno">Nezvoleno</SelectItem>
              </SelectContent>
            </Select>

            <Select value={akceFilter} onValueChange={setAkceFilter}>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Akce" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny akce</SelectItem>
                <SelectItem value="Letní tábor 2024">Letní tábor 2024</SelectItem>
                <SelectItem value="Zimní tábor 2024">Zimní tábor 2024</SelectItem>
                <SelectItem value="Příměstský tábor">Příměstský tábor</SelectItem>
                <SelectItem value="Výtvarný workshop">Výtvarný workshop</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-2 border-black font-bold hover:bg-gray-100 bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabulka plateb */}
      <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle className="font-black">📋 SEZNAM FAKTUR ({filteredData.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-black">
                  <TableHead className="font-black text-black">FAKTURA</TableHead>
                  <TableHead className="font-black text-black">ÚČASTNÍK</TableHead>
                  <TableHead className="font-black text-black">AKCE</TableHead>
                  <TableHead className="font-black text-black">ČÁSTKA</TableHead>
                  <TableHead className="font-black text-black">STATUS</TableHead>
                  <TableHead className="font-black text-black">ZPŮSOB PLATBY</TableHead>
                  <TableHead className="font-black text-black">TERMÍNY</TableHead>
                  <TableHead className="font-black text-black">UPOMÍNKY</TableHead>
                  <TableHead className="font-black text-black">AKCE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((platba) => (
                  <TableRow key={platba.id} className="border-b border-gray-200">
                    <TableCell>
                      <div className="font-bold text-blue-600">{platba.cislo_faktury}</div>
                      <div className="text-xs text-gray-500">
                        Vytvořeno: {new Date(platba.datum_vytvoreni).toLocaleDateString("cs-CZ")}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="font-medium">{platba.ucastnik}</div>
                    </TableCell>

                    <TableCell>
                      <div className="font-medium">{platba.akce}</div>
                    </TableCell>

                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Celkem:</span>
                          <span className="font-bold">{platba.celkova_castka.toLocaleString()} Kč</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Zaplaceno:</span>
                          <span className="font-bold text-green-600">{platba.zaplaceno.toLocaleString()} Kč</span>
                        </div>
                        {platba.zbyva_doplatit > 0 && (
                          <div className="flex justify-between text-sm">
                            <span>Zbývá:</span>
                            <span className="font-bold text-red-600">{platba.zbyva_doplatit.toLocaleString()} Kč</span>
                          </div>
                        )}
                        <Progress
                          value={(platba.zaplaceno / platba.celkova_castka) * 100}
                          className="h-2 border border-black"
                        />
                      </div>
                    </TableCell>

                    <TableCell>{getStatusBadge(platba.status)}</TableCell>

                    <TableCell>{getZpusobIcon(platba.zpusob_platby)}</TableCell>

                    <TableCell>
                      <div className="space-y-1 text-xs">
                        <div>Splatnost: {new Date(platba.datum_splatnosti).toLocaleDateString("cs-CZ")}</div>
                        {platba.posledni_platba && (
                          <div>Poslední platba: {new Date(platba.posledni_platba).toLocaleDateString("cs-CZ")}</div>
                        )}
                        {getDeadlineIndicator(platba.datum_splatnosti, platba.status)}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        {platba.pocet_upominek > 0 && (
                          <Badge variant="destructive" className="border-2 border-black">
                            {platba.pocet_upominek}x upomínka
                          </Badge>
                        )}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2 border-black hover:bg-gray-100 bg-transparent"
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2 border-black hover:bg-gray-100 bg-transparent"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2 border-black hover:bg-gray-100 bg-transparent"
                        >
                          <FileText className="h-3 w-3" />
                        </Button>
                        {(platba.status === "nezaplaceno" ||
                          platba.status === "po_terminu" ||
                          platba.status === "castecne") && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-2 border-black hover:bg-red-100 bg-transparent"
                          >
                            <Mail className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
