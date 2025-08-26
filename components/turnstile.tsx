"use client";

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
      }) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

interface TurnstileProps {
  sitekey: string;
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpired?: () => void;
}

export interface TurnstileRef {
  reset: () => void;
}

const Turnstile = forwardRef<TurnstileRef, TurnstileProps>(({ sitekey, onVerify, onError, onExpired }, ref) => {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [widgetId, setWidgetId] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.reset(widgetId);
        } catch (e) {
          console.warn('Failed to reset Turnstile widget:', e);
        }
      }
    }
  }));

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const renderTurnstile = () => {
      if (window.turnstile && turnstileRef.current && !widgetId) {
        // Clear any existing content
        turnstileRef.current.innerHTML = '';

        const id = window.turnstile.render(turnstileRef.current, {
          sitekey,
          callback: onVerify,
          'error-callback': onError,
          'expired-callback': onExpired,
        });
        setWidgetId(id);
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      intervalId = setInterval(() => {
        if (window.turnstile) {
          clearInterval(intervalId);
          renderTurnstile();
        }
      }, 100);
    }

    // Cleanup function - only remove on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [onError, onExpired, onVerify, widgetId, sitekey]); // Remove callback dependencies to prevent re-rendering

  // Separate cleanup effect for component unmount
  useEffect(() => {
    return () => {
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId);
        } catch (e) {
          console.warn('Failed to remove Turnstile widget:', e);
        }
      }
    };
  }, [widgetId]);

  return <div ref={turnstileRef}></div>;
});

Turnstile.displayName = 'Turnstile';

export default Turnstile;
