import DynamicServerRenderer from "@blocksweb/core-local/src/rsc/renderer";
export default async function Home({}: { params: { slug: string[] } }) {
  return <DynamicServerRenderer />;
}
