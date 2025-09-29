import { Smartphone, Languages, Video, FileText, MapPin, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      step: "1",
      title: "Open the App",
      description: "Download and open our app on any smartphone - works on Android and iOS"
    },
    {
      icon: Languages,
      step: "2", 
      title: "Choose Language",
      description: "Select Punjabi, Hindi, or English - whatever you're most comfortable with"
    },
    {
      icon: Video,
      step: "3",
      title: "Consult Doctor",
      description: "Connect with a qualified doctor via video call. Explain your symptoms clearly"
    },
    {
      icon: FileText,
      step: "4",
      title: "Get Prescription",
      description: "Receive digital prescription and advice. Everything saved in your phone"
    },
    {
      icon: MapPin,
      step: "5",
      title: "Find Medicines",
      description: "Check which local pharmacy has your medicines in stock before visiting"
    },
    {
      icon: CheckCircle,
      step: "6",
      title: "Follow Up",
      description: "Schedule follow-up consultations as needed. Your health history is always available"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to get quality healthcare from your village
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-800 font-medium">
              Complete process takes less than 15 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}