import React from "react";
import { api } from "~/trpc/server";
import localFont from "next/font/local";
import SortTabs from "~/app/_components/sort-tabs";

export const dynamic = "force-static";
const fontSTKaiti = localFont({
  variable: "--font-st-kaiti",
  src: "../fonts/STKaiti.ttf",
  fallback: ["system-ui"],
});
const myFont = localFont({ src: "../fonts/STKaiti.ttf" });

export default async function page() {
  const allPost = await api.quotes.getList.query();

  return (
    //   <SortTabs sort='updatedAt'/>

    <div
      className={`grid grid-flow-row-dense grid-cols-3 gap-4 ${myFont.className}`}
    >
      {allPost.map((item, index) => {
        return (
          <div
            key={index}
            className="hover:bg-accent hover:text-accent-foreground  border-border  col-span-1 flex items-center justify-center rounded-md border p-4 hover:shadow-md"
          >
            <h1>{item.content}</h1>
          </div>
        );
      })}
    </div>
  );
}
