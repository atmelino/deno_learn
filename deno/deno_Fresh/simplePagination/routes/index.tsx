import { Head } from "$fresh/runtime.ts";
import Body from "../islands/Body.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>simplePagination</title>
      </Head>
      <Body />
    </>
  );
}