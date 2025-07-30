'use client'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";
import Popup from "@/components/Popup";

export default function Menu() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
   const userInfo = localStorage.getItem("userInfo");
   if (!userInfo) {
     setShowPopup(true);
   }
 }, []);
  const menuCategories = {
    beverages: [
      {
      name: "Cappuccino",
      price: "₹280",
      description: "Rich espresso with steamed milk",
      image: "/images/menu/photo1.jpg",
      popular: true,
    },
    {
      name: "Latte",
      price: "₹320",
      description: "Smooth espresso with steamed milk",
      image: "/images/menu/photo2.jpg",
      popular: false,
    },
    {
      name: "Americano",
      price: "₹240",
      description: "Bold espresso with hot water",
      image: "/images/menu/photo3.jpg",
      popular: false,
    },
    {
      name: "Frappuccino",
      price: "₹380",
      description: "Blended coffee with ice and cream",
      image: "/images/menu/photo3.jpg",
      popular: true,
    },
    {
      name: "Cold Brew",
      price: "₹300",
      description: "Smooth cold coffee concentrate",
      image: "/images/menu/photo2.jpg",
      popular: false,
    },
    {
      name: "Macchiato",
      price: "₹340",
      description: "Espresso with a dollop of foam",
      image: "/images/menu/photo1.jpg",
      popular: false,
    },
  ],
  food: [
    {
      name: "Croissant",
      price: "₹180",
      description: "Buttery, flaky pastry",
      image: "/images/menu/photo1.jpg",
      popular: true,
    },
    {
      name: "Sandwich",
      price: "₹250",
      description: "Grilled chicken sandwich",
      image: "/images/menu/photo3.jpg",
      popular: false,
    },
    {
      name: "Muffin",
      price: "₹160",
      description: "Blueberry muffin",
      image: "/images/menu/photo2.jpg",
      popular: true,
    },
    {
      name: "Bagel",
      price: "₹200",
      description: "Everything bagel with cream cheese",
      image: "/images/menu/photo4.jpg",
      popular: false,
    },
    {
      name: "Cake Pop",
      price: "₹120",
      description: "Sweet cake on a stick",
      image: "/images/menu/photo3.jpg",
      popular: false,
    },
    {
      name: "Cookies",
      price: "₹140",
      description: "Chocolate chip cookies",
      image: "/images/menu/photo1.jpg",
      popular: true,
    },

    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* Header */}
      <div className="bg-lime-700 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Our Menu</h1>
        <p className="text-center mt-2 opacity-90">Handcrafted beverages and fresh food</p>
      </div>

      {/* Menu Tabs */}
      <div className="p-4">
        <Tabs defaultValue="beverages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="beverages" className="text-lg">
              Beverages
            </TabsTrigger>
            <TabsTrigger value="food" className="text-lg">
              Food
            </TabsTrigger>
          </TabsList>

          <TabsContent value="beverages">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories.beverages.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={`${item.image}`}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {item.popular && (
                        <Badge className="absolute -top-1 -right-1 bg-orange-500 text-xs">Popular</Badge>
                      )}
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="text-lime-700 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <Button size="sm" className="bg-lime-700 hover:bg-lime-800 w-full">
                        Order Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories.food.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={`${item.image}`}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {item.popular && (
                        <Badge className="absolute -top-1 -right-1 bg-orange-500 text-xs">Popular</Badge>
                      )}
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="text-green-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <Button size="sm" className="bg-lime-700 hover:bg-green-700 w-full">
                        Order Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
