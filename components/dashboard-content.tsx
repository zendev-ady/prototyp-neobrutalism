import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, FileText, CreditCard, TrendingUp, AlertTriangle, Plus } from "lucide-react"

const stats = [
  {
    title: "Celkem přihlášek",
    value: "247",
    change: "+12%",
    icon: FileText,
    color: "bg-blue-300",
  },
  {
    title: "Aktivní tábory",
    value: "8",
    change: "+2",
    icon: Calendar,
    color: "bg-green-300",
  },
  {
    title: "Účastníci",
    value: "189",
    change: "+8%",
    icon: Users,
    color: "bg-pink-300",
  },
  {
    title: "Nevyřízené platby",
    value: "23",
    change: "-5",
    icon: CreditCard,
    color: "bg-red-300",
  },
]

const recentActivities = [
  {
    type: "Nová přihláška",
    description: "Tomáš Svoboda - Letní tábor 2024",
    time: "před 5 min",
    status: "new",
  },
  {
    type: "Platba přijata",
    description: "Anna Nováková - záloha 2000 Kč",
    time: "před 15 min",
    status: "success",
  },
  {
    type: "Upozornění",
    description: "Kapacita tábora Sluníčko téměř naplněna",
    time: "před 1 hod",
    status: "warning",
  },
  {
    type: "Přihláška zrušena",
    description: "Petr Dvořák - Sportovní soustředění",
    time: "před 2 hod",
    status: "cancelled",
  },
]

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-black">DASHBOARD</h1>
          <p className="text-gray-600 font-medium">Přehled vašich táborů a přihlášek</p>
        </div>
        <Button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
          <Plus className="mr-2 h-4 w-4" />
          NOVÝ TÁBOR
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.title}</p>
                  <p className="text-3xl font-black text-black mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm font-bold text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 border-2 border-black`}>
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="border-b-4 border-black bg-purple-300">
            <CardTitle className="font-black text-black">POSLEDNÍ AKTIVITA</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 border-b-2 border-black last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`
                          px-2 py-1 text-xs font-bold border-2 border-black
                          ${activity.status === "new" ? "bg-blue-300" : ""}
                          ${activity.status === "success" ? "bg-green-300" : ""}
                          ${activity.status === "warning" ? "bg-yellow-300" : ""}
                          ${activity.status === "cancelled" ? "bg-red-300" : ""}
                        `}
                        >
                          {activity.type}
                        </span>
                      </div>
                      <p className="font-medium text-black mt-1">{activity.description}</p>
                      <p className="text-sm text-gray-500 font-medium">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="border-b-4 border-black bg-green-300">
            <CardTitle className="font-black text-black">RYCHLÉ AKCE</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <FileText className="mr-2 h-4 w-4" />
              NOVÁ PŘIHLÁŠKA
            </Button>
            <Button className="w-full bg-pink-300 hover:bg-pink-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Users className="mr-2 h-4 w-4" />
              PŘIDAT ÚČASTNÍKA
            </Button>
            <Button className="w-full bg-blue-300 hover:bg-blue-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CreditCard className="mr-2 h-4 w-4" />
              ZAZNAMENAT PLATBU
            </Button>
            <Button className="w-full bg-red-300 hover:bg-red-400 text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
              <AlertTriangle className="mr-2 h-4 w-4" />
              UPOZORNĚNÍ
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
