
import About from "../assets/About.jpg";
import gallery1 from "../assets/gallery/gallery_01.jpg";
import gallery2 from "../assets/gallery/gallery_02.jpg";
import gallery3 from "../assets/gallery/gallery_03.jpg";
import gallery4 from "../assets/gallery/gallery_04.jpg";
import gallery5 from "../assets/gallery/gallery_05.jpg";
import gallery6 from "../assets/gallery/gallery_06.jpg";
import Footer from "./footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      
        <Navbar />

    
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">HealthHub</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4">
            We care about your health <br />
            more than anything in the world.
          </h2>
        </div>
      </div>

   
      <div id="services" className="bg-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          <p className="text-base md:text-lg mt-2">
            Take a look at some of our services
          </p>
          <ul className="mt-6 space-y-2">
            <li className="text-lg md:text-xl font-medium">Find Hospitals</li>
            <li className="text-lg md:text-xl font-medium">Export Hospitals</li>
            <li className="text-lg md:text-xl font-medium">Share Hospitals</li>
            <li className="text-lg md:text-xl font-medium">Markdown Support</li>
          </ul>
        </div>
      </div>

   
      <section id="about_us" className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img src={About} alt="About" className="w-full object-cover mb-4 mx-auto" />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h3 className="text-2xl md:text-3xl font-bold">About Our Hospital</h3>
            <p className="text-base md:text-lg mt-4">
              HealthHub is a user-friendly tool designed to bridge the gap in healthcare access across Nigeria. We understand the importance of finding reliable healthcare facilities quickly, which is why we’ve created a platform that allows users to easily search for hospitals within their region, export the information to a CSV file, and share it with others. Whether you're seeking medical care for yourself or helping a loved one, Carefinder provides up-to-date contact details and locations of hospitals near you.
            </p>
            <p className="text-base md:text-lg mt-4">
              Our mission is to simplify the process of accessing healthcare information, ensuring that everyone has the opportunity to find the care they need, when they need it. With features like user authentication, markdown content creation for admins, and seamless data sharing, Carefinder is built to be intuitive, scalable, and secure.
            </p>
          </div>
        </div>
      </section>

  
      <div id="gallery" className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Our Gallery</h2>
            <p className="text-base md:text-lg mt-2">
              Explore our gallery to see more about what we offer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full">
              <img src={gallery1} alt="Gallery 1" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full">
              <img src={gallery2} alt="Gallery 2" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full">
              <img src={gallery3} alt="Gallery 3" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full">
              <img src={gallery4} alt="Gallery 4" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full">
              <img src={gallery5} alt="Gallery 5" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full">
              <img src={gallery6} alt="Gallery 6" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </>
  );
};
