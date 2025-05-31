// "use client";

// import { FC } from "react";

// const ThemeScript: FC = () => {
//   const scriptContent = `
//     (function() {
//       try {
//         // Check if user has a stored preference
//         let theme = localStorage.getItem('theme');

//         function getSystemTheme() {
//           return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//         }

//         function setThemeClass(theme) {
//           document.documentElement.classList.remove('light', 'dark');
//           const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
//           document.documentElement.classList.add(effectiveTheme);
//         }

//         // Set initial theme
//         if (!theme) {
//           theme = 'system';
//           localStorage.setItem('theme', 'system');
//         }
//         setThemeClass(theme);

//         // Watch for system theme changes
//         const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//         mediaQuery.addEventListener('change', (e) => {
//           const currentTheme = localStorage.getItem('theme');
//           if (currentTheme === 'system') {
//             setThemeClass('system');
//           }
//         });

//         // Expose theme utilities
//         window.theme = {
//           setTheme: function(newTheme) {
//             localStorage.setItem('theme', newTheme);
//             setThemeClass(newTheme);
//             window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }));
//           },
//           getTheme: function() {
//             return localStorage.getItem('theme');
//           },
//           getSystemTheme: getSystemTheme
//         };
//       } catch (e) {
//         console.warn('Theme initialization failed:', e);
//       }
//     })();
//   `;

//   return (
//     <script
//       dangerouslySetInnerHTML={{ __html: scriptContent }}
//       key="theme-script"
//     />
//   );
// };

// export default ThemeScript;

"use client";
import { FC } from "react";

const ThemeScript: FC = () => {
  const scriptContent = `
    (function() {
      // Add this block at the very beginning to prevent flash
      try {
        const initialTheme = localStorage.getItem('theme') || 'system';
        const resolvedTheme = initialTheme === 'system' 
          ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
          : initialTheme;
        document.documentElement.classList.add(resolvedTheme);
      } catch {}

      try {
        // Check if user has a stored preference
        let theme = localStorage.getItem('theme');
        
        function getSystemTheme() {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        function setThemeClass(theme) {
          document.documentElement.classList.remove('light', 'dark');
          const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
          document.documentElement.classList.add(effectiveTheme);
        }

        // Set initial theme
        if (!theme) {
          theme = 'system';
          localStorage.setItem('theme', 'system');
        }
        setThemeClass(theme);

        // Clean up old listener before adding new one
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
          const currentTheme = localStorage.getItem('theme');
          if (currentTheme === 'system') {
            setThemeClass('system');
          }
        };
        
        // Remove any existing listeners first
        mediaQuery.removeEventListener('change', handleChange);
        // Add the new listener
        mediaQuery.addEventListener('change', handleChange);

        // Expose theme utilities
        window.theme = {
          setTheme: function(newTheme) {
            if (!['light', 'dark', 'system'].includes(newTheme)) {
              console.warn('Invalid theme value:', newTheme);
              return;
            }
            localStorage.setItem('theme', newTheme);
            setThemeClass(newTheme);
            window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }));
          },
          getTheme: function() {
            return localStorage.getItem('theme') || 'system';
          },
          getSystemTheme: getSystemTheme
        };
      } catch (e) {
        console.warn('Theme initialization failed:', e);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: scriptContent }}
      key="theme-script"
      id="theme-script"
    />
  );
};

export default ThemeScript;
