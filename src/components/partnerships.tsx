import { Shield, Heart, Building, Users } from "lucide-react";

export function Partnerships() {
  const partners = [
    {
      icon: Shield,
      name: "Punjab Health Department",
      description: "Official partnership for rural healthcare initiatives"
    },
    {
      icon: Heart,
      name: "eSanjeevani Platform",
      description: "Integrated with India's national telemedicine platform"
    },
    {
      icon: Building,
      name: "Local Pharmacies",
      description: "Connected with 25+ chemists across Nabha district"
    },
    {
      icon: Users,
      name: "NGO Partners",
      description: "Working with local health awareness organizations"
    }
  ];

  const stats = [
    { number: "50+", label: "Licensed Doctors" },
    { number: "25+", label: "Partner Pharmacies" },
    { number: "500+", label: "Families Served" },
    { number: "10+", label: "Villages Covered" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working with established healthcare institutions and local communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <partner.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Growing Network</h3>
            <p className="opacity-90">Real numbers from real communities</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">
              Regulated by Punjab Health Department • Data Privacy Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}