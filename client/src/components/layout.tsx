import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    // { name: "Work", href: "/work" },
    { name: "Team", href: "/company" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <Link href="/">
            <div className="text-2xl font-bold font-heading cursor-pointer tracking-tighter text-foreground hover:text-primary transition-colors shrink-0">
              ORVEX<span className="text-primary">.</span>
            </div>
          </Link>

          {/* Centered Navigation */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.span
                    className={`cursor-pointer text-sm font-medium ${location === link.href ? "text-primary" : "text-foreground/80"
                      }`}
                    variants={{
                      initial: { scale: 1, y: 0, letterSpacing: "0em" },
                      hover: { scale: 1.4, y: -12, letterSpacing: "0.08em", color: "#167DB5" }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {link.name}
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    variants={{
                      initial: { width: "0%", opacity: 0 },
                      hover: { width: "100%", opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Button - Right */}
          <div className="hidden md:flex shrink-0">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.45, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.div
                  className="relative"
                      whileHover={{ boxShadow: "0 0 50px rgba(22, 125, 181, 0.7)" }}
                >
                  <Button variant="default" className="font-heading rounded-none">
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link href="/contact">
                <Button className="w-full rounded-none">Get Started</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Top Section: Brand & Nav */}
        {/*<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="text-3xl font-bold font-heading tracking-tighter text-white">
            ORVEX<span className="text-primary">.</span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {["Home", "Services", "Company", "Process", "Contact"].map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                <span className="text-sm font-medium text-gray-400 hover:text-primary transition-colors cursor-pointer uppercase tracking-wider">
                  {item}
                </span>
              </Link>
            ))}
          </nav>
        </div>*/}

        {/* Middle Section: CTA & Contact */}
        <div className="flex justify-center mb-20">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Ready to start your <span className="text-primary">project?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Let's build something amazing together. We'd love to learn more about your brand and help you achieve your digital goals.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-3 rounded-none uppercase tracking-widest text-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Info
        <div className="flex flex-col justify-center md:items-end space-y-8">
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Get in touch</p>
            <a href="mailto:hello@orvex.com" className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors">
              hello@orvex.com
            </a>
          </div>
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Follow us</p>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-lg text-gray-400 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-lg text-gray-400 hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div> */}

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Orvex. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}