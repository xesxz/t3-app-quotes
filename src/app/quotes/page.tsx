import React from 'react'
import { api } from "~/trpc/server";
export default async function page() {
  const allPost = await api.quotes.getList.query();




  return (


    <main className="h-screen m-auto max-w-screen-md flex flex-col space-y-4 ">

   {
    allPost.map((item,index)=>{
    return (
          <div  className="p-4  rounded-md  hover:bg-accent hover:text-accent-foreground hover:shadow-md border border-border" key={index}>
         <h1>{item.content}</h1>
          </div>
        )
    })
   }


  </main>






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
  )
}
