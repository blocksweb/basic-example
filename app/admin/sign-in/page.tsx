"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAuth } from "@blocksweb/core/editor";
import HydrationBoundary from "@/components/hydration-boundary";

// Define all styles to avoid any globals.css dependency
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
    backgroundColor: "#ffffff",
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
    padding: "1.5rem 1.5rem 0 1.5rem",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#111827",
    margin: "0 0 0.5rem 0",
    fontFamily: "inherit",
  },
  cardDescription: {
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#6B7280",
    margin: "0.5rem 0 0 0",
    fontFamily: "inherit",
  },
  cardContent: {
    padding: "1.5rem",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  buttonIcon: {
    marginRight: "0.5rem",
    height: "1rem",
    width: "1rem",
  },
  fullWidth: {
    width: "100%",
  },
  buttonOutline: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid #e5e7eb",
    color: "#374151",
    cursor: "pointer",
    width: "100%",
    fontFamily: "inherit",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    backgroundColor: "#2563eb", // blue-600
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    width: "100%",
    height: "2.5rem",
    fontFamily: "inherit",
  },
  buttonDisabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
  dividerContainer: {
    position: "relative",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  dividerLine: {
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
  },
  separator: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e5e7eb",
  },
  dividerText: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    fontSize: "0.75rem",
    textTransform: "uppercase",
  },
  dividerSpan: {
    backgroundColor: "#ffffff",
    padding: "0 0.5rem",
    color: "#6B7280",
  },
  formLabel: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    marginBottom: "0.25rem",
    color: "#374151",
    fontFamily: "inherit",
  },
  formInput: {
    display: "block",
    width: "100%",
    borderRadius: "0.375rem",
    border: "1px solid #e5e7eb",

    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "#111827",
    backgroundColor: "#ffffff",
    fontFamily: "inherit",
  },
  formContainer: {
    padding: "0.5rem 0.75rem",
  },

  formErrorMessage: {
    fontSize: "0.75rem",
    color: "#ef4444",
    marginTop: "0.25rem",
    fontFamily: "inherit",
  },
  cardFooter: {
    padding: "0 1.5rem 1.5rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  textCenter: {
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#374151",
    margin: 0,
    fontFamily: "inherit",
  },
  link: {
    color: "#2563eb", // blue-600
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    fontFamily: "inherit",
  },
} as const;

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function LoginPage() {
  const { authenticate } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    // This would normally call your authentication API
    authenticate(values.email, values.password).then((response) => {
      if (response) {
        window.location.href = "/admin/cms/editor";
      } else {
        // Handle authentication error
        setIsLoading(false);
      }
    });
  }

  const onGoogleSignIn = () => {
    window.location.href = `https://api.blocksweb.nl/google/redirect?redirect_uri=${
      process.env.NEXT_PUBLIC_APP_URL ?? process.env.BLOCKSWEB_API_URL
    }/admin/check`;
  };
  return (
    <HydrationBoundary>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Sign in to your account</h2>
            <p style={styles.cardDescription}>
              Enter your email below to sign in to your account
            </p>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.flexColumn}>
              <div style={styles.grid}>
                <button
                  style={{
                    ...styles.buttonOutline,
                    ...(isLoading ? styles.buttonDisabled : {}),
                  }}
                  disabled={isLoading}
                  onClick={() => {}}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.buttonIcon}
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Github
                </button>
                <button
                  style={{
                    ...styles.buttonOutline,
                    ...(isLoading ? styles.buttonDisabled : {}),
                  }}
                  disabled={isLoading}
                  onClick={onGoogleSignIn}
                >
                  <svg
                    style={styles.buttonIcon}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Google
                </button>
              </div>

              <div style={styles.dividerContainer}>
                <div style={styles.dividerLine}>
                  <div style={styles.separator}></div>
                </div>
                <div style={styles.dividerText}>
                  <span style={styles.dividerSpan}>Or continue with</span>
                </div>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                style={styles.flexColumn}
              >
                <div style={styles.formContainer}>
                  <label style={styles.formLabel}>Email</label>
                  <input
                    style={styles.formInput}
                    placeholder="name@example.com"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p style={styles.formErrorMessage}>
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div style={styles.formContainer}>
                  <label style={styles.formLabel}>Password</label>
                  <input
                    style={styles.formInput}
                    type="password"
                    placeholder="••••••••"
                    {...form.register("password")}
                  />
                  {form.formState.errors.password && (
                    <p style={styles.formErrorMessage}>
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    ...styles.button,
                    ...(isLoading ? styles.buttonDisabled : {}),
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </form>
            </div>
          </div>
          <div style={styles.cardFooter}>
            <div style={styles.textCenter}>
              <a href="/auth/reset-password" style={styles.link}>
                Forgot your password?
              </a>
            </div>
            <div style={styles.textCenter}>
              Don&apos;t have an account?{" "}
              <a href="/auth/register" style={styles.link}>
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
