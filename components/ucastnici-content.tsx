import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  AlertTriangle,
  Star,
  GroupIcon as Family,
} from "lucide-react"

const ucastniciData = [
  {
    id: "1",
    jmeno: "Anna",
    prijmeni: "Nováková",
    datum_narozeni: "2012-03-15",
    vek: 12,
    pohlavi: "F",
    adresa: "Hlavní 123, 738 01 Frýdek-Místek",
    email_rodice: "novakova@email.cz",
    telefon_rodice: "+420 123 456 789",
    jmeno_rodice: "Marie Nováková",
    zdravotni_omezeni: ["Alergie na ořechy"],
    poznamky: "Velmi aktivní, ráda maluje",
    pocet_ucastí: 5,
    posledni_ucast: "2024-07-05",
    oblibene_aktivity: ["Výtvarné činnosti", "Sport"],
    status: "active",
    hodnoceni: 5,
    rodina_id: "rodina_1",
    sourozenci: ["Tomáš Novák (9 let)"],
  },
  {
    id: "2",
    jmeno: "Tomáš",
    prijmeni: "Svoboda",
    datum_narozeni: "2014-07-22",
    vek: 10,
    pohlavi: "M",
    adresa: "Školní 45, 739 61 Ostrava",
    email_rodice: "svoboda.t@gmail.com",
    telefon_rodice: "+420 987 654 321",
    jmeno_rodice: "Pavel Svoboda",
    zdravotni_omezeni: [],
    poznamky: "Nadaný na sport, hraje fotbal",
    pocet_ucastí: 3,
    posledni_ucast: "2024-08-16",
    oblibene_aktivity: ["Fotbal", "Atletika"],
    status: "active",
    hodnoceni: 4,
    rodina_id: "rodina_2",
    sourozenci: [],
  },
  {
    id: "3",
    jmeno: "Eliška",
    prijmeni: "Dvořáková",
    datum_narozeni: "2013-11-08",
    vek: 11,
    pohlavi: "F",
    adresa: "Nádražní 78, 741 01 Nový Jičín",
    email_rodice: "dvorakova.e@seznam.cz",
    telefon_rodice: "+420 555 123 456",
    jmeno_rodice: "Jana Dvořáková",
    zdravotni_omezeni: ["Astma - mírné"],
    poznamky: "Introvertní, ráda čte",
    pocet_ucastí: 7,
    posledni_ucast: "2024-06-20",
    oblibene_aktivity: ["Čtení", "Věda", "Příroda"],
    status: "active",
    hodnoceni: 5,
    rodina_id: "rodina_3",
    sourozenci: ["Matěj Dvořák (8 let)"],
  },
  {
    id: "4",
    jmeno: "Jakub",
    prijmeni: "Procházka",
    datum_narozeni: "2015-01-30",
    vek: 9,
    pohlavi: "M",
    adresa: "Lesní 12, 742 21 Kopřivnice",
    email_rodice: "prochazka.j@email.cz",
    telefon_rodice: "+420 777 888 999",
    jmeno_rodice: "Michal Procházka",
    zdravotni_omezeni: [],
    poznamky: "Technicky nadaný, zajímá se o robotiku",
    pocet_ucastí: 2,
    posledni_ucast: "2024-09-15",
    oblibene_aktivity: ["Programování", "Robotika", "Matematika"],
    status: "active",
    hodnoceni: 4,
    rodina_id: "rodina_4",
    sourozenci: [],
  },
  {
    id: "5",
    jmeno: "Sofie",
    prijmeni: "Kratochvílová",
    datum_narozeni: "2016-05-12",
    vek: 8,
    pohlavi: "F",
    adresa: "Krátká 5, 740 01 Ostrava",
    email_rodice: "kratochvilova@gmail.com",
    telefon_rodice: "+420 666 777 888",
    jmeno_rodice: "Petra Kratochvílová",
    zdravotni_omezeni: ["Epilepsie - kontrolovaná"],
    poznamky: "Potřebuje více pozornosti, velmi šikovná",
    pocet_ucastí: 1,
    posledni_ucast: "2024-03-29",
    oblibene_aktivity: ["Tanec", "Hudba"],
    status: "inactive",
    hodnoceni: 3,
    rodina_id: "rodina_5",
    sourozenci: ["Adam Kratochvíl (6 let)"],
  },
  {
    id: "6",
    jmeno: "Martin",
    prijmeni: "Krejčí",
    datum_narozeni: "2011-09-03",
    vek: 13,
    pohlavi: "M",
    adresa: "Dlouhá 89, 738 01 Frýdek-Místek",
    email_rodice: "krejci.martin@email.cz",
    telefon_rodice: "+420 444 555 666",
    jmeno_rodice: "Tomáš Krejčí",
    zdravotni_omezeni: [],
    poznamky: "Lídr skupiny, pomáhá mladším",
    pocet_ucastí: 8,
    posledni_ucast: "2024-08-16",
    oblibene_aktivity: ["Leadership", "Sport", "Outdoor"],
    status: "active",
    hodnoceni: 5,
    rodina_id: "rodina_6",
    sourozenci: ["Klára Krejčí (11 let)", "Petr Krejčí (7 let)"],
  },
]

const stats = [
  {
    title: "Celkem účastníků",
    value: "156",
    icon: Users,
    color: "bg-blue-300",
  },
  {
    title: "Aktivní účastníci",
    value: "134",
    icon: UserPlus,
    color: "bg-green-300",
  },
  {
    title: "Rodin v databázi",
    value: "89",
    icon: Family,
    color: "bg-pink-300",
  },
  {
    title: "Průměrné hodnocení",
    value: "4.6",
    icon: Star,
    color: "bg-yellow-300",
  },
]

export function UcastniciContent() {
  const getInitials = (jmeno: string, prijmeni: string) => {
    return `${jmeno.charAt(0)}${prijmeni.charAt(0)}`
  }

  const getAvatarColor = (pohlavi: string) => {
    return pohlavi === "F" ? "bg-pink-300" : "bg-blue-300"
  }

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-300" : "bg-gray-300"
  }

  const getStatusLabel = (status: string) => {
    return status === "active" ? "AKTIVNÍ" : "NEAKTIVNÍ"
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const getAgeGroup = (vek: number) => {
    if (vek <= 8) return "Mladší (6-8 let)"
    if (vek <= 12) return "Střední (9-12 let)"
    return "Starší (13+ let)"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-black">ÚČASTNÍCI</h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Databáze účastníků a jejich historie</p>
        </div>
        <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm lg:text-base">
          <UserPlus className="mr-2 h-4 w-4" />
          NOVÝ ÚČASTNÍK
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
              <Input placeholder="Hledat účastníka..." className="pl-10 border-2 border-black font-medium" />
            </div>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Věková skupina" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny věky</SelectItem>
                <SelectItem value="young">Mladší (6-8 let)</SelectItem>
                <SelectItem value="middle">Střední (9-12 let)</SelectItem>
                <SelectItem value="older">Starší (13+ let)</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Pohlaví" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechna pohlaví</SelectItem>
                <SelectItem value="M">Chlapci</SelectItem>
                <SelectItem value="F">Dívky</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechny stavy</SelectItem>
                <SelectItem value="active">Aktivní</SelectItem>
                <SelectItem value="inactive">Neaktivní</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 border-black font-medium">
                <SelectValue placeholder="Město" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Všechna města</SelectItem>
                <SelectItem value="frydek">Frýdek-Místek</SelectItem>
                <SelectItem value="ostrava">Ostrava</SelectItem>
                <SelectItem value="novy-jicin">Nový Jičín</SelectItem>
                <SelectItem value="koprivnice">Kopřivnice</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold border-2 border-black">
              <Download className="mr-2 h-4 w-4" />
              EXPORT
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Účastníci List */}
      <div className="grid grid-cols-1 gap-4">
        {ucastniciData.map((ucastnik) => (
          <Card key={ucastnik.id} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                {/* Main Info */}
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="h-16 w-16 border-2 border-black">
                    <AvatarFallback className={`${getAvatarColor(ucastnik.pohlavi)} text-black font-bold text-lg`}>
                      {getInitials(ucastnik.jmeno, ucastnik.prijmeni)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-black text-black">
                        {ucastnik.jmeno} {ucastnik.prijmeni}
                      </h3>
                      <Badge
                        className={`${getStatusColor(ucastnik.status)} text-black font-bold border-2 border-black`}
                      >
                        {getStatusLabel(ucastnik.status)}
                      </Badge>
                      <Badge variant="outline" className="border-2 border-black font-bold">
                        {getAgeGroup(ucastnik.vek)}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="font-medium">
                          {ucastnik.vek} let ({new Date(ucastnik.datum_narozeni).toLocaleDateString("cs-CZ")})
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span className="font-medium">{ucastnik.adresa}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail className="mr-2 h-4 w-4" />
                        <span className="font-medium">{ucastnik.email_rodice}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="mr-2 h-4 w-4" />
                        <span className="font-medium">{ucastnik.telefon_rodice}</span>
                      </div>
                    </div>

                    {/* Rodič a sourozenci */}
                    <div className="mb-3">
                      <div className="text-sm">
                        <strong>Rodič:</strong> {ucastnik.jmeno_rodice}
                      </div>
                      {ucastnik.sourozenci.length > 0 && (
                        <div className="text-sm">
                          <strong>Sourozenci:</strong> {ucastnik.sourozenci.join(", ")}
                        </div>
                      )}
                    </div>

                    {/* Oblíbené aktivity */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {ucastnik.oblibene_aktivity.map((aktivita, index) => (
                        <Badge key={index} variant="outline" className="text-xs border border-gray-400">
                          {aktivita}
                        </Badge>
                      ))}
                    </div>

                    {/* Zdravotní omezení */}
                    {ucastnik.zdravotni_omezeni.length > 0 && (
                      <div className="mb-3 p-2 bg-red-100 border-2 border-red-400 rounded">
                        <div className="flex items-center text-red-700 text-sm">
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          <strong>Zdravotní omezení:</strong> {ucastnik.zdravotni_omezeni.join(", ")}
                        </div>
                      </div>
                    )}

                    {/* Poznámky */}
                    {ucastnik.poznamky && (
                      <div className="p-2 bg-blue-100 border-2 border-blue-400 rounded text-sm">
                        <strong>Poznámky:</strong> {ucastnik.poznamky}
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  {/* Statistics */}
                  <div className="text-center lg:text-right">
                    <div className="text-2xl font-black text-black">{ucastnik.pocet_ucastí}</div>
                    <div className="text-sm font-bold text-gray-600">účastí</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Poslední: {new Date(ucastnik.posledni_ucast).toLocaleDateString("cs-CZ")}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center lg:justify-end mt-2 gap-1">
                      {renderStars(ucastnik.hodnoceni)}
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
                    <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-red-100 text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="w-full bg-green-300 hover:bg-green-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <UserPlus className="mr-2 h-4 w-4" />
              NOVÝ ÚČASTNÍK
            </Button>
            <Button className="w-full bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Family className="mr-2 h-4 w-4" />
              SPRÁVA RODIN
            </Button>
            <Button className="w-full bg-purple-300 hover:bg-purple-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Download className="mr-2 h-4 w-4" />
              EXPORT DATABÁZE
            </Button>
            <Button className="w-full bg-orange-300 hover:bg-orange-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Mail className="mr-2 h-4 w-4" />
              HROMADNÝ EMAIL
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
