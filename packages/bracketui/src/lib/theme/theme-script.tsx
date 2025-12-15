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
      function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      function setThemeClass(theme) {
        document.documentElement.classList.remove('light', 'dark');
        const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
        document.documentElement.classList.add(effectiveTheme);
        console.log('Theme applied:', effectiveTheme, 'from:', theme);
      }

      try {
        // Get stored theme or default to system
        let theme = localStorage.getItem('theme') || 'system';
        
        // Apply initial theme immediately
        setThemeClass(theme);
        
        // Store theme if it wasn't stored before
        if (!localStorage.getItem('theme')) {
          localStorage.setItem('theme', 'system');
        }

        // Watch for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
          const currentTheme = localStorage.getItem('theme');
          if (currentTheme === 'system') {
            setThemeClass('system');
          }
        };
        
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
          getSystemTheme: getSystemTheme,
          getCurrentTheme: function() {
            const stored = localStorage.getItem('theme') || 'system';
            return stored === 'system' ? getSystemTheme() : stored;
          }
        };
        
        console.log('ThemeScript initialized. Current theme:', theme, 'Resolved:', window.theme.getCurrentTheme());
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
