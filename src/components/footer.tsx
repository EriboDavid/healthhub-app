import React from "react";

const Footer: React.FC = () => {
    return (
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
    );
};

export default Footer;
