// apps/docs/components/Newsletter.tsx
"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormInput,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "@thirdbracket/bracketui";

interface NewsletterState {
  email: string;
  error: string | null;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const Newsletter = () => {
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
    <section className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto space-y-2">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Left side content */}
          <div className="flex-1">
            <h2 className="font-bold text-center text-3xl sm:text-4xl lg:text-5xl text-gray-950 dark:text-white mb-2">
              Stay in the loop
            </h2>
            <p className="text-base/7 lg:text-lg/8 text-center text-gray-500">
              Subscribe to our newsletter for updates, tips, and exclusive
              content delivered straight to your inbox.
            </p>
          </div>

          {/* Right side form */}
          <div className="flex-1 md:pt-4">
            {" "}
            {/* Added pt-4 to align with heading */}
            {state.isSuccess ? (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200">
                  Thanks for subscribing! Please check your email to confirm
                  your subscription.
                </p>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormControl isInvalid={!!state.error}>
                  <FormLabel htmlFor="email" className="sr-only">
                    Email address
                  </FormLabel>
                  <div className="relative">
                    <FormInput
                      id="email"
                      type="email"
                      value={state.email}
                      onChange={(e) =>
                        setState((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="Enter your email"
                      className="pr-32 h-12" // Increased height to match button
                      aria-label="Email address"
                      disabled={state.isSubmitting}
                    />
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
                      <Button
                        type="submit"
                        disabled={state.isSubmitting}
                        isLoading={state.isSubmitting}
                        size="md" // Changed to md for better height match
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <FormHelperText>
                    We respect your privacy. Unsubscribe at any time.
                  </FormHelperText>
                  {state.error && (
                    <FormErrorMessage>{state.error}</FormErrorMessage>
                  )}
                </FormControl>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
