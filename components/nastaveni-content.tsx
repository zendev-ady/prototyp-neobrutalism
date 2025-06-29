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
        return <Badge className="bg-red-500 text-white border-2 border-black">👑 ADMIN</Badge>
      case "vedouci":
        return <Badge className="bg-blue-500 text-white border-2 border-black">👨‍🏫 VEDOUCÍ</Badge>
      case "asistent":
        return <Badge className="bg-green-500 text-white border-2 border-black">🙋‍♂️ ASISTENT</Badge>
      default:
        return <Badge className="bg-gray-500 text-white border-2 border-black">❓ NEZNÁMÁ</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-black">⚙️ NASTAVENÍ</h1>
          <p className="text-gray-600 font-medium">Konfigurace systému a organizace</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-green-400 hover:bg-green-500 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Save className="mr-2 h-4 w-4" />
            Uložit změny
          </Button>
          <Button variant="outline" className="border-2 border-black font-bold hover:bg-gray-100 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export nastavení
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="organizace" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 border-4 border-black bg-yellow-300">
          <TabsTrigger
            value="organizace"
            className="font-bold data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black"
          >
            <Building2 className="mr-2 h-4 w-4" />
            Organizace
          </TabsTrigger>
          <TabsTrigger
            value="uzivatele"
            className="font-bold data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black"
          >
            <Users className="mr-2 h-4 w-4" />
            Uživatelé
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="font-bold data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger
            value="platby"
            className="font-bold data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Platby
          </TabsTrigger>
          <TabsTrigger
            value="notifikace"
            className="font-bold data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifikace
          </TabsTrigger>
          <TabsTrigger
            value="system"
            className="font-bold data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black"
          >
            <Database className="mr-2 h-4 w-4" />
            Systém
          </TabsTrigger>
        </TabsList>

        {/* Organizace Tab */}
        <TabsContent value="organizace">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-black">
                  <Building2 className="h-5 w-5" />
                  ZÁKLADNÍ ÚDAJE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nazev" className="font-bold">
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
                    <Label htmlFor="ico" className="font-bold">
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
                    <Label htmlFor="dic" className="font-bold">
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
                  <Label htmlFor="adresa" className="font-bold">
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-black">
                  <Globe className="h-5 w-5" />
                  KONTAKTNÍ ÚDAJE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="telefon" className="font-bold">
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
                  <Label htmlFor="email" className="font-bold">
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
                  <Label htmlFor="web" className="font-bold">
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
                  <Label className="font-bold">Logo organizace</Label>
                  <div className="border-2 border-dashed border-black p-4 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Přetáhněte logo nebo klikněte pro výběr</p>
                    <Button variant="outline" className="mt-2 border-2 border-black font-bold bg-transparent">
                      Vybrat soubor
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Uživatelé Tab */}
        <TabsContent value="uzivatele">
          <div className="space-y-6">
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 font-black">
                    <Users className="h-5 w-5" />
                    SPRÁVA UŽIVATELŮ
                  </CardTitle>
                  <Button className="bg-green-400 hover:bg-green-500 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Přidat uživatele
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uzivatele.map((uzivatel) => (
                    <div
                      key={uzivatel.id}
                      className="flex items-center justify-between p-4 border-2 border-black bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center font-black">
                          {uzivatel.jmeno
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-bold">{uzivatel.jmeno}</div>
                          <div className="text-sm text-gray-600">{uzivatel.email}</div>
                          <div className="text-xs text-gray-500">
                            Poslední přihlášení: {uzivatel.posledni_prihlaseni}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {getRoleBadge(uzivatel.role)}
                        <div className="flex items-center gap-2">
                          <Switch checked={uzivatel.aktivni} />
                          <span className="text-sm font-medium">{uzivatel.aktivni ? "Aktivní" : "Neaktivní"}</span>
                        </div>
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
                            <Key className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-2 border-black hover:bg-red-100 bg-transparent"
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
          </div>
        </TabsContent>

        {/* Email Tab */}
        <TabsContent value="email">
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-black">
                <Mail className="h-5 w-5" />
                NASTAVENÍ EMAILU
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">SMTP Server</h3>
                  <div className="space-y-2">
                    <Label htmlFor="smtp_server" className="font-bold">
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
                    <Label htmlFor="smtp_port" className="font-bold">
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
                    <Label htmlFor="smtp_username" className="font-bold">
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
                    <Label htmlFor="smtp_password" className="font-bold">
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
                  <h3 className="font-bold text-lg">Odesílatel</h3>
                  <div className="space-y-2">
                    <Label htmlFor="from_name" className="font-bold">
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
                    <Label htmlFor="from_email" className="font-bold">
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
                    <Button className="bg-blue-400 hover:bg-blue-500 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Mail className="mr-2 h-4 w-4" />
                      Otestovat připojení
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
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-black">
                <CreditCard className="h-5 w-5" />
                NASTAVENÍ PLATEB
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Bankovní údaje</h3>
                  <div className="space-y-2">
                    <Label htmlFor="bank_account" className="font-bold">
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
                    <Label htmlFor="vs_prefix" className="font-bold">
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
                  <h3 className="font-bold text-lg">Termíny a upomínky</h3>
                  <div className="space-y-2">
                    <Label htmlFor="splatnost" className="font-bold">
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
                    <Label htmlFor="upominka" className="font-bold">
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
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="auto_upominky"
                      checked={platbySettings.automaticke_upominky}
                      onCheckedChange={(checked) =>
                        setPlatbySettings({ ...platbySettings, automaticke_upominky: checked })
                      }
                    />
                    <Label htmlFor="auto_upominky" className="font-bold">
                      Automatické upomínky
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="qr_platby"
                      checked={platbySettings.qr_platby}
                      onCheckedChange={(checked) => setPlatbySettings({ ...platbySettings, qr_platby: checked })}
                    />
                    <Label htmlFor="qr_platby" className="font-bold">
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
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-black">
                <Bell className="h-5 w-5" />
                NASTAVENÍ NOTIFIKACÍ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Typy notifikací</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
                    <div>
                      <div className="font-bold">Email notifikace</div>
                      <div className="text-sm text-gray-600">Zasílání emailových upozornění</div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
                    <div>
                      <div className="font-bold">SMS notifikace</div>
                      <div className="text-sm text-gray-600">Zasílání SMS zpráv</div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
                    <div>
                      <div className="font-bold">Push notifikace</div>
                      <div className="text-sm text-gray-600">Upozornění v prohlížeči</div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                </div>

                <Separator className="border-black" />

                <h3 className="font-bold text-lg">Události pro notifikace</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
                    <div>
                      <div className="font-bold">Upomínky plateb</div>
                      <div className="text-sm text-gray-600">Upozornění na neuhrazené faktury</div>
                    </div>
                    <Switch
                      checked={notifications.upominky}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, upominky: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
                    <div>
                      <div className="font-bold">Nové platby</div>
                      <div className="text-sm text-gray-600">Upozornění na přijaté platby</div>
                    </div>
                    <Switch
                      checked={notifications.platby}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, platby: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
                    <div>
                      <div className="font-bold">Nové přihlášky</div>
                      <div className="text-sm text-gray-600">Upozornění na nové přihlášky</div>
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-black">
                  <Database className="h-5 w-5" />
                  SYSTÉMOVÉ INFORMACE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-bold">Verze systému</Label>
                    <div className="p-2 bg-gray-100 border-2 border-black font-mono">v2.1.0</div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Poslední aktualizace</Label>
                    <div className="p-2 bg-gray-100 border-2 border-black font-mono">28.02.2024 14:30</div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Databáze</Label>
                    <div className="p-2 bg-green-100 border-2 border-black font-mono">✅ Připojeno</div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Úložiště</Label>
                    <div className="p-2 bg-green-100 border-2 border-black font-mono">✅ 2.3 GB / 10 GB</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-black">
                  <Shield className="h-5 w-5" />
                  ZÁLOHA A OBNOVENÍ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-400 hover:bg-blue-500 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Download className="mr-2 h-4 w-4" />
                    Vytvořit zálohu
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-black font-bold hover:bg-gray-100 bg-transparent"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Obnovit ze zálohy
                  </Button>
                </div>
                <div className="text-sm text-gray-600">Poslední záloha: 27.02.2024 02:00 (automatická)</div>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-500 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-black text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  NEBEZPEČNÁ ZÓNA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-bold text-red-600">Vymazat všechna data</Label>
                  <p className="text-sm text-gray-600">
                    Tato akce je nevratná a smaže všechny přihlášky, účastníky, platby a nastavení.
                  </p>
                  <Button variant="destructive" className="border-2 border-black font-bold">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Vymazat všechna data
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
