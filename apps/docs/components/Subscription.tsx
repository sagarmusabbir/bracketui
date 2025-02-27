// "use client";
// import { useState } from "react";
// import {
//   Form,
//   FormControl,
//   FormInput,
//   FormLabel,
//   FormHelperText,
//   FormErrorMessage,
//   Button,
//   Card,
// } from "@thirdbracket/bracketui";

// interface NewsletterState {
//   email: string;
//   error: string | null;
//   isSubmitting: boolean;
//   isSuccess: boolean;
// }

// const Sub = () => {
//   const [state, setState] = useState<NewsletterState>({
//     email: "",
//     error: null,
//     isSubmitting: false,
//     isSuccess: false,
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setState((prev) => ({ ...prev, isSubmitting: true, error: null }));
//     try {
//       if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
//         throw new Error("Please enter a valid email address");
//       }
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setState((prev) => ({
//         ...prev,
//         isSubmitting: false,
//         isSuccess: true,
//         email: "",
//       }));
//     } catch (error) {
//       setState((prev) => ({
//         ...prev,
//         isSubmitting: false,
//         error: error instanceof Error ? error.message : "Something went wrong",
//       }));
//     }
//   };

//   return (
//     <section className="py-20">
//       <div className="mx-auto ">
//         <Card>
//           <div>
//             {state.isSuccess ? (
//               <div className="text-center space-y-4">
//                 <div className="text-5xl mb-4">🎉</div>
//                 <h3 className="text-2xl font-bold">
//                   Thank you for subscribing!
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   We'll keep you updated with the latest news and updates.
//                 </p>
//               </div>
//             ) : (
//               <div className="space-y-8 lg:space-y-0 lg:flex lg:items-center lg:justify-between gap-8">
//                 <div className="">
//                   <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//                   <p className="text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-md  text-sm ">
//                     Subscribe to our newsletter for updates and exclusive
//                     content delivered straight to your inbox.
//                   </p>
//                 </div>

//                 <Form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
//                   <FormControl isInvalid={!!state.error}>
//                     <div className="relative">
//                       <FormLabel className="sr-only">Email address</FormLabel>
//                       <FormInput
//                         type="email"
//                         placeholder="Enter your email"
//                         value={state.email}
//                         onChange={(e) =>
//                           setState((prev) => ({
//                             ...prev,
//                             email: e.target.value,
//                           }))
//                         }
//                         className="w-full pr-32 h-[3.25rem] text-base rounded-lg"
//                         // size={4}
//                       />
//                       <div className="absolute right-2 top-1/2 -translate-y-1/2">
//                         <Button
//                           type="submit"
//                           disabled={state.isSubmitting}
//                           isLoading={state.isSubmitting}
//                           size="md"
//                         >
//                           Subscribe
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="mt-3">
//                       <FormHelperText className="text-sm text-gray-500 dark:text-gray-400">
//                         We respect your privacy. Unsubscribe at any time.
//                       </FormHelperText>
//                       {state.error && (
//                         <FormErrorMessage>{state.error}</FormErrorMessage>
//                       )}
//                     </div>
//                   </FormControl>
//                 </Form>
//               </div>
//             )}
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Sub;

"use client";
import { useState } from "react";
import { Button, Form } from "@thirdbracket/bracketui";

interface NewsletterState {
  email: string;
  error: string | null;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const Subscription = () => {
  const [state, setState] = useState<NewsletterState>({
    email: "",
    error: null,
    isSubmitting: false,
    isSuccess: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isSubmitting: true, error: null }));
    try {
      if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        throw new Error("Please enter a valid email address");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        email: "",
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      }));
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-lg p-6 md:p-8">
      {state.isSuccess ? (
        <div className="text-center space-y-4">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold">Thank you for subscribing!</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We'll keep you updated with the latest news and updates.
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
              Subscribe to our newsletter for updates and exclusive content
              delivered straight to your inbox.
            </p>
          </div>

          <div className="flex-1 max-w-lg">
            <Form onSubmit={handleSubmit}>
              <div className="relative">
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={state.email}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full pl-4 pr-32 h-[3.25rem] text-base rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button
                    type="submit"
                    disabled={state.isSubmitting}
                    isLoading={state.isSubmitting}
                    size="md"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                {state.error && (
                  <p className="text-sm text-red-500 mt-1">{state.error}</p>
                )}
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
