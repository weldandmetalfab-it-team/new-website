import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/updated_logo.mp4';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''
      } bg-white`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 overflow-hidden rounded-lg hover:scale-110 transition-transform duration-300">
  <video
    src={logo}
    alt="Video"
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
            <h1 className="text-2xl font-bold tracking-wider text-blue-900 transition-colors duration-300">
              <Link to="/"> WELD AND METAL FABRICATION </Link>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xl">
            {['About Us', 'Services', 'Projects', 'Featured On', 'Get Quote', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-800 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

