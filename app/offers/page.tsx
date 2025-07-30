"use client"
import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Gift, Star, Zap, Coffee, Heart } from "lucide-react"
import { useEffect, useState } from "react";
import Popup from "@/components/Popup";

export default function Offers() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
   const userInfo = localStorage.getItem("userInfo");
   if (!userInfo) {
     setShowPopup(true);
   }
 }, []);
  const featuredOffers = [
    {
      title: "Buy 1 Get 1 Free",
      description: "On all Frappuccinos every Tuesday. Perfect for sharing with friends!",
      discount: "50% OFF",
      validTill: "Valid till 31st Dec",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      color: "bg-red-500",
      icon: <Gift className="w-6 h-6" />,
      popular: true,
    },
    {
      title: "Student Power Hour",
      description: "Show your student ID and get special pricing on all beverages",
      discount: "20% OFF",
      validTill: "Valid all year",
      image:
        "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      color: "bg-blue-500",
      icon: <Star className="w-6 h-6" />,
      popular: false,
    },
    {
      title: "Happy Hours Special",
      description: "Special pricing between 3-5 PM on selected beverages",
      discount: "30% OFF",
      validTill: "Monday to Friday",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D",
      color: "bg-orange-500",
      icon: <Clock className="w-6 h-6" />,
      popular: true,
    },
    {
      title: "Weekend Delight",
      description: "Free pastry with any grande or venti beverage purchase",
      discount: "FREE",
      validTill: "Weekends only",
      image:
        "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
      color: "bg-green-500",
      icon: <Zap className="w-6 h-6" />,
      popular: false,
    },
  ]

  const seasonalOffers = [
    {
      title: "Summer Cool Down",
      description: "Iced beverages at special prices",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
      price: "Starting ₹199",
    },
    {
      title: "Monsoon Warmth",
      description: "Hot beverages to brighten rainy days",
      image:
        "https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhZmV8ZW58MHx8MHx8fDA%3D",
      price: "Starting ₹249",
    },
    {
      title: "Festival Special",
      description: "Celebrate with limited edition flavors",
      image:
        "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "Starting ₹299",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* Enhanced Header with Real Background */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Offers Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-2xl opacity-90 mb-8">Save more on your favorite drinks & treats</p>
          <div className="flex justify-center space-x-12 text-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="opacity-80">Active Offers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50%</div>
              <div className="opacity-80">Max Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-80">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Offers with Real Images */}
      <div className="p-4 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🔥 Hot Deals</h2>
          <p className="text-xl text-gray-600">Limited time offers you don't want to miss</p>
        </div>

        {featuredOffers.map((offer, index) => (
          <Card key={index} className="overflow-hidden shadow-2xl hover-lift group max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {offer.popular && (
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-black font-bold text-lg px-3 py-2">
                    🌟 POPULAR
                  </Badge>
                )}
                <Badge className={`absolute top-4 right-4 ${offer.color} text-white font-bold text-xl px-4 py-3`}>
                  {offer.discount}
                </Badge>
              </div>
              <CardContent className="md:col-span-2 p-10 flex flex-col justify-center bg-gradient-to-r from-white to-gray-50">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full ${offer.color} text-white mr-4`}>{offer.icon}</div>
                  <CardTitle className="text-3xl">{offer.title}</CardTitle>
                </div>
                <p className="text-gray-600 mb-6 text-xl leading-relaxed">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-2" />
                    {offer.validTill}
                  </span>
                  <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg font-semibold">
                    Claim Offer
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Seasonal Offers with Real Images */}
      <div className="p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🌟 Seasonal Specials</h2>
          <p className="text-xl text-gray-600">Limited edition flavors for every season</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {seasonalOffers.map((offer, index) => (
            <Card key={index} className="overflow-hidden hover-lift group shadow-xl">
              <div className="relative h-64">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-lg opacity-90">{offer.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-2">
                  <span className="text-green-600 font-bold">{offer.price}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Loyalty Program */}
      <div className="m-4 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Rewards Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 bg-gradient-to-r from-green-600/95 to-green-700/95 p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">🌟 Starbucks Rewards</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Earn stars with every purchase and unlock free drinks, food, and exclusive perks
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">25</div>
                  <div className="text-sm opacity-80">Stars = Free Drink</div>
                </div>
                <div className="text-center bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">50</div>
                  <div className="text-sm opacity-80">Stars = Free Food</div>
                </div>
                <div className="text-center bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">150</div>
                  <div className="text-sm opacity-80">Stars = Free Handcrafted Drink</div>
                </div>
              </div>
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-10 py-4 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Join Rewards Program
              </Button>
            </div>
            <div className="relative h-80">
              <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <Coffee className="w-32 h-32 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
