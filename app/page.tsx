"use client"
import Link from "next/link";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Coffee, Heart, Award } from "lucide-react"
import { useEffect, useState } from "react";
import Popup from "@/components/Popup";

const offers = [
  "🔥 50% OFF on your first order!",
  "📦 Free delivery on orders above ₹499!",
  "💚 Get 2+1 on all green tea packs!",
  "🎁 Flat ₹100 cashback via UPI!",
];


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    // Check if form has been submitted or popup has been seen
    const formSubmitted = localStorage.getItem("formSubmitted");
    const popupSeen = localStorage.getItem("popupSeen");
    
    // Only show popup if neither form has been submitted nor popup has been seen
    if (!formSubmitted && !popupSeen) {
      setShowPopup(true);
    }
  }, []);

   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000); // 3 seconds per offer
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="w-full bg-lime-800 text-black overflow-hidden py-2">
    {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <div className="whitespace-nowrap transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${index * 100}%)`, display: "flex" }}>
        {offers.map((offer, i) => (
          <div key={i} className="min-w-full text-center text-sm sm:text-base font-medium tracking-wide">
            {offer}
          </div>
        ))}
      </div>
    </div>

    
    <div className="min-h-screen">
      {/* Hero Section with Real Image */}
      <div className="relative h-screen bg-gradient-to-br from-lime-300 via-stone-300 to-neutral-200 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/photo1.jpg"
            alt="Starbucks Cafe Interior"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Floating Coffee Elements */}
        <div className="absolute top-20 left-10 animate-pulse-slow">
          <div className="w-12 h-12 bg-amber-600 rounded-full opacity-70 flex items-center justify-center">
            <Coffee className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse-slow" style={{ animationDelay: "1s" }}>
          <div className="w-8 h-8 bg-amber-700 rounded-full opacity-60 flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse-slow" style={{ animationDelay: "2s" }}>
          <div className="w-10 h-10 bg-amber-500 rounded-full opacity-60 flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-2xl">Its Linchan's taste</h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-95 max-w-3xl font-light">
              "Where every cup tells a story, and every moment matters"
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
             
             <Link href="/menu">
              <Button
                variant="outline"
                className="border-2 bg backdrop-blur-lg border-lime-600 text-white hover:bg-lime-400 backdrop:blur-lg hover:text-lime-800 px-10 py-5 text-xl hover-lift bg-transparent shadow-2x "
              >
                <Coffee className="w-5 h-5 mr-2" />
               Order now
              </Button>
             </Link>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>

      {/* App Download Banner */}
      <div className="relative bg-gradient-to-r from-lime-100 via-lime-50 to-blue-50 p-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-lime-800 font-bold text-2xl mb-3">"A warm cup. A quiet corner. Feels like home."

</p>
          
        </div>
      </div>

      {/* Enhanced Stats Section */}
      {/* <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Brewing excellence across India</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <Coffee className="w-12 h-12" />,
                number: "300+",
                label: "Stores in India",
                color: "text-lime-600",
              },
              {
                icon: <Users className="w-12 h-12" />,
                number: "10M+",
                label: "Happy Customers",
                color: "text-blue-600",
              },
              { icon: <Star className="w-12 h-12" />, number: "4.8", label: "App Rating", color: "text-yellow-600" },
              {
                icon: <Award className="w-12 h-12" />,
                number: "50+",
                label: "Beverage Options",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fadeInUp hover-lift bg-white rounded-2xl p-8 shadow-lg border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Food & Beverage Showcase - Cafe Arni Style */}
      <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Crafted to Perfection</h2>
          <p className="text-xl text-gray-600">Every item tells a story of quality and taste</p>
        </div>

        {/* Main Food Display Grid - Similar to Cafe Arni Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Large Featured Item */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden hover-lift group h-full">
                <div className="relative h-96">
                  <Image
                    src="/images/menu/photo2.jpg"
                    alt="Signature Coffee & Food Spread"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <Badge className="bg-lime-700 mb-3">Chef's Special</Badge>
                    <h3 className="text-3xl font-bold mb-2">Signature Collection</h3>
                    <p className="text-lg opacity-90">Handcrafted beverages paired with artisanal food</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Side Items */}
            <div className="space-y-6">
              {/* <Card className="overflow-hidden hover-lift group">
                <div className="relative h-44">
                  <Image
                    src="/images/menu/photo3.jpg"
                    alt="Premium Coffee Experience"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">Premium Brews</h4>
                    <p className="text-sm opacity-90">From ₹280</p>
                  </div>
                </div>
              </Card> */}

              <Card className="overflow-hidden hover-lift group">
                <div className="relative h-44">
                  <Image
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D"
                    alt="Cozy Cafe Atmosphere"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">Perfect Ambiance</h4>
                    <p className="text-sm opacity-90">Work & Relax</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Bottom Row - Multiple Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Artisan Pastries",
                image:
                  "/images/menu/photo4.jpg",
                price: "From ₹180",
              },
              {
                name: "Specialty Drinks",
                image:
                  "/images/menu/photo1.jpg",
                price: "From ₹320",
              },
              {
                name: "Fresh Sandwiches",
                image:
                  "/images/menu/photo2.jpg",
                price: "From ₹250",
              },
              {
                name: "Premium Blends",
                image:
                  "/images/menu/photo3.jpg",
                price: "From ₹380",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover-lift group">
                <div className="relative h-40">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-lime-300 font-semibold">{item.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Offers with Real Images */}
      <div className="p-4 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Exclusive Offers</h2>
          <p className="text-xl text-gray-600">Don't miss out on these amazing deals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Buy 1 Get 1 Free",
              subtitle: "On all Frappuccinos",
              discount: "50% OFF",
              image:
                "/images/menu/photo4.jpg",
              color: "from-red-500 to-pink-500",
            },
            {
              title: "Student Special",
              subtitle: "Show your student ID",
              discount: "20% OFF",
              image:
                "/images/menu/photo3.jpg",
              color: "from-blue-500 to-indigo-500",
            },
            {
              title: "Weekend Treat",
              subtitle: "Free pastry with beverage",
              discount: "FREE",
              image:
                "/images/menu/photo1.jpg",
              color: "from-lime-700 to-lime-500",
            },
          ].map((offer, index) => (
            <Card key={index} className="overflow-hidden hover-lift group shadow-xl">
              <div className="relative h-64">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-30`} />
                <Badge
                  className={`absolute top-4 right-4 bg-gradient-to-r ${offer.color} text-white font-bold px-4 py-2 text-lg`}
                >
                  {offer.discount}
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{offer.subtitle}</p>
                <Button className="w-full bg-lime-700 hover:bg-lime-800 py-3 text-lg font-semibold">Claim Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Customer Reviews with Real Cafe Images */}
      {/* <div className="p-4 bg-gradient-to-br from-lime-50 to-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from real coffee lovers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Priya Sharma",
              review: "Best coffee in town! The ambiance is perfect for work and meetings. Love the cozy atmosphere!",
              rating: 5,
              image:
                "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
            },
            {
              name: "Rahul Gupta",
              review:
                "Love the consistency across all stores. My go-to place for morning coffee and productive work sessions.",
              rating: 5,
              image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
            },
            {
              name: "Anita Patel",
              review: "The app makes ordering so convenient. Great rewards program and the staff is always friendly!",
              rating: 5,
              image:
                "https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhZmV8ZW58MHx8MHx8fDA%3D",
            },
          ].map((review, index) => (
            <Card key={index} className="p-8 hover-lift shadow-xl bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt="Customer Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-lime-200">
                  <div className="w-full h-full bg-gradient-to-br from-lime-400 to-lime-700 flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">"{review.review}"</p>
            </Card>
          ))}
        </div>
      </div> */}

      {/* Store Experience Section with Real Images */}
      <div className="relative py-20  bg-gradient-to-r from-lime-200 via-gray-300  overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Store Experience"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-6">The Linchan's Experience</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            More than just coffee - it's a place where communities come together
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/20 rounded-full p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Prime Locations</h3>
              <p className="opacity-90 text-lg">Conveniently located in your neighborhood</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 rounded-full p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Extended Hours</h3>
              <p className="opacity-90 text-lg">Open early, stay late for your convenience</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 rounded-full p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Community Hub</h3>
              <p className="opacity-90 text-lg">Where friends meet and ideas brew</p>
            </div>
          </div>
        </div>
      </div>

      {/* Store Locator with Enhanced Design */}
      <div className="p-4 bg-white">
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-80 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Store Locations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent" />
            </div>
            <CardContent className="p-12 flex flex-col justify-center bg-gradient-to-br from-green-50 to-white">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Your Perfect Spot</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With over 5 stores across India, there's always a Starbucks nearby. Find your perfect spot to work,
                relax, or catch up with friends in a welcoming atmosphere.
              </p>
              <Link href="/menu">
              <Button className="bg-lime-700 hover:bg-green-700 py-4 text-lg font-semibold shadow-lg hover-lift">

                Get your first Order
              </Button>
              </Link>

            </CardContent>
          </div>
        </Card>
      </div>

      {/* Copyright Footer */}
      <footer>
  <p style={{ textAlign: 'center', fontSize: '14px', color: '#777', marginTop: '20px' }}>
    © 2025 All Rights Reserved | Made by 
    <a href="https://logisaar.in" target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>
       Logisaar
    </a>
  </p>
</footer>

    </div>
    </>
  )
}
