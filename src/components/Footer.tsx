const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <img src="/lovable-uploads/fb3e28b0-d4f3-4dc4-be21-b13d8d5fc361.png" alt="Melolo Logo" className="h-8 mb-4" />
            <p className="text-gray-600 max-w-md">
              Download the free short drama app loved across Southeast Asia. Watch high-quality Asian dramas with romance, thriller, and costume genres.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">EXPLORE FEATURES</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Short Dramas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Download App</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Offline Viewing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Easy Interface</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">SUPPORT & HELP</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">DOWNLOAD FREE APP</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Free Download on Google Play</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Coming Soon to App Store</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © 2025 Melolo - Free Short Drama App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;