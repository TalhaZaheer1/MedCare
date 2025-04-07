import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  // Color variables
  const colors = {
    primary: "bg-gray-900", // Dark background
    secondary: "bg-gray-800", // Slightly lighter for contrast
    accent: "text-blue-400", // Accent color for links/icons
    text: "text-gray-300", // Main text color
    border: "border-blue-400", // Border accent color
  };

  const links = [
    {
      title: "Quick Links",
      items: ["Home", "About Us", "Services", "Blog", "Contact"],
    },
    {
      title: "Popular Links",
      items: [
        "Appointments",
        "Pediatric Care",
        "Vaccinations",
        "Wellness Checks",
        "Emergency Care",
      ],
    },
  ];

  const contactInfo = [
    { icon: "📍", text: "123 Health St, Medical City, USA" },
    { icon: "✉️", text: "info@pediatriccare.com" },
    { icon: "📞", text: "+1 (234) 567-8900" },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com" },
    { icon: <FaFacebookF />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com" },
  ];
  return (
    <>
      {/* Main Footer */}
      <footer
        className={`${colors.primary} text-gray-300 pt-16 pb-12 animate-fade-in-up`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Link Columns */}
            {links.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-blue-400">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className={`${colors.text} hover:text-blue-400 transition-colors flex items-center`}
                      >
                        <span className={`${colors.accent} mr-2`}>→</span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-blue-400">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${colors.accent} mr-3 mt-1`}>
                      {info.icon}
                    </span>
                    <span className={colors.text}>{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-blue-400">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 rounded-full ${colors.secondary} flex items-center justify-center text-white hover:bg-blue-500 transition-colors`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-white text-lg mb-4">
                  Subscribe to our Newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                  />
                  <button
                    className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors`}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
