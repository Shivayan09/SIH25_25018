import { Button } from "./ui/button";
import { Users, UserPlus, Handshake, Download, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const ctaOptions = [
    {
      icon: Users,
      title: "Join as Patient",
      description: "Start your healthcare journey today",
      buttonText: "Get Started",
      primary: true
    },
    {
      icon: UserPlus,
      title: "Join as Doctor",
      description: "Serve rural communities remotely",
      buttonText: "Apply Now",
      primary: false
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description: "Expand healthcare access together",
      buttonText: "Learn More",
      primary: false
    }
  ];

  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Rural Healthcare?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join thousands of families who have already discovered accessible, quality healthcare 
            right in their village. The future of rural health starts with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              <Button 
                className='bg-gray-100 hover:bg-gray-200 text-gray-900 w-full'
                size="lg"
              >
                {option.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Download the App Today
            </h3>
            <p className="text-white/90 mb-6">
              Available for Android and iOS. Works on all smartphones, even basic ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" />
                Download for IOS
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 text-sm">
            Questions? Call our helpline: <span className="font-bold">1800-XXX-XXXX</span> • 
            Available in Punjabi, Hindi & English
          </p>
        </div>
      </div>
    </section>
  );
}
