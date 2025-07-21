"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Turnstile, { TurnstileRef } from "@/components/turnstile";

export default function ContactForm() {
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState(false);
  const turnstileRef = useRef<TurnstileRef>(null);

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
    setIsFormValid(true);
  };

  const handleTurnstileError = () => {
    setTurnstileToken("");
    setIsFormValid(false);
    console.log("Turnstile verification failed");
  };

  const handleTurnstileExpired = () => {
    setTurnstileToken("");
    setIsFormValid(false);
    console.log("Turnstile verification expired");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      alert("Turnstile is not configured. Please contact the administrator.");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      turnstileToken,
    };

    console.log("Form submitted with data:", data);
    // Here you would typically send the data to your backend

    // Reset the form and Turnstile widget after successful submission
    (e.target as HTMLFormElement).reset();
    setTurnstileToken("");
    setIsFormValid(false);
    turnstileRef.current?.reset();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form className="space-y-4" onSubmit={handleFormSubmit} aria-label="Contact form">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Your name"
              aria-describedby="name-error"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Your email"
              aria-describedby="email-error"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="Subject"
            aria-describedby="subject-error"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="Your message"
            aria-describedby="message-error"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
            <Turnstile
              ref={turnstileRef}
              sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              onVerify={handleTurnstileVerify}
              onError={handleTurnstileError}
              onExpired={handleTurnstileExpired}
            />
          ) : (
            <div className="text-red-500 text-sm">
              Turnstile site key not configured
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          disabled={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? !isFormValid : true}
          aria-label="Submit contact form"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
