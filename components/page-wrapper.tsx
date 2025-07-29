"use client";

import React, { PropsWithChildren, useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { settings } from "@/blocksweb.config";
// Import directly from source
// Initialize collections
import { BlockswebProvider } from "@blocksweb/core/editor";
import { initializeCollections } from "@/lib/initialize-collections";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// Initialize collections with the query client
initializeCollections(queryClient);

function InnerWrapper({ children }: PropsWithChildren<{}>) {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Ensure collections are initialized with the current query client
    initializeCollections(queryClient);
  }, [queryClient]);

  return (
    <BlockswebProvider settings={settings}>{children as any}</BlockswebProvider>
  );
}

export default function PageWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerWrapper>{children as any}</InnerWrapper>
    </QueryClientProvider>
  );
}
