import { siteConfig } from "@/config/site";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dark = mounted && theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center bg-transparent text-[#0f172a] hover:text-[#167DB5] dark:text-white"
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="inline-flex"
        variants={{
          initial: { scale: 1, y: 0 },
          hover: { scale: 1.4, y: -12 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        variants={{
          initial: { width: "0%", opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

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
    { name: "Company", href: "/company" },
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
              {siteConfig.name.toUpperCase()}<span className="text-primary">.</span>
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
                    className={`cursor-pointer text-sm font-medium hover:text-[#167DB5] ${location === link.href
                      ? "text-[#167DB5] dark:text-[#7dceff]"
                      : "text-[#0f172a] dark:text-white"
                      }`}
                    variants={{
                      initial: { scale: 1, y: 0, letterSpacing: "0em" },
                      hover: { scale: 1.4, y: -12, letterSpacing: "0.08em" }
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
          <div className="hidden md:flex shrink-0 items-center gap-8">
            <ThemeToggle />
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
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
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
          id="mobile-navigation"
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={`block cursor-pointer px-3 py-2 text-base font-medium hover:text-[#167DB5] ${location === link.href
                    ? "text-[#167DB5] dark:text-[#7dceff]"
                    : "text-[#0f172a] dark:text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-6 px-3 pt-4">
              <ThemeToggle />
              <div className="flex-1">
                <Link href="/contact">
                  <Button onClick={() => setIsOpen(false)} className="w-full rounded-none">Get Started</Button>
                </Link>
              </div>
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
        {/* CTA & Contact */}
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

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}