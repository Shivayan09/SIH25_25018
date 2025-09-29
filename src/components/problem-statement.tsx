import { MapPin, Clock, IndianRupee, Truck, AlertTriangle } from "lucide-react";

export function ProblemStatement() {
  const problems = [
    {
      icon: MapPin,
      title: "Doctor Shortage",
      description: "Nearest qualified doctor is 25+ km away from most villages"
    },
    {
      icon: Clock,
      title: "Loss of Work Days",
      description: "Full day wasted traveling for a 10-minute consultation"
    },
    {
      icon: IndianRupee,
      title: "Loss of Income",
      description: "₹300-500 daily wages lost just to visit a doctor"
    },
    {
      icon: AlertTriangle,
      title: "Medicine Shortage",
      description: "No way to know if local pharmacy has prescribed medicines"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Reality of Rural Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Families in Nabha and surrounding villages face daily struggles to access basic healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-full">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span className="text-orange-800 font-medium">
              Result: Delayed treatment, preventable complications, and financial strain
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
