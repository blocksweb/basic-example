"use server";
import { settings } from "@/settings/register";
import { IBlockswebPage, ServerRenderer } from "@blocksweb/core";
import { GetServerPages } from "@blocksweb/core";
// import "@blocksweb/core/frontend/style.css";
import { notFound } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(context: any) {
  const page = (await GetServerPages(context)) as IBlockswebPage;

  if (!page) {
    notFound();
  }

  console.log("page found", page);

  return <ServerRenderer page={page} settings={settings} />;
}
