"use server";
import { settings } from "@/settings/register";
import "@blocksweb/core/frontend/style.css";
import { notFound } from "next/navigation";
import { GetServerPages, ServerRenderer } from "@blocksweb/core/dist/rsc";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(context: any) {
  const page = await GetServerPages(context);

  if (!page) {
    notFound();
  }

  console.log("page found", page);

  return <ServerRenderer page={page} settings={settings} />;
}
