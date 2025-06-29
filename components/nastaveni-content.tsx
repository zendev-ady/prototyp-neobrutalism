"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Building2,
  Users,
  Mail,
  Bell,
  Shield,
  Database,
  CreditCard,
  Globe,
  Save,
  Upload,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Key,
  UserPlus,
  AlertTriangle,
} from "lucide-react"

export function NastaveniContent() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    upominky: true,
    platby: true,
    prihlasky: true,
  })

  const [organizaceData, setOrganizaceData] = useState({
    nazev: "Letní tábor Sluníčko",
    ico: "12345678",
    dic: "CZ12345678",
    adresa: "Táborová 123, 123 45 Praha",
    telefon: "+420 123 456 789",
    email: "info@taborslunicko.cz",
    web: "www.taborslunicko.cz",
    logo: null,
  })

  const [emailSettings, setEmailSettings] = useState({
    smtp_server: "smtp.gmail.com",
    smtp_port: "587",
    smtp_username: "info@taborslunicko.cz",
    smtp_password: "••••••••••••",
    from_name: "Letní tábor Sluníčko",
    from_email: "info@taborslunicko.cz",
  })

  const [platbySettings, setPlatbySettings] = useState({
    bank_account: "123456789/0100",
    variabilni_symbol_prefix: "2024",
    splatnost_dni: 30,
    upominka_dni: 7,
    automaticke_upominky: true,
    qr_platby: true,
  })

  const uzivatele = [
    {
      id: 1,
      jmeno: "Jan Novák",
      email: "jan.novak@taborslunicko.cz",
      role: "admin",
      posledni_prihlaseni: "2024-02-28 14:30",
      aktivni: true,
    },
    {
      id: 2,
      jmeno: "Marie Svobodová",
      email: "marie.svobodova@taborslunicko.cz",
      role: "vedouci",
      posledni_prihlaseni: "2024-02-27 09:15",
      aktivni: true,
    },
    {
      id: 3,
      jmeno: "Tomáš Dvořák",
      email: "tomas.dvorak@taborslunicko.cz",
      role: "asistent",
      posledni_prihlaseni: "2024-02-25 16:45",
      aktivni: false,
    },
  ]

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-red-300 text-black font-bold border-2 border-black">ADMIN</Badge>
      case "vedouci":
        return <Badge className="bg-blue-300 text-black font-bold border-2 border-black">VEDOUCÍ</Badge>
      case "asistent":
        return <Badge className="bg-green-300 text-black font-bold border-2 border-black">ASISTENT</Badge>
      default:
        return <Badge className="bg-gray-300 text-black font-bold border-2 border-black">NEZNÁMÁ</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-black">NASTAVENÍ</h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Konfigurace systému a organizace</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Save className="mr-2 h-4 w-4" />
            ULOŽIT ZMĚNY
          </Button>
          <Button className="bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Download className="mr-2 h-4 w-4" />
            EXPORT
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="organizace" className="space-y-6">
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="border-b-4 border-black bg-yellow-300">
            <CardTitle className="font-black text-black">KATEGORIE NASTAVENÍ</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 bg-white border-0 rounded-none h-auto">
              <TabsTrigger
                value="organizace"
                className="font-bold border-r-2 border-black last:border-r-0 data-[state=active]:bg-yellow-300 data-[state=active]:text-black rounded-none py-4"
              >
                <Building2 className="mr-2 h-4 w-4" />
                ORGANIZACE
              </TabsTrigger>
              <TabsTrigger
                value="uzivatele"
                className="font-bold border-r-2 border-black last:border-r-0 data-[state=active]:bg-yellow-300 data-[state=active]:text-black rounded-none py-4"
              >
                <Users className="mr-2 h-4 w-4" />
                UŽIVATELÉ
              </TabsTrigger>
              <TabsTrigger
                value="email"
                className="font-bold border-r-2 border-black last:border-r-0 data-[state=active]:bg-yellow-300 data-[state=active]:text-black rounded-none py-4"
              >
                <Mail className="mr-2 h-4 w-4" />
                EMAIL
              </TabsTrigger>
              <TabsTrigger
                value="platby"
                className="font-bold border-r-2 border-black last:border-r-0 data-[state=active]:bg-yellow-300 data-[state=active]:text-black rounded-none py-4"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                PLATBY
              </TabsTrigger>
              <TabsTrigger
                value="notifikace"
                className="font-bold border-r-2 border-black last:border-r-0 data-[state=active]:bg-yellow-300 data-[state=active]:text-black rounded-none py-4"
              >
                <Bell className="mr-2 h-4 w-4" />
                NOTIFIKACE
              </TabsTrigger>
              <TabsTrigger
                value="system"
                className="font-bold data-[state=active]:bg-yellow-300 data-[state=active]:text-black rounded-none py-4"
              >
                <Database className="mr-2 h-4 w-4" />
                SYSTÉM
              </TabsTrigger>
            </TabsList>
          </CardContent>
        </Card>

        {/* Organizace Tab */}
        <TabsContent value="organizace">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="border-b-4 border-black bg-purple-300">
                <CardTitle className="flex items-center gap-2 font-black text-black">
                  <Building2 className="h-5 w-5" />
                  ZÁKLADNÍ ÚDAJE
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nazev" className="font-bold text-black uppercase text-sm">
                    Název organizace
                  </Label>
                  <Input
                    id="nazev"
                    value={organizaceData.nazev}
                    onChange={(e) => setOrganizaceData({ ...organizaceData, nazev: e.target.value })}
                    className="border-2 border-black font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ico" className="font-bold text-black uppercase text-sm">
                      IČO
                    </Label>
                    <Input
                      id="ico"
                      value={organizaceData.ico}
                      onChange={(e) => setOrganizaceData({ ...organizaceData, ico: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dic" className="font-bold text-black uppercase text-sm">
                      DIČ
                    </Label>
                    <Input
                      id="dic"
                      value={organizaceData.dic}
                      onChange={(e) => setOrganizaceData({ ...organizaceData, dic: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adresa" className="font-bold text-black uppercase text-sm">
                    Adresa
                  </Label>
                  <Textarea
                    id="adresa"
                    value={organizaceData.adresa}
                    onChange={(e) => setOrganizaceData({ ...organizaceData, adresa: e.target.value })}
                    className="border-2 border-black font-medium"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="border-b-4 border-black bg-green-300">
                <CardTitle className="flex items-center gap-2 font-black text-black">
                  <Globe className="h-5 w-5" />
                  KONTAKTNÍ ÚDAJE
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="telefon" className="font-bold text-black uppercase text-sm">
                    Telefon
                  </Label>
                  <Input
                    id="telefon"
                    value={organizaceData.telefon}
                    onChange={(e) => setOrganizaceData({ ...organizaceData, telefon: e.target.value })}
                    className="border-2 border-black font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-black uppercase text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={organizaceData.email}
                    onChange={(e) => setOrganizaceData({ ...organizaceData, email: e.target.value })}
                    className="border-2 border-black font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="web" className="font-bold text-black uppercase text-sm">
                    Webové stránky
                  </Label>
                  <Input
                    id="web"
                    value={organizaceData.web}
                    onChange={(e) => setOrganizaceData({ ...organizaceData, web: e.target.value })}
                    className="border-2 border-black font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-bold text-black uppercase text-sm">Logo organizace</Label>
                  <div className="border-2 border-dashed border-black p-4 text-center bg-gray-50">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 font-medium">Přetáhněte logo nebo klikněte pro výběr</p>
                    <Button className="mt-2 bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black">
                      VYBRAT SOUBOR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Uživatelé Tab */}
        <TabsContent value="uzivatele">
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-blue-300">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 font-black text-black">
                  <Users className="h-5 w-5" />
                  SPRÁVA UŽIVATELŮ
                </CardTitle>
                <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <UserPlus className="mr-2 h-4 w-4" />
                  PŘIDAT UŽIVATELE
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {uzivatele.map((uzivatel) => (
                  <div
                    key={uzivatel.id}
                    className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center font-black text-lg">
                        {uzivatel.jmeno
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-black text-black">{uzivatel.jmeno}</div>
                        <div className="text-sm text-gray-600 font-medium">{uzivatel.email}</div>
                        <div className="text-xs text-gray-500 font-medium">
                          Poslední přihlášení: {uzivatel.posledni_prihlaseni}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getRoleBadge(uzivatel.role)}
                      <div className="flex items-center gap-2">
                        <Switch checked={uzivatel.aktivni} />
                        <span className="text-sm font-bold">{uzivatel.aktivni ? "AKTIVNÍ" : "NEAKTIVNÍ"}</span>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-gray-100">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-gray-100">
                          <Key className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="border-2 border-black hover:bg-red-100 text-red-600"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Tab */}
        <TabsContent value="email">
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-pink-300">
              <CardTitle className="flex items-center gap-2 font-black text-black">
                <Mail className="h-5 w-5" />
                NASTAVENÍ EMAILU
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-black text-lg text-black uppercase">SMTP Server</h3>
                  <div className="space-y-2">
                    <Label htmlFor="smtp_server" className="font-bold text-black uppercase text-sm">
                      SMTP Server
                    </Label>
                    <Input
                      id="smtp_server"
                      value={emailSettings.smtp_server}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtp_server: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp_port" className="font-bold text-black uppercase text-sm">
                      Port
                    </Label>
                    <Input
                      id="smtp_port"
                      value={emailSettings.smtp_port}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtp_port: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp_username" className="font-bold text-black uppercase text-sm">
                      Uživatelské jméno
                    </Label>
                    <Input
                      id="smtp_username"
                      value={emailSettings.smtp_username}
                      onChange={(e) => setEmailSettings({ ...emailSettings, smtp_username: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp_password" className="font-bold text-black uppercase text-sm">
                      Heslo
                    </Label>
                    <div className="relative">
                      <Input
                        id="smtp_password"
                        type={showApiKey ? "text" : "password"}
                        value={emailSettings.smtp_password}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtp_password: e.target.value })}
                        className="border-2 border-black font-medium pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-black text-lg text-black uppercase">Odesílatel</h3>
                  <div className="space-y-2">
                    <Label htmlFor="from_name" className="font-bold text-black uppercase text-sm">
                      Jméno odesílatele
                    </Label>
                    <Input
                      id="from_name"
                      value={emailSettings.from_name}
                      onChange={(e) => setEmailSettings({ ...emailSettings, from_name: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from_email" className="font-bold text-black uppercase text-sm">
                      Email odesílatele
                    </Label>
                    <Input
                      id="from_email"
                      type="email"
                      value={emailSettings.from_email}
                      onChange={(e) => setEmailSettings({ ...emailSettings, from_email: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>

                  <div className="mt-6">
                    <Button className="bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <Mail className="mr-2 h-4 w-4" />
                      OTESTOVAT PŘIPOJENÍ
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Platby Tab */}
        <TabsContent value="platby">
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-orange-300">
              <CardTitle className="flex items-center gap-2 font-black text-black">
                <CreditCard className="h-5 w-5" />
                NASTAVENÍ PLATEB
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-black text-lg text-black uppercase">Bankovní údaje</h3>
                  <div className="space-y-2">
                    <Label htmlFor="bank_account" className="font-bold text-black uppercase text-sm">
                      Číslo účtu
                    </Label>
                    <Input
                      id="bank_account"
                      value={platbySettings.bank_account}
                      onChange={(e) => setPlatbySettings({ ...platbySettings, bank_account: e.target.value })}
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vs_prefix" className="font-bold text-black uppercase text-sm">
                      Prefix variabilního symbolu
                    </Label>
                    <Input
                      id="vs_prefix"
                      value={platbySettings.variabilni_symbol_prefix}
                      onChange={(e) =>
                        setPlatbySettings({ ...platbySettings, variabilni_symbol_prefix: e.target.value })
                      }
                      className="border-2 border-black font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-black text-lg text-black uppercase">Termíny a upomínky</h3>
                  <div className="space-y-2">
                    <Label htmlFor="splatnost" className="font-bold text-black uppercase text-sm">
                      Splatnost (dny)
                    </Label>
                    <Input
                      id="splatnost"
                      type="number"
                      value={platbySettings.splatnost_dni}
                      onChange={(e) =>
                        setPlatbySettings({ ...platbySettings, splatnost_dni: Number.parseInt(e.target.value) })
                      }
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="upominka" className="font-bold text-black uppercase text-sm">
                      Upomínka po (dny)
                    </Label>
                    <Input
                      id="upominka"
                      type="number"
                      value={platbySettings.upominka_dni}
                      onChange={(e) =>
                        setPlatbySettings({ ...platbySettings, upominka_dni: Number.parseInt(e.target.value) })
                      }
                      className="border-2 border-black font-medium"
                    />
                  </div>
                  <div className="flex items-center space-x-2 p-3 border-2 border-black bg-white">
                    <Switch
                      id="auto_upominky"
                      checked={platbySettings.automaticke_upominky}
                      onCheckedChange={(checked) =>
                        setPlatbySettings({ ...platbySettings, automaticke_upominky: checked })
                      }
                    />
                    <Label htmlFor="auto_upominky" className="font-bold text-black uppercase text-sm">
                      Automatické upomínky
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border-2 border-black bg-white">
                    <Switch
                      id="qr_platby"
                      checked={platbySettings.qr_platby}
                      onCheckedChange={(checked) => setPlatbySettings({ ...platbySettings, qr_platby: checked })}
                    />
                    <Label htmlFor="qr_platby" className="font-bold text-black uppercase text-sm">
                      QR kódy pro platby
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifikace Tab */}
        <TabsContent value="notifikace">
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-cyan-300">
              <CardTitle className="flex items-center gap-2 font-black text-black">
                <Bell className="h-5 w-5" />
                NASTAVENÍ NOTIFIKACÍ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-black text-lg text-black uppercase">Typy notifikací</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <div className="font-black text-black">EMAIL NOTIFIKACE</div>
                      <div className="text-sm text-gray-600 font-medium">Zasílání emailových upozornění</div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <div className="font-black text-black">SMS NOTIFIKACE</div>
                      <div className="text-sm text-gray-600 font-medium">Zasílání SMS zpráv</div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <div className="font-black text-black">PUSH NOTIFIKACE</div>
                      <div className="text-sm text-gray-600 font-medium">Upozornění v prohlížeči</div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                </div>

                <Separator className="border-2 border-black" />

                <h3 className="font-black text-lg text-black uppercase">Události pro notifikace</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <div className="font-black text-black">UPOMÍNKY PLATEB</div>
                      <div className="text-sm text-gray-600 font-medium">Upozornění na neuhrazené faktury</div>
                    </div>
                    <Switch
                      checked={notifications.upominky}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, upominky: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <div className="font-black text-black">NOVÉ PLATBY</div>
                      <div className="text-sm text-gray-600 font-medium">Upozornění na přijaté platby</div>
                    </div>
                    <Switch
                      checked={notifications.platby}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, platby: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                      <div className="font-black text-black">NOVÉ PŘIHLÁŠKY</div>
                      <div className="text-sm text-gray-600 font-medium">Upozornění na nové přihlášky</div>
                    </div>
                    <Switch
                      checked={notifications.prihlasky}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, prihlasky: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Systém Tab */}
        <TabsContent value="system">
          <div className="space-y-6">
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="border-b-4 border-black bg-gray-300">
                <CardTitle className="flex items-center gap-2 font-black text-black">
                  <Database className="h-5 w-5" />
                  SYSTÉMOVÉ INFORMACE
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-bold text-black uppercase text-sm">Verze systému</Label>
                    <div className="p-3 bg-gray-100 border-2 border-black font-mono font-bold">v2.1.0</div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-black uppercase text-sm">Poslední aktualizace</Label>
                    <div className="p-3 bg-gray-100 border-2 border-black font-mono font-bold">28.02.2024 14:30</div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-black uppercase text-sm">Databáze</Label>
                    <div className="p-3 bg-green-100 border-2 border-black font-mono font-bold text-green-700">
                      ✅ PŘIPOJENO
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-black uppercase text-sm">Úložiště</Label>
                    <div className="p-3 bg-green-100 border-2 border-black font-mono font-bold text-green-700">
                      ✅ 2.3 GB / 10 GB
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="border-b-4 border-black bg-blue-300">
                <CardTitle className="flex items-center gap-2 font-black text-black">
                  <Shield className="h-5 w-5" />
                  ZÁLOHA A OBNOVENÍ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Download className="mr-2 h-4 w-4" />
                    VYTVOŘIT ZÁLOHU
                  </Button>
                  <Button className="bg-purple-300 hover:bg-purple-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Upload className="mr-2 h-4 w-4" />
                    OBNOVIT ZE ZÁLOHY
                  </Button>
                </div>
                <div className="text-sm text-gray-600 font-medium">Poslední záloha: 27.02.2024 02:00 (automatická)</div>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-500 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
              <CardHeader className="border-b-4 border-red-500 bg-red-300">
                <CardTitle className="flex items-center gap-2 font-black text-black">
                  <AlertTriangle className="h-5 w-5" />
                  NEBEZPEČNÁ ZÓNA
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label className="font-bold text-red-600 uppercase text-sm">Vymazat všechna data</Label>
                  <p className="text-sm text-gray-600 font-medium">
                    Tato akce je nevratná a smaže všechny přihlášky, účastníky, platby a nastavení.
                  </p>
                  <Button className="bg-red-400 hover:bg-red-500 text-white font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Trash2 className="mr-2 h-4 w-4" />
                    VYMAZAT VŠECHNA DATA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
