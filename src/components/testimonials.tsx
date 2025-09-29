import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Harpreet Singh",
      occupation: "Daily Wage Worker, Village Khosa",
      quote: "I didn't lose a day's income just to find no doctor. Now I can talk to doctor sahib from my home and get medicine list. My family's health is safe, and my work continues.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1742106850780-fbcc50b1ef5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHZpbGxhZ2UlMjBkb2N0b3IlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU5MTI5Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Simran Kaur",
      occupation: "Mother of Two, Village Bakhshiwala",
      quote: "During monsoon, roads are impossible. This app saved my child when he had fever at night. Doctor connected immediately and guided me properly. God bless this service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1676288044755-f1df81adffd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTkxMjk0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Balwinder Singh", 
      occupation: "Farmer, Village Ghanaur",
      quote: "Diabetes check-up every month was costing ₹800 in travel. Now it's free consultation and I can check medicine availability before going to market. Very helpful for old people like me.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1699386872634-cad1a70f05d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwdW5qYWIlMjBydXJhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTkxMjk0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from families who've benefited from accessible healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.occupation}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-800 font-medium">
              4.8/5 rating from 500+ families served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
