const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-secondary-900 dark:to-secondary-800 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 text-secondary-900 dark:text-white animate-fade-in"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Digital Innovation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Studio
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            Kami menciptakan solusi digital inovatif yang mengubah cara bisnis
            beroperasi. Dari website hingga aplikasi mobile, kami siap
            mewujudkan visi digital Anda.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Mulai Proyek Anda
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
