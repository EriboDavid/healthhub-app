import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import About from "../assets/About.jpg";
import gallery1 from "../assets/gallery/gallery_01.jpg";
import gallery2 from "../assets/gallery/gallery_02.jpg";
import gallery3 from "../assets/gallery/gallery_03.jpg";
import gallery4 from "../assets/gallery/gallery_04.jpg";
import gallery5 from "../assets/gallery/gallery_05.jpg";
import gallery6 from "../assets/gallery/gallery_06.jpg";

export default function Home() {
  return (
    <>
      
      <div className="bg-white shadow-md py-4">
        <header className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <button
              className="text-gray-600 text-2xl ml-4 lg:hidden"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-800 lg:mt-0 mt-4">
              <li>
                <a href="#" className="hover:text-red-500 py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 py-2">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-500 py-2">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about_us" className="hover:text-red-500 py-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact_us" className="hover:text-red-500 py-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <Link to="/Register">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full lg:w-auto">
                Register
              </button>
            </Link>
            <Link to="/Login">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full lg:w-auto">
                Login
              </button>
            </Link>
          </div>
        </header>
      </div>

    
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
              Carefinder is a user-friendly tool designed to bridge the gap in healthcare access across Nigeria. We understand the importance of finding reliable healthcare facilities quickly, which is why we’ve created a platform that allows users to easily search for hospitals within their region, export the information to a CSV file, and share it with others. Whether you're seeking medical care for yourself or helping a loved one, Carefinder provides up-to-date contact details and locations of hospitals near you.
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

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-4">HealthHub</h3>
              <p className="text-sm">
                info@healthhub.com
                <br />
                0707 190 1904
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-red-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-red-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-red-400">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about_us" className="hover:text-red-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact_us" className="hover:text-red-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-600 rounded mb-4"
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 py-4">
          <div className="container mx-auto text-center text-sm">
            <p>&copy; 2024 HealthHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
