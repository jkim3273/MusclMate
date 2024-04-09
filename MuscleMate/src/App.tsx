import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// import { Label } from "@/components/ui/label"

import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import './App.css'
import muscleLogo from './assets/MuscleLogo.png'
import {Menu} from "lucide-react"
import {Settings} from "lucide-react"

function MainMenu() {

  return (
    <>
      <div className="flex items-center justify-between p-8 lg:px-8">
        <img src={muscleLogo} width={200} height={200}/>
        <div className="mt-5 flex lg:ml-4 gap-20">
          <Input placeholder="Search" className="w-[200px] "/>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription className="flex flex-col space-y-4">
                  <Button>Home</Button>
                  <Button>My Exercises</Button>
                  <Button>My Workout</Button>
                  <Button>My Progress</Button>
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <Button variant="outline" size="icon">
                  <Settings className="h-8 w-8" />
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Tabs defaultValue="exercises" className="w-[1200px]">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="abs">Abs</TabsTrigger>
          <TabsTrigger value="swimming">Swimming</TabsTrigger>
          <TabsTrigger value="running">Running</TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="grid grid-cols-5 gap-10">
          <Card>
            <CardHeader>
              <CardTitle>Exercise 1</CardTitle>
              <CardDescription>Trends For You</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Exercise 2</CardTitle>
              <CardDescription>Trends For You</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>   
        </TabsContent>

          <TabsContent value="abs" className="grid grid-cols-5 gap-10">
            <Card>
              <CardHeader>
                <CardTitle>Trending</CardTitle>
                <CardDescription>Trends For You</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </TabsContent>
            
          <TabsContent value="swimming" className="grid grid-cols-5 gap-10">
            <Card>
              <CardHeader>
                <CardTitle>Trending</CardTitle>
                <CardDescription>Trends For You</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trending</CardTitle>
                <CardDescription>Trends For You</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trending</CardTitle>
                <CardDescription>Trends For You</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

          </TabsContent>

          <TabsContent value="running" className="grid grid-cols-5 gap-10">
            <Card>
              <CardHeader>
                <CardTitle>Trending</CardTitle>
                <CardDescription>Trends For You</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </>
  )
}

export default MainMenu