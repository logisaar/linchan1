import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, Download, Camera } from "lucide-react"

export default function Gallery() {
  const realImages = [
    "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  ]

  const galleryCategories = {
    "Coffee Culture": [
      { src: realImages[0], alt: "Premium Cafe Interior", likes: 1250 },
      { src: realImages[1], alt: "Cozy Coffee Corner", likes: 890 },
      { src: realImages[2], alt: "Modern Cafe Design", likes: 2100 },
      { src: realImages[3], alt: "Warm Atmosphere", likes: 756 },
    ],
    "Store Ambiance": [
      { src: realImages[4], alt: "Elegant Seating Area", likes: 1890 },
      { src: realImages[5], alt: "Classic Coffee Shop", likes: 1456 },
      { src: realImages[6], alt: "Premium Experience", likes: 987 },
      { src: realImages[0], alt: "Perfect Lighting", likes: 1234 },
    ],
    "Food & Beverages": [
      { src: realImages[1], alt: "Artisan Coffee", likes: 3200 },
      { src: realImages[2], alt: "Fresh Pastries", likes: 1567 },
      { src: realImages[3], alt: "Seasonal Specials", likes: 2890 },
      { src: realImages[4], alt: "Healthy Options", likes: 1123 },
    ],
    Community: [
      { src: realImages[5], alt: "Friends Together", likes: 2456 },
      { src: realImages[6], alt: "Business Meetings", likes: 1789 },
      { src: realImages[0], alt: "Study Sessions", likes: 1998 },
      { src: realImages[1], alt: "Our Team", likes: 1345 },
    ],
  }

  const featuredImages = [
    {
      src: realImages[0],
      alt: "Iconic Storefront",
      title: "Our Heritage",
      description: "50+ years of coffee excellence",
    },
    {
      src: realImages[1],
      alt: "Master Roaster",
      title: "Craftsmanship",
      description: "Every bean tells a story",
    },
    {
      src: realImages[2],
      alt: "Community Gathering",
      title: "Bringing People Together",
      description: "More than just coffee",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header with Real Background */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={realImages[0] || "/placeholder.svg"}
            alt="Gallery Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Visual Stories</h1>
          <p className="text-2xl opacity-90 mb-8">Moments that matter, crafted with care</p>
          <div className="flex justify-center space-x-12 text-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="opacity-80">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="opacity-80">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="opacity-80">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Images Hero Section with Real Images */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {featuredImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover-lift group shadow-2xl">
              <div className="relative h-80">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg opacity-90">{image.description}</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-green-600 text-lg px-3 py-2">Featured</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Categories with Real Images */}
      {Object.entries(galleryCategories).map(([category, images], categoryIndex) => (
        <div key={categoryIndex} className="p-4">
          <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
            <Badge variant="outline" className="text-green-600 border-green-600 text-lg px-4 py-2">
              {images.length} Photos
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover-lift group relative">
                <div className="relative h-80">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                  {/* Image Overlay Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-3">
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                      <Heart className="w-5 h-5 text-red-500" />
                    </button>
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                      <Share2 className="w-5 h-5 text-blue-500" />
                    </button>
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                      <Download className="w-5 h-5 text-green-500" />
                    </button>
                  </div>

                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold text-lg mb-2">{image.alt}</p>
                    <div className="flex items-center text-sm">
                      <Heart className="w-4 h-4 mr-2 text-red-400" />
                      <span>{image.likes.toLocaleString()} likes</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Behind the Scenes with Real Images */}
      <div className="p-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Behind the Scenes</h2>
          <p className="text-xl text-gray-600">See how we craft your perfect experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Cafe Design",
              description: "Every detail is carefully planned to create the perfect atmosphere",
              image: realImages[0],
              step: "01",
            },
            {
              title: "Quality Service",
              description: "Our team is trained to provide exceptional customer experience",
              image: realImages[1],
              step: "02",
            },
            {
              title: "Community Building",
              description: "Creating spaces where people connect and ideas flourish",
              image: realImages[2],
              step: "03",
            },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden hover-lift shadow-xl">
              <div className="relative h-64">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-6 left-6 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Instagram Integration with Real Background */}
      <div className="m-4 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image src={realImages[3] || "/placeholder.svg"} alt="Instagram Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 bg-gradient-to-r from-pink-500/95 to-purple-600/95 p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">📸 Share Your Starbucks Moment</h2>
          <p className="text-xl mb-8 opacity-90">Tag us @StarbucksIndia and use #MyStarbucksMoment to be featured</p>
          <div className="flex justify-center space-x-6 text-5xl mb-8">
            <span>📸</span>
            <span>☕</span>
            <span>💚</span>
            <span>✨</span>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[realImages[4], realImages[5], realImages[6]].map((img, i) => (
              <div key={i} className="aspect-square relative rounded-xl overflow-hidden">
                <Image src={img || "/placeholder.svg"} alt={`Instagram ${i + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
