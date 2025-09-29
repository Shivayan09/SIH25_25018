import { Video, Database, MapPin, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function SolutionFeatures() {
  const features = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "Face-to-face consultations with real doctors in Punjabi, Hindi, or English. Clear video quality even on 2G networks.",
      benefits: ["Multi-language support", "Works on basic smartphones", "Real licensed doctors"]
    },
    {
      icon: Database,
      title: "Offline Health Records",
      description: "Your complete medical history stored on your phone. Access prescriptions, reports, and notes without internet.",
      benefits: ["Always accessible", "Complete privacy", "No data charges"]
    },
    {
      icon: MapPin,
      title: "Pharmacy Updates",
      description: "Real-time medicine availability from local chemists in Nabha. Know before you go and reserve medicines.",
      benefits: ["Live stock updates", "Price comparisons", "Reserve medicines"]
    },
    {
      icon: Bot,
      title: "AI Symptom Checker",
      description: "Quick preliminary assessment of symptoms. Lightweight AI that works even with slow internet connections.",
      benefits: ["Instant guidance", "Emergency detection", "Works offline"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Solution: Healthcare in Your Pocket
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful features designed specifically for rural communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}