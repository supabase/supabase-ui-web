// import '../styles/globals.css'
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { post } from "./../lib/fetchWrapper";
import '../styles/index.css'

function MyApp({ Component, pageProps }: any) {
  // const router = useRouter();

  // function telemetry() {
  //   return post(`https://app.supabase.com/api/telemetry/page`, {
  //     referrer: document.referrer,
  //     title: document.title,
  //   });
  // }

  // useEffect(() => {
  //   // `routeChangeComplete` won't run for the first page load unless the query string is
  //   // hydrated later on, so here we log a page view if this is the first render and
  //   // there's no query string
  //   if (!router.asPath.includes("?")) {
  //     telemetry();
  //   }
  // }, []);

  // useEffect(() => {
  //   function handleRouteChange() {
  //     telemetry();
  //   }

  //   // Listen for page changes after a navigation or when the query changes
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return <Component {...pageProps} />
}

export default MyApp
