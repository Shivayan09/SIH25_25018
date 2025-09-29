import { Clock, IndianRupee, Zap, TrendingUp } from "lucide-react";

export function ImpactSection() {
  const impacts = [
    {
      icon: Clock,
      title: "Saves Travel Time",
      stat: "4-6 hours",
      description: "No more full-day trips to distant hospitals for routine consultations"
    },
    {
      icon: IndianRupee,
      title: "Protects Income",
      stat: "₹400-600",
      description: "Daily wages saved by avoiding unnecessary travel and lost work time"
    },
    {
      icon: Zap,
      title: "Faster Care",
      stat: "24/7",
      description: "Get medical advice within minutes, not after hours of travel"
    },
    {
      icon: TrendingUp,
      title: "Scalable Model",
      description: "Proven solution that can serve all rural areas across Punjab and beyond"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real impact on real families in rural Punjab
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-green-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-8 h-8 text-white" />
              </div>
              {impact.stat && (
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {impact.stat}
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {impact.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Transforming Rural Healthcare, One Family at a Time
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join the movement to make quality healthcare accessible to every village in Punjab. 
            Together, we can ensure no family has to choose between health and livelihood.
          </p>
        </div>
      </div>
    </section>
  );
}
