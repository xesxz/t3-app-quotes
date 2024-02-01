import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
import {CreateQuotes} from "~/app/_components/create-quotes";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
           <span className="text-[hsl(280,100%,70%)]">xesxz</span> App
        </h1>
        {/* <Link href="/about">
       <span className="decoration-1 underline">About Page</span>
        </Link> */}
        <Link href="/quotes">
       <span className="decoration-1 underline">quotes</span>
        </Link>
        {/* <Link href="/addQuotes">
       <span className="decoration-1 underline">addQuotes</span>
        </Link> */}





        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {/* {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )} */}

      <CreateQuotes />
    </div>
  );
}
