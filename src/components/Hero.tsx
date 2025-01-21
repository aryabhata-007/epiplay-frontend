const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Watch Short Dramas
          <span className="inline-block">✨</span>
        </h1>
        <h2 className="text-3xl md:text-4xl mb-8">Anytime, Anywhere</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Experience the best mobile short-form entertainment with Melolo. Watch HD dramas online or offline, perfectly fit your busy schedule.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold mb-2">1M+</h3>
            <p>Downloads</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">4.8</h3>
            <p>App Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">10K+</h3>
            <p>Daily Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;