
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

// import React, { useState, useRef, useEffect } from 'react'
// import { FiMoon, FiSun, FiChevronDown, FiCheck } from 'react-icons/fi'
// import { RxShadowNone } from 'react-icons/rx'
// import { BsFillCircleFill } from 'react-icons/bs'
// import { useDispatch, useSelector } from 'react-redux';
// import { setPortTheme } from '@/redux/settingsSlice';

// const ThemeToggle = () => {
//   const myTheme = useSelector(state => state.settings.theme)
//   console.log("MY THEME: ", myTheme)


//   const [theme, setTheme] = useState(myTheme);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const dispatch = useDispatch()

  
//   // Theme colors and configurations
//   const themes = [
//     { name: "jack-light", color: "#ffffff", icon: <FiSun className="text-yellow-500" />, label: "Light" },
//     { name: "jack-dark", color: "#1e293b", icon: <FiMoon className="text-blue-300" />, label: "Dark" },
//     { name: "jack-brown", color: "#2c1c14", icon: <RxShadowNone className="text-accent" />, label: "Brown" },
//     { name: "jack-plum", color: "#1e070e", icon: <BsFillCircleFill className="#1e070e" />, label: "Plum" },
//     { name: "jack-midnight", color: "#191970", icon: <RxShadowNone className="text-indigo-300" />, label: "Midnight" },
//   ];

//   // Find current theme object
//   const currentTheme = themes.find(t => t.name === theme);

//   const switchTheme = (newTheme) => {
//     document.documentElement.classList.remove("jack-light", "jack-dark", "jack-brown", "jack-plum", "jack-midnight");
//     document.documentElement.classList.add(newTheme);
//     dispatch(setPortTheme(newTheme))
//     setTheme(newTheme);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     // First remove all possible theme classes
//     document.documentElement.classList.remove("jack-light", "jack-dark", "jack-brown", "jack-plum", "jack-midnight");
    
//     // Then add the theme from Redux
//     document.documentElement.classList.add(myTheme);
    
//     // Update local state if needed
//     setTheme(myTheme);
//   }, [myTheme]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 p-2 rounded-md bg-background hover:bg-muted border border-border transition-colors"
//         aria-haspopup="true"
//         aria-expanded={isOpen}
//       >
//         <div 
//           className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300"
//           style={{ backgroundColor: currentTheme.color }}
//         >
//           {currentTheme.icon}
//         </div>
//         <span className="text-primary font-medium hidden md:block">{currentTheme.label}</span>
//         <FiChevronDown className={`text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-1 p-3 bg-background border border-border rounded-md shadow-lg z-10 w-64">
//           <div className="grid grid-cols-1 gap-2">
//             {themes.map((t) => (
//               <button
//                 key={t.name}
//                 onClick={() => switchTheme(t.name)}
//                 className={`
//                   flex items-center gap-3 p-3 rounded-md transition-all hover:bg-muted
//                   ${theme === t.name ? 'bg-muted' : ''}
//                 `}
//               >
//                 <div 
//                   className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center"
//                   style={{ backgroundColor: t.color }}
//                 >
//                   {t.icon}
//                   {/* {theme === t.name && <FiCheck className={t.name === 'jack-light' ? 'text-black' : 'text-white'} />} */}
//                 </div>
//                 <span className="text-primary font-medium">{t.label}</span>
//                 {theme === t.name && (
//                   <span className="ml-auto text-sm text-green-500 font-medium">Active</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThemeToggle;


// import React, { useState } from 'react'
// import { FiMoon, FiSun } from 'react-icons/fi'
// import { RxShadowNone } from 'react-icons/rx'
// import { BsFillCircleFill } from 'react-icons/bs'

// const ThemeToggle = () => {

//     const [theme, setTheme] = useState("jack-light");

    
//   const themes = [
//     { name: "jack-light", color: "#ffffff", icon: <FiSun className="text-yellow-500" /> },
//     { name: "jack-dark", color: "#1e293b", icon: <FiMoon className="text-blue-300" /> },
//     { name: "jack-brown", color: "#8B4513", icon: <BsFillCircleFill className="text-amber-700" /> },
//     { name: "jack-plum", color: "#673147", icon: <BsFillCircleFill className="text-purple-700" /> },
//     { name: "jack-midnight", color: "#191970", icon: <RxShadowNone className="text-indigo-300" /> },
//   ];

//   const switchTheme = (newTheme) => {
//     document.documentElement.classList.remove("jack-light", "jack-dark", "jack-brown", "jack-plum", "jack-midnight");
//     document.documentElement.classList.add(newTheme);
//     setTheme(newTheme);
//   };

//   return (
    

//     <div className="flex items-center gap-2">
//       {themes.map((t) => (
//         <button
//           key={t.name}
//           onClick={() => switchTheme(t.name)}
//           className={`
//             w-8 h-8 flex items-center justify-center rounded-full transition-all
//             ${theme === t.name ? 'ring-2 ring-accent ring-offset-2' : 'hover:scale-110'}
//           `}
//           style={{ backgroundColor: t.color }}
//           title={t.name.replace('jack-', '')}
//           aria-label={`Switch to ${t.name.replace('jack-', '')} theme`}
//         >
//           {theme === t.name && (
//             <span className="flex items-center justify-center">
//               {t.icon}
//             </span>
//           )}
//         </button>
//       ))}
//     </div>
//   )
// }

// export default ThemeToggle


// <div className="p-4">
    //   <select
    //     value={theme}
    //     onChange={(e) => switchTheme(e.target.value)}
    //     className="p-2 border rounded-md bg-background text-primary"
    //   >
    //     <option value="jack-light">Light</option>
    //     <option value="jack-dark">Dark</option>
    //     <option value="jack-brown">Brown</option>
    //     <option value="jack-plum">Plum</option>
    //     <option value="jack-midnight">Midnight</option>
    //   </select>
    // </div>



