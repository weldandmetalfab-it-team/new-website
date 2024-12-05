export default function Footer() {
  return (
    <footer className="bg-blue-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-800">Contact Us</h3>
            <p className="hover:text-teal-800 transition-colors duration-300">Email: info@weldmetal.com</p>
            <p className="hover:text-teal-800 transition-colors duration-300">Phone: (555) 123-4567</p>
            <p className="hover:text-teal-800 transition-colors duration-300">Address: 123 Metal Street, Steel City</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-800">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Projects', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-800 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-800">Newsletter</h3>
            <p>Stay updated with our latest news and offers!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full border focus:outline-none focus:ring-2 focus:ring-teal-800"
              />
              <button className="bg-teal-800 px-6 py-2 rounded-r-md hover:bg-teal-700 transition-colors duration-300 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p>&copy; 2024 Weld and Metal Fabrication. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

