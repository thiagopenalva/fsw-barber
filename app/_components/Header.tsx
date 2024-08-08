import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { MenuIcon } from "lucide-react"
import SidebarSheet from "./sidebar-sheet"

const Header = async () => {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image
            src="/logo.png"
            alt="FSW BARBER Logo"
            height={18}
            width={120}
          />
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
