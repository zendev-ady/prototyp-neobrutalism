import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Plus,
  Search,
  Filter,
  Copy,
  Edit,
  Trash2,
  Eye,
  AlertTriangle,
} from "lucide-react"

const statusColors = {
  draft: "bg-gray-300",
  open: "bg-green-300",
  closed: "bg-blue-300",
  full: "bg-red-300",
  cancelled: "bg-red-400",
  archived: "bg-gray-400",
}

const statusLabels = {
  draft: "NÁVRH",
  open: "OTEVŘENO",
  closed: "UZAVŘENO",
  full: "PLNO",
  cancelled: "ZRUŠENO",
  archived: "ARCHIVOVÁNO",
}

const taboryData = [
  {
    id: "1",
    nazev: "Letní příměstský tábor 2024",
    typ_akce: "tabor",
    datum_od: "2024-07-01",
    datum_do: "2024-07-05",
    cas_od: "08:00",
    cas_do: "16:00",
    lokace: "ZŠ Frýdek-Místek",
    kapacita: 25,
    registered_count: 23,
    confirmed_count: 20,
    waiting_list_count: 3,
    vek_min: 6,
    vek_max: 12,
    status: "full",
    deadline_prihlasek: "2024-06-15",
    show_remaining_spots: true,
    waiting_list_enabled: true,
    cena: 2500,
  },
  {
    id: "2",
    nazev: "Sportovní soustředění - fotbal",
    typ_akce: "soustredeni",
    datum_od: "2024-08-12",
    datum_do: "2024-08-16",
    cas_od: "09:00",
    cas_do: "17:00",
    lokace: "Sportovní areál Ostrava",
    kapacita: 20,
    registered_count: 15,
    confirmed_count: 12,
    waiting_list_count: 0,
    vek_min: 8,
    vek_max: 16,
    status: "open",
    deadline_prihlasek: "2024-08-01",
    show_remaining_spots: false,
    waiting_list_enabled: false,
    cena: 3200,
  },
  {
    id: "3",
    nazev: "Podzimní kroužek programování",
    typ_akce: "krouzek",
    datum_od: "2024-09-15",
    datum_do: "2024-12-15",
    cas_od: "16:00",
    cas_do: "17:30",
    lokace: "Dům dětí a mládeže",
    kapacita: 12,
    registered_count: 8,
    confirmed_count: 8,
    waiting_list_count: 0,
    vek_min: 10,
    vek_max: 15,
    status: "open",
    deadline_prihlasek: "2024-09-10",
    show_remaining_spots: true,
    waiting_list_enabled: true,
    cena: 1800,
  },
  {
    id: "4",
    nazev: "Zimní lyžařský kurz",
    typ_akce: "kurz",
    datum_od: "2025-01-20",
    datum_do: "2025-01-24",
    cas_od: "08:30",
    cas_do: "15:30",
    lokace: "Ski areál Pustevny",
    kapacita: 30,
    registered_count: 0,
    confirmed_count: 0,
    waiting_list_count: 0,
    vek_min: 7,
    vek_max: 14,
    status: "draft",
    deadline_prihlasek: "2025-01-10",
    show_remaining_spots: true,
    waiting_list_enabled: true,
    cena: 4500,
  },
  {
    id: "5",
    nazev: "Velikonoční tábor 2024",
    typ_akce: "tabor",
    datum_od: "2024-03-25",
    datum_do: "2024-03-29",
    cas_od: "08:00",
    cas_do: "16:00",
    lokace: "Rekreační středisko Beskydy",
    kapacita: 40,
    registered_count: 35,
    confirmed_count: 35,
    waiting_list_count: 0,
    vek_min: 6,
    vek_max: 15,
    status: "archived",
    deadline_prihlasek: "2024-03-15",
    show_remaining_spots: false,
    waiting_list_enabled: false,
    cena: 3800,
  },
]

const stats = [
  {
    title: "Celkem akcí",
    value: "5",
    icon: Calendar,
    color: "bg-blue-300",
  },
  {
    title: "Aktivní akce",
    value: "2",
    icon: Users,
    color: "bg-green-300",
  },
  {
    title: "Celkem účastníků",
    value: "81",
    icon: Users,
    color: "bg-pink-300",
  },
  {
    title: "Průměrná obsazenost",
    value: "78%",
    icon: Users,
    color: "bg-yellow-300",
  },
]

export function TaboryContent() {
  const getAvailableSpots = (tabor: any) => {
    return tabor.kapacita - tabor.confirmed_count
  }

  const getCapacityText = (tabor: any) => {
    const available = getAvailableSpots(tabor)
    if (tabor.status === "full") return "PLNO"
    if (tabor.show_remaining_spots) {
      return `Zbývá ${available} míst`
    }
    return available > 0 ? "Volná místa" : "PLNO"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-black">TÁBORY & AKCE</h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Správa táborů, kroužků a akcí</p>
        </div>
        <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm lg:text-base">
          <Plus className="mr-2 h-4 w-4" />
          NOVÁ AKCE
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder="Hledat akce..." className="pl-10 border-2 border-black font-medium" />
            </div>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Typ akce" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny typy</SelectItem>
                <SelectItem value="tabor">Tábory</SelectItem>
                <SelectItem value="krouzek">Kroužky</SelectItem>
                <SelectItem value="soustredeni">Soustředění</SelectItem>
                <SelectItem value="kurz">Kurzy</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny stavy</SelectItem>
                <SelectItem value="draft">Návrh</SelectItem>
                <SelectItem value="open">Otevřeno</SelectItem>
                <SelectItem value="closed">Uzavřeno</SelectItem>
                <SelectItem value="full">Plno</SelectItem>
                <SelectItem value="cancelled">Zrušeno</SelectItem>
                <SelectItem value="archived">Archivováno</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Období" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechna období</SelectItem>
                <SelectItem value="current">Aktuální</SelectItem>
                <SelectItem value="upcoming">Nadcházející</SelectItem>
                <SelectItem value="past">Minulé</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tábory List */}
      <div className="grid grid-cols-1 gap-4">
        {taboryData.map((tabor) => (
          <Card key={tabor.id} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-black text-black mb-1">{tabor.nazev}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={`${statusColors[tabor.status as keyof typeof statusColors]} text-black font-bold border-2 border-black`}
                        >
                          {statusLabels[tabor.status as keyof typeof statusLabels]}
                        </Badge>
                        <Badge variant="outline" className="border-2 border-black font-bold">
                          {tabor.typ_akce.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-black">{tabor.cena.toLocaleString()} Kč</div>
                      <div className="text-sm text-gray-600 font-medium">cena</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="font-medium">
                        {new Date(tabor.datum_od).toLocaleDateString("cs-CZ")} -{" "}
                        {new Date(tabor.datum_do).toLocaleDateString("cs-CZ")}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-2 h-4 w-4" />
                      <span className="font-medium">
                        {tabor.cas_od} - {tabor.cas_do}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span className="font-medium">{tabor.lokace}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="mr-2 h-4 w-4" />
                      <span className="font-medium">
                        Věk: {tabor.vek_min}-{tabor.vek_max} let
                      </span>
                    </div>
                  </div>
                </div>

                {/* Capacity & Actions */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  {/* Capacity Info */}
                  <div className="text-center lg:text-right">
                    <div className="text-lg font-black text-black">
                      {tabor.confirmed_count}/{tabor.kapacita}
                    </div>
                    <div className="text-sm font-bold text-gray-600">{getCapacityText(tabor)}</div>
                    {tabor.waiting_list_count > 0 && (
                      <div className="text-xs font-medium text-orange-600 flex items-center mt-1">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {tabor.waiting_list_count} na čekací listině
                      </div>
                    )}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 border-2 border-black">
                      <div
                        className="bg-green-400 h-full rounded-full border-r border-black"
                        style={{ width: `${Math.min((tabor.confirmed_count / tabor.kapacita) * 100, 100)}%` }}
                      ></div>
                    </div>
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
                      <Copy className="h-4 w-4" />
                    </Button>
                    {tabor.status === "draft" && (
                      <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-red-100 text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader className="border-b-4 border-black bg-yellow-300">
          <CardTitle className="font-black text-black">RYCHLÉ AKCE</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="w-full bg-green-300 hover:bg-green-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Plus className="mr-2 h-4 w-4" />
              NOVÝ TÁBOR
            </Button>
            <Button className="w-full bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Copy className="mr-2 h-4 w-4" />
              KOPÍROVAT Z ŠABLONY
            </Button>
            <Button className="w-full bg-purple-300 hover:bg-purple-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Calendar className="mr-2 h-4 w-4" />
              HROMADNÉ AKCE
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
