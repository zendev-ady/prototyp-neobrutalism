import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Edit, Users, Calendar, CreditCard } from "lucide-react"

const organizationStats = [
  {
    title: "Celkem organizátorů",
    value: "12",
    icon: Users,
    color: "bg-blue-300",
  },
  {
    title: "Aktivní tábory",
    value: "8",
    icon: Calendar,
    color: "bg-green-300",
  },
  {
    title: "Měsíční obrat",
    value: "245 000 Kč",
    icon: CreditCard,
    color: "bg-yellow-300",
  },
]

const organizatori = [
  {
    jmeno: "Jan Novák",
    email: "jan.novak@email.cz",
    role: "Admin",
    telefon: "+420 123 456 789",
    posledni_prihlaseni: "před 5 min",
    status: "online",
  },
  {
    jmeno: "Marie Svobodová",
    email: "marie.svobodova@email.cz",
    role: "Editor",
    telefon: "+420 987 654 321",
    posledni_prihlaseni: "před 2 hod",
    status: "offline",
  },
  {
    jmeno: "Petr Dvořák",
    email: "petr.dvorak@email.cz",
    role: "View",
    telefon: "+420 555 123 456",
    posledni_prihlaseni: "včera",
    status: "offline",
  },
]

export function OrganizaceContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-black">ORGANIZACE</h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Správa organizace a organizátorů</p>
        </div>
        <Button className="bg-green-300 hover:bg-green-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm lg:text-base">
          <Users className="mr-2 h-4 w-4" />
          PŘIDAT ORGANIZÁTORA
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {organizationStats.map((stat) => (
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Organization Info */}
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="border-b-4 border-black bg-purple-300">
            <div className="flex items-center justify-between">
              <CardTitle className="font-black text-black">INFORMACE O ORGANIZACI</CardTitle>
              <Button size="sm" className="bg-white hover:bg-gray-100 text-black font-bold border-2 border-black">
                <Edit className="h-4 w-4 mr-1" />
                UPRAVIT
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-bold text-black uppercase">Název organizace</Label>
                <div className="mt-1 p-3 bg-gray-50 border-2 border-black font-medium">Letní tábor Sluníčko s.r.o.</div>
              </div>

              <div>
                <Label className="text-sm font-bold text-black uppercase">IČO</Label>
                <div className="mt-1 p-3 bg-gray-50 border-2 border-black font-medium">12345678</div>
              </div>

              <div>
                <Label className="text-sm font-bold text-black uppercase">Adresa</Label>
                <div className="mt-1 p-3 bg-gray-50 border-2 border-black font-medium">
                  Táborová 123, 123 45 Praha 1
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-bold text-black uppercase">Kontaktní email</Label>
                  <div className="mt-1 p-3 bg-gray-50 border-2 border-black font-medium flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@slunickotabor.cz
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-bold text-black uppercase">Telefon</Label>
                  <div className="mt-1 p-3 bg-gray-50 border-2 border-black font-medium flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +420 123 456 789
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Organizers List */}
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="border-b-4 border-black bg-blue-300">
            <CardTitle className="font-black text-black">ORGANIZÁTOŘI</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {organizatori.map((org, index) => (
                <div
                  key={index}
                  className="p-4 border-b-2 border-black last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-black">{org.jmeno}</h3>
                        <span
                          className={`
                          px-2 py-1 text-xs font-bold border-2 border-black
                          ${org.role === "Admin" ? "bg-red-300" : ""}
                          ${org.role === "Editor" ? "bg-yellow-300" : ""}
                          ${org.role === "View" ? "bg-green-300" : ""}
                        `}
                        >
                          {org.role}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${org.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{org.email}</p>
                      <p className="text-sm text-gray-600">{org.telefon}</p>
                      <p className="text-xs text-gray-500 mt-1">Poslední přihlášení: {org.posledni_prihlaseni}</p>
                    </div>
                    <Button size="sm" variant="ghost" className="border-2 border-black hover:bg-gray-100">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
