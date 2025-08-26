"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Turnstile, { TurnstileRef } from "@/components/turnstile";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    
    if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      setSubmitMessage({ type: 'error', text: 'Turnstile is not configured. Please contact the administrator.' });
      return;
    }
    if (!turnstileToken) {
      setSubmitMessage({ type: 'error', text: 'Please complete the security verification.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        turnstileToken,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        // Reset the form and Turnstile widget after successful submission
        (e.target as HTMLFormElement).reset();
        setTurnstileToken("");
        setIsFormValid(false);
        turnstileRef.current?.reset();
      } else {
        const errorData = await response.json();
        setSubmitMessage({ type: 'error', text: errorData.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xs">
      <form className="space-y-4" onSubmit={handleFormSubmit} aria-label="Contact form">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              aria-describedby="name-error"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              aria-describedby="email-error"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            aria-describedby="subject-error"
            required
          />
        </div>
        <div className="space-y-2">
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message"
            aria-describedby="message-error"
            required
          ></Textarea>
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
            <div className="text-primary text-sm">
              Turnstile site key not configured.
            </div>
          )}
        </div>
        {submitMessage && (
          <div className={`p-3 rounded-md text-sm ${
            submitMessage.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitMessage.text}
          </div>
        )}
        <Button
          type="submit"
          className='w-full'
          disabled={isSubmitting || (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? !isFormValid : true)}
          aria-label="Submit contact form"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
