import { FileText, Smartphone, Globe } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to succeed
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-pink-100 rounded-md shadow-lg">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Free Asian Short Dramas</h3>
              <p className="mt-2 text-base text-gray-600">
                Watch free high-quality Asian dramas in Indonesia, Philippines & Southeast Asia. Perfect 10-20 min episodes for your busy schedule.
              </p>
            </div>
          </div>
          
          <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-pink-100 rounded-md shadow-lg">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Easy-to-Use Drama App</h3>
              <p className="mt-2 text-base text-gray-600">
                Enjoy the best mobile drama experience with our user-friendly interface. Download episodes for offline viewing.
              </p>
            </div>
          </div>
          
          <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-pink-100 rounded-md shadow-lg">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Southeast Asian Focus</h3>
              <p className="mt-2 text-base text-gray-600">
                Specially curated for drama fans in Indonesia, Philippines & Southeast Asia. Enjoy local favorites and trending series.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
