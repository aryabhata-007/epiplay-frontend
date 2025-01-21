import { FileText, Smartphone, Globe } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Why Choose EpiPlay Free Drama App
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg">
          The best free short drama app in Southeast Asia, designed for drama lovers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Free Asian Short Dramas</h3>
            <p className="text-gray-600 mb-4">
              Watch free high-quality Asian dramas in Indonesia, Philippines & Southeast Asia. Perfect 10-20 min episodes for your busy schedule.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Free drama streaming
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                HD quality content
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Multiple drama genres
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy-to-Use Drama App</h3>
            <p className="text-gray-600 mb-4">
              Enjoy the best mobile drama experience with our user-friendly interface. Download episodes for offline viewing.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Offline drama viewing
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                My List feature
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Smart recommendations
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Southeast Asian Focus</h3>
            <p className="text-gray-600 mb-4">
              Specially curated for drama fans in Indonesia, Philippines & Southeast Asia. Enjoy local favorites and trending series.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Available in Indonesia
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Available in Philippines
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Daily content updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
