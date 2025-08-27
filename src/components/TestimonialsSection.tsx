import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { ChefHatIcon } from "@/components/icons/BakingIcons"

const getChefIcon = (name: string) => {
  // Alternate colors based on name for variety
  const colors = [
    "text-amber-500",
    "text-blue-500", 
    "text-pink-500",
    "text-green-500",
    "text-purple-500",
    "text-orange-500"
  ]
  const colorIndex = name.length % colors.length
  return <ChefHatIcon className={`w-12 h-12 ${colors[colorIndex]}`} />
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Baker",
    image: "👩‍🍳",
    rating: 5,
    text: "This baking school transformed my passion into a successful career. The instructors are incredibly knowledgeable and supportive. I now run my own bakery!"
  },
  {
    name: "Michael Chen",
    role: "Home Baker",
    image: "👨‍🍳",
    rating: 5,
    text: "The French Patisserie course was absolutely amazing. I learned techniques I never thought possible. My family is now spoiled with fresh croissants every morning!"
  },
  {
    name: "Emily Rodriguez",
    role: "Pastry Chef",
    image: "👩‍🍳",
    rating: 5,
    text: "The wedding cake design course gave me the confidence to start my own cake decorating business. The hands-on experience was invaluable."
  },
  {
    name: "David Thompson",
    role: "Restaurant Owner",
    image: "👨‍🍳",
    rating: 5,
    text: "I enrolled to improve my restaurant's dessert menu. The chocolate course exceeded my expectations. Our dessert sales have increased by 40%!"
  },
  {
    name: "Lisa Park",
    role: "Career Changer",
    image: "👩‍🍳",
    rating: 5,
    text: "At 45, I decided to follow my dream of becoming a baker. The supportive environment and comprehensive curriculum made the transition smooth and enjoyable."
  },
  {
    name: "James Wilson",
    role: "Artisan Baker",
    image: "👨‍🍳",
    rating: 5,
    text: "The artisan bread making course taught me traditional techniques that have been passed down for generations. My sourdough is now the talk of the neighborhood!"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-blue-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4">
            Success
            <span className="dancing-script text-gradient text-4xl sm:text-5xl lg:text-6xl block">
              Stories
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Hear from our amazing students who have transformed their lives 
            through the art of baking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass border-white/20 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {getChefIcon(testimonial.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400/30 absolute -top-1 sm:-top-2 -left-1 sm:-left-2" />
                  <p className="text-gray-700 leading-relaxed italic pl-4 sm:pl-6 text-sm sm:text-base">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}