import { Button } from "./ui/button";
import { Play, Download, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-green-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare that reaches your{" "}
                <span className="text-green-600">village</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with qualified doctors from your phone in Punjabi, Hindi, or English. 
                No internet? No problem. Your health records stay with you, always.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-5 h-5 text-red-500" />
                <span>500+ families served</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5 text-blue-500" />
                <span>50+ local doctors</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659353887977-c310d90c751a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBwaG9uZSUyMHZpZGVvJTIwY2FsbCUyMGRvY3RvcnxlbnwxfHx8fDE3NTkxMjk0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video call with doctor on mobile phone"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-green-600/10 rounded-2xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
