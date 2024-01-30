


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
    <div className={myFont.className}>
      <SortTabs sort='updatedAt'/>
      <main className=" m-auto flex h-screen max-w-screen-md flex-col space-y-4">
        {allPost.map((item, index) => {
          return (
            <div
              className="hover:bg-accent  hover:text-accent-foreground  border-border rounded-md border p-4 hover:shadow-md"
              key={index}
            >
              <h1>{item.content}</h1>
            </div>
          );
        })}
      </main>
    </div>

    //  <div>
    //   {
    //     allPost.map((item,index)=>{
    //       return (
    //         <div key={index}>
    //           <h1>{item.content}</h1>
    //         </div>
    //       )
    //     })
    //   }
    //  </div>
  );
}
