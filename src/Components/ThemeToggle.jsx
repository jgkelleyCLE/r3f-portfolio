
import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { setPortTheme } from '@/redux/settingsSlice';

const ThemeToggle = () => {
  const myTheme = useSelector(state => state.settings.theme)
  const [theme, setTheme] = useState(myTheme);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch()
  
  // Theme configurations - simplified
  const themes = [
    { name: "jack-light", label: "Light", background: "#ffffff", primary: "#3d3d3d", foreground: "#e3e3e3", accent: "#00916c" },
    { name: "jack-dark", label: "Dark", background: "#1a1a1a", primary: "#cacaca", foreground: "#454545", accent: "#6600c6" },
    { name: "jack-brown", label: "Brown", background: "#2c1c14", primary: "#bb9679", foreground: "#8e7058", accent: "#266395" },
    { name: "jack-plum", label: "Plum", background: "#1e070e", primary: "#b36f91", foreground: "#4b1c2a", accent: "#00c8fa" },
    { name: "jack-midnight", label: "Midnight", background: "#020018", primary: "#b1b1b1", foreground: "#1e1086", accent: "#00916c" },
  ];

  // Find current theme object
  const currentTheme = themes.find(t => t.name === theme);

  const switchTheme = (newTheme) => {
    document.documentElement.classList.remove("jack-light", "jack-dark", "jack-brown", "jack-plum", "jack-midnight");
    document.documentElement.classList.add(newTheme);
    dispatch(setPortTheme(newTheme))
    setTheme(newTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.remove("jack-light", "jack-dark", "jack-brown", "jack-plum", "jack-midnight");
    document.documentElement.classList.add(myTheme);
    setTheme(myTheme);
  }, [myTheme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  rounded-md transition-colors -mr-1"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* TOP NAV */}
        <div 
          className="w-7 h-7 rounded-full border-2 cursor-pointer"
          style={{ backgroundColor: currentTheme.foreground, borderColor: currentTheme.accent }}
        ></div>
        <span className="text-primary font-medium hidden">{currentTheme.label}</span>
        <FiChevronDown className={`text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      
      {isOpen && (
        <div className="absolute right-0 mt-1 p-2 bg-background border border-border rounded-md shadow-lg z-10 w-48">
          <div className="grid grid-cols-1 gap-1">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => switchTheme(t.name)}
                style={{ backgroundColor: t.background }}
                className={`
                  flex items-center gap-2 p-2 rounded-md transition-all hover:bg-muted
                  ${theme === t.name ? 'bg-muted' : ''}
                `}
              >
                <div 
                  className={`w-7 h-7 rounded-full border-2`}
                  style={{ backgroundColor: t.foreground, borderColor: t.accent }}
                ></div>
                <span 
                className="text-primary"
                style={{ color: t.primary }}
                >{t.label}</span>
                {theme === t.name && (
                  <span className="ml-auto text-xs text-primary"
                  style={{ color: t.accent }}
                  >Active</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;




