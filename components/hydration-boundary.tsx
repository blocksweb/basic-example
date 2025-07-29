import React from "react";

const HydrationBoundary = (props: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <>{props.children}</>;
};

export default HydrationBoundary;
