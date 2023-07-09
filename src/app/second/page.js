// "use client";
import { get } from "lodash";
import Link from "next/link";
export const revalidate = 0;
// export const dynamic = "force-dynamic";
async function getData() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Tashkent",
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData(["s"]);
  console.log(data);

  return (
    <main>
      <Link href={"/"}>first</Link>
      {get(data, "utc_datetime")}
    </main>
  );
}
