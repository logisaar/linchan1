'use client'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Popup from "@/components/Popup";
import { useEffect, useState } from "react";

export default function About() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
   const userInfo = localStorage.getItem("userInfo");
   if (!userInfo) {
     setShowPopup(true);
   }
 }, []);
  const values = [
    {
      title: "Our Coffee",
      description: "We're passionate about ethically sourcing the finest coffee beans from around the world.",
      image: "/images/indoor/photo1.jpg",
      icon: "☕",
    },
    {
      title: "Our People",
      description: "We treat each other with respect and dignity, and we hold each other to that standard.",
      image: "/images/outdoor/photo1.jpg",
      icon: "👥",
    },
    {
      title: "Our Stores",
      description: "When our customers feel this sense of belonging, our stores become a haven.",
      image: "/images/outdoor/photo2.jpg",
      icon: "🏪",
    },
    {
      title: "Our Community",
      description: "We are committed to being a responsible company and good neighbor.",
      image: "/images/outdoor/photo3.jpg",
      icon: "🤝",
    },
  ]

  const timeline = [
    { year: "1971", event: "Linchan's opens first store in Seattle's Pike Place Market" },
    { year: "2012", event: "Linchan's opens first store in India" },
    { year: "2024", event: "Over 5 stores across Bhubaneswar" },
  ]

  return (
    <div className="min-h-screen bg-lime-700">
       {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* Hero Section */}
      {/* <div className="relative h-80 bg-gradient-to-br backdrop-blur-lg from-lime-800 to-lime overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Coffee Plantation"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Our Story</h1>
          <p className="text-lg text-center max-w-2xl opacity-90">
            From a single store in Seattle to a global community, we've been nurturing the human spirit through coffee
            for over 50 years.
          </p>
        </div>
      </div> */}

      {/* Mission Statement */}
      <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Linchan's Says</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="p-4 ">
        <h2 className="text-2xl font-bold  text-gray-800 mb-6 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6  ">
          {values.map((value, index) => (
            <Card key={index} className=" overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={`${value.image}`}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0  bg-black/40" />
                <div className="absolute bottom-4 left-4  text-white">
                  <div className="text-3xl mb-2">{value.icon}</div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
              </div>
              <CardContent className=" p-4">
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="p-4 backdrop:blur-md bg-lime-200/50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center mb-6 last:mb-0">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                {item.year}
              </div>
              <div className="ml-4 flex-1">
                <p className="text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability */}
      <div className="m-4 p-6 bg-green-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Commitment to Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-sm text-gray-600">99% ethically sourced coffee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">♻️</div>
              <h3 className="font-semibold mb-2">Waste Reduction</h3>
              <p className="text-sm text-gray-600">Reducing waste in our stores</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Supporting local communities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
