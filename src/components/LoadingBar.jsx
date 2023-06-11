import React from "react";
import Router from "next/router";
import TopLoadingBar from "react-top-loading-bar";

export default function LoadingBar() {
  const [loading, setloading] = React.useState(0);

  React.useEffect(() => {
    const handleStart = () => setloading(10);
    const handleComplete = () => setloading(100);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return <TopLoadingBar color="black" progress={loading} />;
}
