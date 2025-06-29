import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Mail,
  Phone,
  CreditCard,
  UserCheck,
  UserX,
  Timer,
} from "lucide-react"

const statusColors = {
  pending: "bg-yellow-300",
  confirmed: "bg-green-300",
  rejected: "bg-red-300",
  waiting_list: "bg-orange-300",
  cancelled: "bg-gray-300",
  paid: "bg-blue-300",
}

const statusLabels = {
  pending: "ČEKÁ",
  confirmed: "POTVRZENO",
  rejected: "ZAMÍTNUTO",
  waiting_list: "ČEKACÍ LISTINA",
  cancelled: "ZRUŠENO",
  paid: "ZAPLACENO",
}

const statusIcons = {
  pending: Timer,
  confirmed: CheckCircle,
  rejected: XCircle,
  waiting_list: Clock,
  cancelled: UserX,
  paid: CreditCard,
}

const prihlaskyData = [
  {
    id: "1",
    jmeno: "Anna",
    prijmeni: "Nováková",
    datum_narozeni: "2012-03-15",
    email_rodice: "novakova@email.cz",
    telefon_rodice: "+420 123 456 789",
    akce: "Letní příměstský tábor 2024",
    akce_id: "1",
    datum_prihlaseni: "2024-05-20T14:30:00",
    status: "confirmed",
    poznamky: "Alergie na ořechy",
    cena: 2500,
    zaplaceno: 2500,
    zbyva_doplatit: 0,
    vek: 12,
    deadline_platby: "2024-06-15",
  },
  {
    id: "2",
    jmeno: "Tomáš",
    prijmeni: "Svoboda",
    datum_narozeni: "2014-07-22",
    email_rodice: "svoboda.t@gmail.com",
    telefon_rodice: "+420 987 654 321",
    akce: "Sportovní soustředění - fotbal",
    akce_id: "2",
    datum_prihlaseni: "2024-06-01T09:15:00",
    status: "pending",
    poznamky: "",
    cena: 3200,
    zaplaceno: 1000,
    zbyva_doplatit: 2200,
    vek: 10,
    deadline_platby: "2024-07-15",
  },
  {
    id: "3",
    jmeno: "Eliška",
    prijmeni: "Dvořáková",
    datum_narozeni: "2013-11-08",
    email_rodice: "dvorakova.e@seznam.cz",
    telefon_rodice: "+420 555 123 456",
    akce: "Letní příměstský tábor 2024",
    akce_id: "1",
    datum_prihlaseni: "2024-05-25T16:45:00",
    status: "waiting_list",
    poznamky: "Preferuje vegetariánskou stravu",
    cena: 2500,
    zaplaceno: 0,
    zbyva_doplatit: 2500,
    vek: 11,
    deadline_platby: "2024-06-15",
  },
  {
    id: "4",
    jmeno: "Jakub",
    prijmeni: "Procházka",
    datum_narozeni: "2015-01-30",
    email_rodice: "prochazka.j@email.cz",
    telefon_rodice: "+420 777 888 999",
    akce: "Podzimní kroužek programování",
    akce_id: "3",
    datum_prihlaseni: "2024-08-15T11:20:00",
    status: "confirmed",
    poznamky: "Má vlastní notebook",
    cena: 1800,
    zaplaceno: 1800,
    zbyva_doplatit: 0,
    vek: 9,
    deadline_platby: "2024-09-01",
  },
  {
    id: "5",
    jmeno: "Sofie",
    prijmeni: "Kratochvílová",
    datum_narozeni: "2016-05-12",
    email_rodice: "kratochvilova@gmail.com",
    telefon_rodice: "+420 666 777 888",
    akce: "Zimní lyžařský kurz",
    akce_id: "4",
    datum_prihlaseni: "2024-11-10T13:00:00",
    status: "rejected",
    poznamky: "Věk mimo limit",
    cena: 4500,
    zaplaceno: 0,
    zbyva_doplatit: 4500,
    vek: 8,
    deadline_platby: "2025-01-10",
  },
  {
    id: "6",
    jmeno: "Martin",
    prijmeni: "Krejčí",
    datum_narozeni: "2011-09-03",
    email_rodice: "krejci.martin@email.cz",
    telefon_rodice: "+420 444 555 666",
    akce: "Sportovní soustředění - fotbal",
    akce_id: "2",
    datum_prihlaseni: "2024-06-05T10:30:00",
    status: "paid",
    poznamky: "",
    cena: 3200,
    zaplaceno: 3200,
    zbyva_doplatit: 0,
    vek: 13,
    deadline_platby: "2024-07-15",
  },
]

const stats = [
  {
    title: "Celkem přihlášek",
    value: "247",
    icon: FileText,
    color: "bg-blue-300",
  },
  {
    title: "Čeká na potvrzení",
    value: "23",
    icon: Timer,
    color: "bg-yellow-300",
  },
  {
    title: "Potvrzené",
    value: "189",
    icon: CheckCircle,
    color: "bg-green-300",
  },
  {
    title: "Čekací listina",
    value: "35",
    icon: Clock,
    color: "bg-orange-300",
  },
]

export function PrihlaskyContent() {
  const getInitials = (jmeno: string, prijmeni: string) => {
    return `${jmeno.charAt(0)}${prijmeni.charAt(0)}`
  }

  const getPaymentStatus = (prihlaška: any) => {
    if (prihlaška.zaplaceno === 0) return "Nezaplaceno"
    if (prihlaška.zbyva_doplatit === 0) return "Zaplaceno"
    return `Záloha ${prihlaška.zaplaceno} Kč`
  }

  const getPaymentColor = (prihlaška: any) => {
    if (prihlaška.zaplaceno === 0) return "text-red-600"
    if (prihlaška.zbyva_doplatit === 0) return "text-green-600"
    return "text-orange-600"
  }

  const isDeadlineClose = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffDays = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    return diffDays <= 7 && diffDays > 0
  }

  const isDeadlinePassed = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    return deadlineDate < today
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-black">PŘIHLÁŠKY</h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Správa přihlášek účastníků</p>
        </div>
        <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm lg:text-base">
          <Plus className="mr-2 h-4 w-4" />
          NOVÁ PŘIHLÁŠKA
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder="Hledat účastníka..." className="pl-10 border-2 border-black font-medium" />
            </div>
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
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny stavy</SelectItem>
                <SelectItem value="pending">Čeká na potvrzení</SelectItem>
                <SelectItem value="confirmed">Potvrzeno</SelectItem>
                <SelectItem value="waiting_list">Čekací listina</SelectItem>
                <SelectItem value="rejected">Zamítnuto</SelectItem>
                <SelectItem value="cancelled">Zrušeno</SelectItem>
                <SelectItem value="paid">Zaplaceno</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Platby" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny platby</SelectItem>
                <SelectItem value="paid">Zaplaceno</SelectItem>
                <SelectItem value="partial">Částečně zaplaceno</SelectItem>
                <SelectItem value="unpaid">Nezaplaceno</SelectItem>
                <SelectItem value="overdue">Po termínu</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold border-2 border-black">
              <Download className="mr-2 h-4 w-4" />
              EXPORT
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Přihlášky List */}
      <div className="grid grid-cols-1 gap-4">
        {prihlaskyData.map((prihlaška) => {
          const StatusIcon = statusIcons[prihlaška.status as keyof typeof statusIcons]
          return (
            <Card key={prihlaška.id} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Participant Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-12 w-12 border-2 border-black">
                      <AvatarFallback className="bg-blue-300 text-black font-bold">
                        {getInitials(prihlaška.jmeno, prihlaška.prijmeni)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-black text-black">
                          {prihlaška.jmeno} {prihlaška.prijmeni}
                        </h3>
                        <Badge
                          className={`${statusColors[prihlaška.status as keyof typeof statusColors]} text-black font-bold border-2 border-black flex items-center gap-1`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {statusLabels[prihlaška.status as keyof typeof statusLabels]}
                        </Badge>
                      </div>

                      <div className="text-sm font-medium text-gray-700 mb-2">
                        <div className="font-bold text-black">{prihlaška.akce}</div>
                        <div>
                          Věk: {prihlaška.vek} let • Přihlášeno:{" "}
                          {new Date(prihlaška.datum_prihlaseni).toLocaleDateString("cs-CZ")}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center text-gray-700">
                          <Mail className="mr-2 h-4 w-4" />
                          <span className="font-medium">{prihlaška.email_rodice}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Phone className="mr-2 h-4 w-4" />
                          <span className="font-medium">{prihlaška.telefon_rodice}</span>
                        </div>
                      </div>

                      {prihlaška.poznamky && (
                        <div className="mt-2 p-2 bg-yellow-100 border-2 border-yellow-400 rounded text-sm">
                          <strong>Poznámky:</strong> {prihlaška.poznamky}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment & Actions */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    {/* Payment Info */}
                    <div className="text-center lg:text-right">
                      <div className="text-lg font-black text-black">{prihlaška.cena.toLocaleString()} Kč</div>
                      <div className={`text-sm font-bold ${getPaymentColor(prihlaška)}`}>
                        {getPaymentStatus(prihlaška)}
                      </div>
                      {prihlaška.zbyva_doplatit > 0 && (
                        <div className="text-xs text-gray-600 mt-1">
                          Zbývá: {prihlaška.zbyva_doplatit.toLocaleString()} Kč
                        </div>
                      )}

                      {/* Payment Deadline Warning */}
                      {prihlaška.zbyva_doplatit > 0 && (
                        <div className="mt-2">
                          {isDeadlinePassed(prihlaška.deadline_platby) ? (
                            <Badge className="bg-red-400 text-white font-bold border-2 border-black">PO TERMÍNU</Badge>
                          ) : isDeadlineClose(prihlaška.deadline_platby) ? (
                            <Badge className="bg-orange-400 text-black font-bold border-2 border-black">
                              BLÍŽÍ SE TERMÍN
                            </Badge>
                          ) : (
                            <div className="text-xs text-gray-600">
                              Do: {new Date(prihlaška.deadline_platby).toLocaleDateString("cs-CZ")}
                            </div>
                          )}
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
                      {prihlaška.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            className="bg-green-300 hover:bg-green-400 text-black font-bold border-2 border-black"
                          >
                            <UserCheck className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-300 hover:bg-red-400 text-black font-bold border-2 border-black"
                          >
                            <UserX className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-red-100 text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
              <UserCheck className="mr-2 h-4 w-4" />
              HROMADNÉ POTVRZENÍ
            </Button>
            <Button className="w-full bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Mail className="mr-2 h-4 w-4" />
              POSLAT UPOMÍNKY
            </Button>
            <Button className="w-full bg-purple-300 hover:bg-purple-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Download className="mr-2 h-4 w-4" />
              EXPORT SEZNAMU
            </Button>
            <Button className="w-full bg-orange-300 hover:bg-orange-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CreditCard className="mr-2 h-4 w-4" />
              SPRÁVA PLATEB
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
