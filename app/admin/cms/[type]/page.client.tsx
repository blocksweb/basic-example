"use client";
import { settings } from "@/blocksweb.config";
import {
  BlockswebProvider,
  ContentPanel,
  IWorkspace,
} from "@blocksweb/core/editor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

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
