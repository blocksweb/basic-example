"use client";

import HydrationBoundary from "@/components/hydration-boundary";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Define all styles
const styles = {
  fontFamily: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  container: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 16px",
    backgroundColor: "#f9fafb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  card: {
    width: "100%",
    maxWidth: "28rem",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
  },
  cardHeader: {
    padding: "2rem 1.5rem 1rem 1.5rem",
    textAlign: "center" as const,
  },
  iconContainer: {
    width: "4rem",
    height: "4rem",
    margin: "0 auto 1rem auto",
    backgroundColor: "#eff6ff",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#111827",
    margin: "0 0 0.5rem 0",
    fontFamily: "inherit",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#6B7280",
    margin: "0.5rem 0 0 0",
    fontFamily: "inherit",
  },
  cardContent: {
    padding: "1.5rem",
  },
  infoBox: {
    backgroundColor: "#f0f9ff",
    border: "1px solid #bfdbfe",
    borderRadius: "0.375rem",
    padding: "1rem",
    marginBottom: "1.5rem",
  },
  infoText: {
    fontSize: "0.875rem",
    color: "#1e40af",
    margin: 0,
    fontFamily: "inherit",
    lineHeight: "1.5",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    fontWeight: "600",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    width: "100%",
    height: "3rem",
    fontFamily: "inherit",
    transition: "background-color 0.2s",
  },
  buttonHover: {
    backgroundColor: "#1d4ed8",
  },
  cardFooter: {
    padding: "0 1.5rem 2rem 1.5rem",
  },
  textCenter: {
    textAlign: "center" as const,
    fontSize: "0.875rem",
    color: "#6B7280",
    margin: 0,
    fontFamily: "inherit",
  },
  link: {
    color: "#2563eb",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    fontFamily: "inherit",
  },
} as const;

export default function LoginPage() {
  const searchParams = useSearchParams();

  // Helper function to get redirect_uri from URL (fallback method)
  const getRedirectUriFromUrl = () => {
    if (typeof window === "undefined") return null;

    // Method 1: Try URLSearchParams directly
    const urlParams = new URLSearchParams(window.location.search);
    const fromUrlParams = urlParams.get("redirect_uri");

    console.log("🔍 [Sign In Page] URLSearchParams method:", fromUrlParams);

    // Method 2: Parse manually as backup
    const search = window.location.search;
    const match = search.match(/redirect_uri=([^&]*)/);
    const fromManual = match ? decodeURIComponent(match[1]) : null;

    console.log("🔍 [Sign In Page] Manual parse method:", fromManual);

    return fromUrlParams || fromManual;
  };

  // Debug: Log on component mount
  useEffect(() => {
    const redirectUriFromHook = searchParams?.get("redirect_uri");
    const redirectUriFromUrl = getRedirectUriFromUrl();

    console.log("====================================");
    console.log("🔍 [Sign In Page] MOUNTED");
    console.log("🔍 [Sign In Page] Full URL:", window.location.href);
    console.log(
      "🔍 [Sign In Page] window.location.origin:",
      window.location.origin
    );
    console.log(
      "🔍 [Sign In Page] window.location.pathname:",
      window.location.pathname
    );
    console.log(
      "🔍 [Sign In Page] window.location.search:",
      window.location.search
    );
    console.log(
      "🔍 [Sign In Page] window.location.hash:",
      window.location.hash
    );
    console.log(
      "🔍 [Sign In Page] useSearchParams() result:",
      redirectUriFromHook
    );
    console.log(
      "🔍 [Sign In Page] Direct URL parsing result:",
      redirectUriFromUrl
    );

    // Check sessionStorage for debugging
    const lastFrom = sessionStorage.getItem("last_redirect_from");
    const lastUri = sessionStorage.getItem("last_redirect_uri");
    const lastTime = sessionStorage.getItem("last_redirect_time");

    console.log(
      "🔍 [Sign In Page] SessionStorage - last_redirect_from:",
      lastFrom
    );
    console.log(
      "🔍 [Sign In Page] SessionStorage - last_redirect_uri:",
      lastUri
    );
    console.log(
      "🔍 [Sign In Page] SessionStorage - last_redirect_time:",
      lastTime
    );
    console.log("====================================");
  }, [searchParams]);

  const handleSignIn = () => {
    // Get the API URL and current app URL
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://cloud.blocksweb.nl";
    const appUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;

    // Try multiple methods to get redirect_uri
    const redirectUriFromHook = searchParams?.get("redirect_uri");
    const redirectUriFromUrl = getRedirectUriFromUrl();
    const redirectUri = redirectUriFromHook || redirectUriFromUrl;

    console.log("🔍 [Sign In Page] Clicking Continue");
    console.log(
      "🔍 [Sign In Page] redirectUri from hook:",
      redirectUriFromHook
    );
    console.log("🔍 [Sign In Page] redirectUri from URL:", redirectUriFromUrl);
    console.log("🔍 [Sign In Page] Final redirectUri:", redirectUri);

    // Use provided redirect_uri or default to editor
    const finalRedirectUri = redirectUri || `${appUrl}/admin/cms/editor`;

    console.log("🔍 [Sign In Page] finalRedirectUri:", finalRedirectUri);

    const targetUrl = `${apiUrl}/login?redirect_uri=${encodeURIComponent(
      finalRedirectUri
    )}`;
    console.log("🔍 [Sign In Page] Redirecting to:", targetUrl);

    // Redirect to the centralized authentication page
    // After authentication, user will be redirected back to finalRedirectUri
    window.location.href = targetUrl;
  };

  return (
    <HydrationBoundary>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.iconContainer}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>
            <h2 style={styles.cardTitle}>Sign In</h2>
            <p style={styles.cardDescription}>
              Sign in to access your Blocksweb workspace
            </p>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.infoBox}>
              <p style={styles.infoText}>
                You'll be redirected to our secure authentication service to
                sign in. After signing in, you'll be automatically brought back
                to continue.
              </p>
            </div>

            <button
              style={styles.button}
              onClick={handleSignIn}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  styles.buttonHover.backgroundColor;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  styles.button.backgroundColor;
              }}
            >
              Continue to Sign In
            </button>
          </div>
          <div style={styles.cardFooter}>
            <p style={styles.textCenter}>
              Don't have an account?{" "}
              <a
                href={`${
                  process.env.NEXT_PUBLIC_API_URL ||
                  "https://cloud.blocksweb.nl"
                }/register`}
                style={styles.link}
              >
                Create one
              </a>
            </p>
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
