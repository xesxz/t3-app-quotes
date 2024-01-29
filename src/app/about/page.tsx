
import React from 'react'
import { api } from "~/trpc/server";
export default async function about() {

  const allPost = await api.post.getList.query();




  return (
   <div>
    {
      allPost.map((item,index)=>{
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        )
      })
    }
   </div>
  )
}
