import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import navigation from '../../content/navigation.json';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const DropdownMenu = ({ items }) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block px-4 py-3 hover:bg-slate-50 transition"
          onClick={() => setActiveDropdown(null)}
        >
          <div className="font-semibold text-gray-900">{item.label}</div>
          <div className="text-sm text-gray-600">{item.description}</div>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={navigation.logo.src}
              alt={navigation.logo.alt}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">
              {navigation.logo.text}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.menuItems.map((item, index) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                      isActive(item.path)
                        ? 'text-brand-teal bg-teal-50'
                        : 'text-gray-700 hover:text-brand-teal hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === 'dropdown') {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                  >
                    <button
                      className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-teal hover:bg-gray-50 transition"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <DropdownMenu items={item.items} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.menuItems.map((item, index) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-md text-base font-medium ${
                        isActive(item.path)
                          ? 'text-brand-teal bg-teal-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.type === 'dropdown') {
                  return (
                    <div key={index}>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileDropdownOpen === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileDropdownOpen(null);
                                }}
                                className="block px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
