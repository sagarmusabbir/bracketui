import plugin from "tailwindcss/plugin";
export const customPlugin = plugin(function ({ addComponents }) {
  addComponents({
    // Base card styles
    ".card-base": {
      "@apply bg-white border-dashed  rounded-lg shadow-md overflow-hidden transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg dark:bg-black border border-gray-200 dark:border-gray-800":
        {},
    },

    // Basic variant
    ".card-basic": {
      "@apply card-base p-6": {},
      ".card-header": {
        "@apply text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4":
          {},
      },
      ".card-content": {
        "@apply text-gray-600 dark:text-gray-400": {},
      },
    },

    // Image variant
    ".card-with-image": {
      "@apply card-base flex flex-col": {},
      ".card-image-wrapper": {
        "@apply w-full aspect-video relative overflow-hidden": {},
      },
      ".card-image": {
        "@apply w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-105":
          {},
      },
      ".card-body": {
        "@apply p-6": {},
      },
      ".card-header": {
        "@apply text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4":
          {},
      },
      ".card-content": {
        "@apply text-gray-600 dark:text-gray-400": {},
      },
    },
  });
});
