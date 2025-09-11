"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Award, Users, Clock, Heart, ChefHat, Star, MapPin, Phone, Mail, Calendar, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: Users,
    number: "2,500+",
    label: "Happy Students",
    color: "text-blue-600"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    color: "text-green-600"
  },
  {
    icon: ChefHat,
    number: "25+",
    label: "Expert Instructors",
    color: "text-purple-600"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Average Rating",
    color: "text-yellow-600"
  }
]

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We believe that great baking comes from passion, dedication, and the pursuit of perfection in every recipe."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "The Baking School is more than just classes - it's a community of food lovers sharing knowledge and experiences."
  },
  {
    icon: Clock,
    title: "Hands-On Learning",
    description: "We emphasize practical, hands-on experience with personalized attention to help you master every technique."
  }
]

const instructors = [
  {
    id: 1,
    name: "Chef Maria Rodriguez",
    specialty: "French Patisserie & Artisan Breads",
    experience: "15+ years",
    education: "Le Cordon Bleu Paris",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Master pastry chef with expertise in classical French techniques. Former head pastry chef at Michelin-starred restaurants.",
    achievements: ["James Beard Award Nominee", "World Pastry Championship Finalist", "Author of 'Modern French Baking'"]
  },
  {
    id: 2,
    name: "Chef Rajesh Kumar",
    specialty: "Traditional Indian Sweets & Fusion Desserts",
    experience: "12+ years",
    education: "Institute of Hotel Management, Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Specializes in traditional Indian mithai and innovative fusion desserts that blend Eastern and Western flavors.",
    achievements: ["National Culinary Award Winner", "Featured in Food & Wine Magazine", "Consultant for 5-star hotels"]
  },
  {
    id: 3,
    name: "Chef Sarah Thompson",
    specialty: "Wedding Cakes & Sugar Art",
    experience: "10+ years",
    education: "Culinary Institute of America",
    image: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Award-winning cake designer known for intricate sugar work and stunning wedding cake creations.",
    achievements: ["International Cake Competition Winner", "Celebrity Wedding Cake Designer", "TV Show Guest Expert"]
  },
  {
    id: 4,
    name: "Chef Antonio Rossi",
    specialty: "Italian Pastries & Gelato",
    experience: "18+ years",
    education: "Università dei Sapori, Perugia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Third-generation Italian pastry chef bringing authentic recipes and techniques from his family's bakery in Tuscany.",
    achievements: ["Gelato World Championship Winner", "Traditional Italian Pastry Master", "Restaurant Owner in Italy"]
  },
  {
    id: 5,
    name: "Chef Emily Chen",
    specialty: "Chocolate & Confections",
    experience: "8+ years",
    education: "École Chocolat Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Chocolate artisan specializing in bean-to-bar chocolate making and artistic confections.",
    achievements: ["International Chocolate Awards Winner", "Sustainable Cacao Advocate", "Chocolate Sculpture Artist"]
  },
  {
    id: 6,
    name: "Chef David Wilson",
    specialty: "Artisan Breads & Sourdough",
    experience: "14+ years",
    education: "San Francisco Baking Institute",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Master baker with deep expertise in fermentation science and traditional bread-making techniques.",
    achievements: ["Bread Bakers Guild Member", "Sourdough Specialist Certification", "Artisan Bakery Owner"]
  }
]

export default function AboutSection() {
  const [showAboutModal, setShowAboutModal] = useState(false)
  const [showInstructorsModal, setShowInstructorsModal] = useState(false)

  const handleLearnMore = () => {
    setShowAboutModal(true)
  }

  const handleMeetInstructors = () => {
    setShowInstructorsModal(true)
  }

  const handleCloseAboutModal = () => {
    setShowAboutModal(false)
  }

  const handleCloseInstructorsModal = () => {
    setShowInstructorsModal(false)
  }

  return (
    <>
      {/* About Us Modal */}
      <Dialog open={showAboutModal} onOpenChange={handleCloseAboutModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-6">
              About The Baking School
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="The Baking School Kitchen"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">State-of-the-Art Facilities</h3>
                  <p className="text-white/90">Professional-grade equipment and spacious learning environments</p>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our mission is to provide comprehensive and accessible baking education that fosters creativity, empowers women and youth, equips students with the skills needed to excel in the baking industry.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We aim to create a supportive and inclusive learning environment, promote sustainable practices, and inspire a passion for baking that transcends borders, preparing our graduates to meet the growing demand for baking professionals around the world.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To be a leading institution that empowers individuals through exceptional baking education, nurturing creativity, skill development, and professional growth, ultimately contributing to the Global Baking Industry with innovative and skilled professionals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We strive to create a global community of skilled bakers who carry forward the traditions of fine baking while embracing modern techniques and sustainable practices.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose The Baking School?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <ChefHat className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Expert Instructors</h4>
                  <p className="text-sm text-gray-600">Learn from industry professionals with decades of experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-50">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Certified Programs</h4>
                  <p className="text-sm text-gray-600">Industry-recognized certifications that boost your career</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-50">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Small Class Sizes</h4>
                  <p className="text-sm text-gray-600">Personalized attention with maximum 12 students per class</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-yellow-50">
                  <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-600">Weekend and evening classes to fit your lifestyle</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-red-50">
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Lifetime Support</h4>
                  <p className="text-sm text-gray-600">Ongoing mentorship and career guidance after graduation</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-indigo-50">
                  <Star className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Modern Equipment</h4>
                  <p className="text-sm text-gray-600">Professional-grade ovens, mixers, and baking tools</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Visit Our Campus</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-gray-600">123 Baker Street<br />Culinary District<br />Mumbai, India</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-green-600 mb-2" />
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-sm text-gray-600">+91 98765 43210<br />+91 98765 43211</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-sm text-gray-600">info@thebakingschool.com<br />admissions@thebakingschool.com</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2009 - The Beginning</h4>
                    <p className="text-gray-600">Started as a small home-based baking studio with just 5 students and a dream to share the art of baking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2012 - First Certification</h4>
                    <p className="text-gray-600">Received accreditation from the Culinary Institute of India, establishing our credibility in professional education.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2015 - Campus Expansion</h4>
                    <p className="text-gray-600">Moved to our current 5,000 sq ft facility with state-of-the-art equipment and expanded to serve 200+ students annually.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2020 - Digital Innovation</h4>
                    <p className="text-gray-600">Launched online courses and hybrid learning programs, making our education accessible nationwide during the pandemic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2024 - Community Impact</h4>
                    <p className="text-gray-600">Proud to have trained over 2,500 students, with 85% successfully starting their own businesses or advancing their culinary careers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Meet Our Instructors Modal */}
      <Dialog open={showInstructorsModal} onOpenChange={handleCloseInstructorsModal}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-6">
              Meet Our Expert Instructors
            </DialogTitle>
            <p className="text-center text-gray-600 mb-8">
              Learn from world-class chefs and industry professionals who bring decades of experience 
              and passion to every class.
            </p>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={instructor.image}
                    alt={`${instructor.name} - ${instructor.specialty}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority={instructor.id <= 3}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(instructor.name)}&size=400&background=f3f4f6&color=374151&format=png`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-lg">{instructor.name}</h3>
                    <p className="text-sm text-white/95 drop-shadow-md">{instructor.specialty}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {instructor.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Expert
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                      <p className="text-sm text-gray-600">{instructor.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{instructor.bio}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {instructor.achievements.map((achievement, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                            <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Teaching Team</h3>
              <p className="text-gray-600 mb-4">
                Are you a professional chef or baker interested in sharing your expertise? 
                We&apos;re always looking for passionate instructors to join our team.
              </p>
              <Button className="gradient-yellow-blue text-white">
                Apply to Teach
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main About Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About
              <span className="dancing-script text-gradient text-4xl sm:text-5xl lg:text-6xl block">
                Our Story
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the passion and expertise behind India&apos;s premier baking school, 
              where culinary dreams become delicious reality.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional chef in white uniform working in commercial kitchen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Crafting Culinary Dreams Since 2009
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crafting Culinary Dreams Since 2023: Founded with a vision to be a leading institution that empowers individuals through exceptional Baking education, nurturing creativity, Skill development, and professional growth, ultimately contributing to the Global Baking Industry with Innovative and skilled professionals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We aim to create a supportive and inclusive learning environment, promote sustainable practices, and inspire a passion for baking that transcends borders, preparing our graduates to meet the growing demand for baking professionals around the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="gradient-yellow-blue text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
                  onClick={handleLearnMore}
                >
                  Learn More About Us
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full"
                  onClick={handleMeetInstructors}
                >
                  Meet Our Instructors
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="glass border-white/20 text-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 mb-3 sm:mb-4`}>
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the learning experience for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass border-white/20 p-6 sm:p-8 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-blue-100 mb-4">
                    <value.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}