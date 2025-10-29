"use client";
import { settings } from "@/blocksweb.config";
import {
  BlockswebProvider,
  ContentPanel,
  IWorkspace,
} from "@blocksweb/core/editor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useEffect } from "react";

type PageClientProps = {
  workspace: IWorkspace;
  session: string;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const PageClient = (props: PageClientProps) => {

useEffect(() => {
    // Check for OAuth token in URL parameters
    const token = searchParams?.get("token");
    const userId = searchParams?.get("user_id");

    if (token && userId) {
      console.log(" [OAuth] Token received from redirect");
      console.log(" [OAuth] User ID:", userId);

      // Store token and user_id in localStorage
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_id", userId);

      // Clean up URL by removing token parameters
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete("token");
      currentUrl.searchParams.delete("user_id");

      // Replace URL without token in browser history
      window.history.replaceState({}, "", currentUrl.toString());

      console.log(" [OAuth] Token stored, URL cleaned");
    } else {
      // Check if we have a stored token
      const storedToken = localStorage.getItem("auth_token");
      const storedUserId = localStorage.getItem("user_id");

      if (storedToken && storedUserId) {
        console.log(" [OAuth] Using stored token");
        console.log(" [OAuth] User ID:", storedUserId);
      } else {
        console.log(" [OAuth] No token found - user may need to sign in");
      }
    }
  }, [searchParams, router]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlockswebProvider settings={settings}>
        <QueryClientProvider client={queryClient}>
          <ContentPanel
            type={"editor"}
            workspace={props.workspace}
            session={props.session} settings={settings} />
        </QueryClientProvider>
      </BlockswebProvider>
    </Suspense>
  );
};

export default PageClient;
