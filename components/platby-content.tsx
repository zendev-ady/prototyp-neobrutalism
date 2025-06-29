import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Download,
  Mail,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Receipt,
  FileText,
  Banknote,
  Wallet,
} from "lucide-react"

const statusColors = {
  paid: "bg-green-300",
  partial: "bg-yellow-300",
  unpaid: "bg-red-300",
  overdue: "bg-red-400",
  refunded: "bg-blue-300",
  cancelled: "bg-gray-300",
}

const statusLabels = {
  paid: "ZAPLACENO",
  partial: "ČÁSTEČNĚ",
  unpaid: "NEZAPLACENO",
  overdue: "PO TERMÍNU",
  refunded: "VRÁCENO",
  cancelled: "ZRUŠENO",
}

const statusIcons = {
  paid: CheckCircle,
  partial: Clock,
  unpaid: XCircle,
  overdue: AlertTriangle,
  refunded: TrendingUp,
  cancelled: XCircle,
}

const platbyData = [
  {
    id: "1",
    cislo_faktury: "2024001",
    ucastnik: "Anna Nováková",
    ucastnik_id: "1",
    akce: "Letní příměstský tábor 2024",
    akce_id: "1",
    celkova_castka: 2500,
    zaplaceno: 2500,
    zbyva_doplatit: 0,
    datum_vytvoreni: "2024-05-20T14:30:00",
    datum_splatnosti: "2024-06-15T23:59:59",
    datum_posledni_platby: "2024-06-10T10:15:00",
    status: "paid",
    zpusob_platby: "bankovni_prevod",
    poznamky: "",
    email_rodice: "novakova@email.cz",
    telefon_rodice: "+420 123 456 789",
    pocet_upominek: 0,
    posledni_upominka: null,
    platby: [
      {
        datum: "2024-06-10T10:15:00",
        castka: 2500,
        zpusob: "bankovni_prevod",
        poznamka: "Platba v plné výši",
      },
    ],
  },
  {
    id: "2",
    cislo_faktury: "2024002",
    ucastnik: "Tomáš Svoboda",
    ucastnik_id: "2",
    akce: "Sportovní soustředění - fotbal",
    akce_id: "2",
    celkova_castka: 3200,
    zaplaceno: 1000,
    zbyva_doplatit: 2200,
    datum_vytvoreni: "2024-06-01T09:15:00",
    datum_splatnosti: "2024-07-15T23:59:59",
    datum_posledni_platby: "2024-06-05T14:20:00",
    status: "partial",
    zpusob_platby: "hotovost",
    poznamky: "Záloha zaplacena hotově",
    email_rodice: "svoboda.t@gmail.com",
    telefon_rodice: "+420 987 654 321",
    pocet_upominek: 1,
    posledni_upominka: "2024-07-01T08:00:00",
    platby: [
      {
        datum: "2024-06-05T14:20:00",
        castka: 1000,
        zpusob: "hotovost",
        poznamka: "Záloha",
      },
    ],
  },
  {
    id: "3",
    cislo_faktury: "2024003",
    ucastnik: "Eliška Dvořáková",
    ucastnik_id: "3",
    akce: "Letní příměstský tábor 2024",
    akce_id: "1",
    celkova_castka: 2500,
    zaplaceno: 0,
    zbyva_doplatit: 2500,
    datum_vytvoreni: "2024-05-25T16:45:00",
    datum_splatnosti: "2024-06-15T23:59:59",
    datum_posledni_platby: null,
    status: "overdue",
    zpusob_platby: null,
    poznamky: "Na čekací listině - platba po potvrzení",
    email_rodice: "dvorakova.e@seznam.cz",
    telefon_rodice: "+420 555 123 456",
    pocet_upominek: 3,
    posledni_upominka: "2024-06-20T09:00:00",
    platby: [],
  },
  {
    id: "4",
    cislo_faktury: "2024004",
    ucastnik: "Jakub Procházka",
    ucastnik_id: "4",
    akce: "Podzimní kroužek programování",
    akce_id: "3",
    celkova_castka: 1800,
    zaplaceno: 1800,
    zbyva_doplatit: 0,
    datum_vytvoreni: "2024-08-15T11:20:00",
    datum_splatnosti: "2024-09-01T23:59:59",
    datum_posledni_platby: "2024-08-20T16:30:00",
    status: "paid",
    zpusob_platby: "karta",
    poznamky: "",
    email_rodice: "prochazka.j@email.cz",
    telefon_rodice: "+420 777 888 999",
    pocet_upominek: 0,
    posledni_upominka: null,
    platby: [
      {
        datum: "2024-08-20T16:30:00",
        castka: 1800,
        zpusob: "karta",
        poznamka: "Online platba kartou",
      },
    ],
  },
  {
    id: "5",
    cislo_faktury: "2024005",
    ucastnik: "Martin Krejčí",
    ucastnik_id: "6",
    akce: "Sportovní soustředění - fotbal",
    akce_id: "2",
    celkova_castka: 3200,
    zaplaceno: 3200,
    zbyva_doplatit: 0,
    datum_vytvoreni: "2024-06-05T10:30:00",
    datum_splatnosti: "2024-07-15T23:59:59",
    datum_posledni_platby: "2024-06-08T12:45:00",
    status: "paid",
    zpusob_platby: "bankovni_prevod",
    poznamky: "Včasná platba s bonusem",
    email_rodice: "krejci.martin@email.cz",
    telefon_rodice: "+420 444 555 666",
    pocet_upominek: 0,
    posledni_upominka: null,
    platby: [
      {
        datum: "2024-06-08T12:45:00",
        castka: 3200,
        zpusob: "bankovni_prevod",
        poznamka: "Platba v plné výši",
      },
    ],
  },
  {
    id: "6",
    cislo_faktury: "2024006",
    ucastnik: "Sofie Kratochvílová",
    ucastnik_id: "5",
    akce: "Zimní lyžařský kurz",
    akce_id: "4",
    celkova_castka: 4500,
    zaplaceno: 4500,
    zbyva_doplatit: 0,
    datum_vytvoreni: "2024-11-10T13:00:00",
    datum_splatnosti: "2025-01-10T23:59:59",
    datum_posledni_platby: "2024-11-15T09:30:00",
    status: "refunded",
    zpusob_platby: "bankovni_prevod",
    poznamky: "Vráceno z důvodu zrušení účasti",
    email_rodice: "kratochvilova@gmail.com",
    telefon_rodice: "+420 666 777 888",
    pocet_upominek: 0,
    posledni_upominka: null,
    platby: [
      {
        datum: "2024-11-15T09:30:00",
        castka: 4500,
        zpusob: "bankovni_prevod",
        poznamka: "Platba před zrušením",
      },
      {
        datum: "2024-11-20T14:15:00",
        castka: -4500,
        zpusob: "bankovni_prevod",
        poznamka: "Vrácení platby",
      },
    ],
  },
]

const stats = [
  {
    title: "Celkový obrat",
    value: "245 000 Kč",
    icon: DollarSign,
    color: "bg-green-300",
  },
  {
    title: "Nezaplacené faktury",
    value: "23",
    icon: AlertTriangle,
    color: "bg-red-300",
  },
  {
    title: "Částečně zaplaceno",
    value: "8",
    icon: Clock,
    color: "bg-yellow-300",
  },
  {
    title: "Průměrná platba",
    value: "2 890 Kč",
    icon: TrendingUp,
    color: "bg-blue-300",
  },
]

export function PlatbyContent() {
  const getInitials = (jmeno: string) => {
    const parts = jmeno.split(" ")
    return parts.length >= 2 ? `${parts[0].charAt(0)}${parts[1].charAt(0)}` : jmeno.charAt(0)
  }

  const getPaymentMethodLabel = (method: string | null) => {
    const methods = {
      bankovni_prevod: "Bankovní převod",
      karta: "Platební karta",
      hotovost: "Hotovost",
      null: "Nezvoleno",
    }
    return methods[method as keyof typeof methods] || "Neznámý"
  }

  const getPaymentMethodIcon = (method: string | null) => {
    switch (method) {
      case "bankovni_prevod":
        return Banknote
      case "karta":
        return CreditCard
      case "hotovost":
        return Wallet
      default:
        return Receipt
    }
  }

  const isOverdue = (datum_splatnosti: string, status: string) => {
    if (status === "paid" || status === "refunded" || status === "cancelled") return false
    const deadline = new Date(datum_splatnosti)
    const today = new Date()
    return deadline < today
  }

  const getDaysUntilDeadline = (datum_splatnosti: string) => {
    const deadline = new Date(datum_splatnosti)
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getDeadlineText = (datum_splatnosti: string, status: string) => {
    if (status === "paid") return "Zaplaceno"
    if (status === "refunded") return "Vráceno"
    if (status === "cancelled") return "Zrušeno"

    const days = getDaysUntilDeadline(datum_splatnosti)
    if (days < 0) return `${Math.abs(days)} dní po termínu`
    if (days === 0) return "Dnes"
    if (days === 1) return "Zítra"
    return `${days} dní do splatnosti`
  }

  const getDeadlineColor = (datum_splatnosti: string, status: string) => {
    if (status === "paid") return "text-green-600"
    if (status === "refunded") return "text-blue-600"
    if (status === "cancelled") return "text-gray-600"

    const days = getDaysUntilDeadline(datum_splatnosti)
    if (days < 0) return "text-red-600"
    if (days <= 3) return "text-orange-600"
    return "text-gray-600"
  }

  const formatAmount = (amount: number) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-black">PLATBY</h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Správa plateb a fakturace</p>
        </div>
        <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm lg:text-base">
          <Plus className="mr-2 h-4 w-4" />
          NOVÁ FAKTURA
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.title}</p>
                  <p className="text-xl lg:text-2xl font-black text-black mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 border-2 border-black`}>
                  <stat.icon className="h-5 w-5 lg:h-6 lg:w-6 text-black" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader className="border-b-4 border-black bg-purple-300">
          <CardTitle className="font-black text-black flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            FILTRY
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder="Hledat fakturu..." className="pl-10 border-2 border-black font-medium" />
            </div>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Status platby" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny stavy</SelectItem>
                <SelectItem value="paid">Zaplaceno</SelectItem>
                <SelectItem value="partial">Částečně zaplaceno</SelectItem>
                <SelectItem value="unpaid">Nezaplaceno</SelectItem>
                <SelectItem value="overdue">Po termínu</SelectItem>
                <SelectItem value="refunded">Vráceno</SelectItem>
                <SelectItem value="cancelled">Zrušeno</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Způsob platby" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny způsoby</SelectItem>
                <SelectItem value="bankovni_prevod">Bankovní převod</SelectItem>
                <SelectItem value="karta">Platební karta</SelectItem>
                <SelectItem value="hotovost">Hotovost</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Akce" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny akce</SelectItem>
                <SelectItem value="1">Letní příměstský tábor</SelectItem>
                <SelectItem value="2">Sportovní soustředění</SelectItem>
                <SelectItem value="3">Kroužek programování</SelectItem>
                <SelectItem value="4">Zimní lyžařský kurz</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Období" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechna období</SelectItem>
                <SelectItem value="current_month">Tento měsíc</SelectItem>
                <SelectItem value="last_month">Minulý měsíc</SelectItem>
                <SelectItem value="current_year">Tento rok</SelectItem>
                <SelectItem value="overdue_only">Pouze po termínu</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold border-2 border-black">
              <Download className="mr-2 h-4 w-4" />
              EXPORT
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Platby List */}
      <div className="grid grid-cols-1 gap-4">
        {platbyData.map((platba) => {
          const StatusIcon = statusIcons[platba.status as keyof typeof statusIcons]
          const PaymentMethodIcon = getPaymentMethodIcon(platba.zpusob_platby)
          const overdue = isOverdue(platba.datum_splatnosti, platba.status)

          return (
            <Card key={platba.id} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Main Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-12 w-12 border-2 border-black">
                      <AvatarFallback className="bg-blue-300 text-black font-bold">
                        {getInitials(platba.ucastnik)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-black text-black">{platba.ucastnik}</h3>
                        <Badge
                          className={`${statusColors[platba.status as keyof typeof statusColors]} text-black font-bold border-2 border-black flex items-center gap-1`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {statusLabels[platba.status as keyof typeof statusLabels]}
                        </Badge>
                        {overdue && (
                          <Badge className="bg-red-400 text-white font-bold border-2 border-black">PO TERMÍNU</Badge>
                        )}
                      </div>

                      <div className="text-sm font-medium text-gray-700 mb-2">
                        <div className="font-bold text-black">{platba.akce}</div>
                        <div>Faktura č. {platba.cislo_faktury}</div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span className="font-medium">
                            Vytvořeno: {new Date(platba.datum_vytvoreni).toLocaleDateString("cs-CZ")}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="mr-2 h-4 w-4" />
                          <span className={`font-medium ${getDeadlineColor(platba.datum_splatnosti, platba.status)}`}>
                            {getDeadlineText(platba.datum_splatnosti, platba.status)}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Mail className="mr-2 h-4 w-4" />
                          <span className="font-medium">{platba.email_rodice}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <PaymentMethodIcon className="mr-2 h-4 w-4" />
                          <span className="font-medium">{getPaymentMethodLabel(platba.zpusob_platby)}</span>
                        </div>
                      </div>

                      {/* Upomínky */}
                      {platba.pocet_upominek > 0 && (
                        <div className="mb-3 p-2 bg-orange-100 border-2 border-orange-400 rounded">
                          <div className="flex items-center text-orange-700 text-sm">
                            <Mail className="mr-2 h-4 w-4" />
                            <strong>Upomínky:</strong> {platba.pocet_upominek}x (poslední:{" "}
                            {platba.posledni_upominka
                              ? new Date(platba.posledni_upominka).toLocaleDateString("cs-CZ")
                              : "N/A"}
                            )
                          </div>
                        </div>
                      )}

                      {/* Poznámky */}
                      {platba.poznamky && (
                        <div className="p-2 bg-blue-100 border-2 border-blue-400 rounded text-sm">
                          <strong>Poznámky:</strong> {platba.poznamky}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment Info & Actions */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    {/* Payment Amount */}
                    <div className="text-center lg:text-right">
                      <div className="text-2xl font-black text-black">{formatAmount(platba.celkova_castka)} Kč</div>
                      <div className="text-sm font-bold text-green-600">
                        Zaplaceno: {formatAmount(platba.zaplaceno)} Kč
                      </div>
                      {platba.zbyva_doplatit > 0 && (
                        <div className="text-sm font-bold text-red-600">
                          Zbývá: {formatAmount(platba.zbyva_doplatit)} Kč
                        </div>
                      )}

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2 border-2 border-black">
                        <div
                          className="bg-green-400 h-full rounded-full border-r border-black"
                          style={{ width: `${Math.min((platba.zaplaceno / platba.celkova_castka) * 100, 100)}%` }}
                        ></div>
                      </div>

                      {/* Last Payment */}
                      {platba.datum_posledni_platby && (
                        <div className="text-xs text-gray-600 mt-1">
                          Poslední platba: {new Date(platba.datum_posledni_platby).toLocaleDateString("cs-CZ")}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-gray-100">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-gray-100">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-gray-100">
                        <FileText className="h-4 w-4" />
                      </Button>
                      {(platba.status === "unpaid" || platba.status === "partial") && (
                        <Button
                          size="sm"
                          className="bg-orange-300 hover:bg-orange-400 text-black font-bold border-2 border-black"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader className="border-b-4 border-black bg-yellow-300">
          <CardTitle className="font-black text-black">RYCHLÉ AKCE</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="w-full bg-green-300 hover:bg-green-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Plus className="mr-2 h-4 w-4" />
              NOVÁ FAKTURA
            </Button>
            <Button className="w-full bg-orange-300 hover:bg-orange-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Mail className="mr-2 h-4 w-4" />
              POSLAT UPOMÍNKY
            </Button>
            <Button className="w-full bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Download className="mr-2 h-4 w-4" />
              EXPORT FAKTUR
            </Button>
            <Button className="w-full bg-purple-300 hover:bg-purple-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Receipt className="mr-2 h-4 w-4" />
              FINANČNÍ PŘEHLED
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
