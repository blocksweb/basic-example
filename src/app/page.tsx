import { settings } from "./settings/register";
export default async function Home({ params }: { params: { slug: string[] } }) {
  return <BlockswebRenderer slug={params.slug} settings={settings} />;
}
