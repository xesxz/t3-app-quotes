"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateQuotes() {
  const router = useRouter();
  const [content, setContent] = useState("");

  const createQuotes = api.quotes.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setContent("");
      alert("Quote created!");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createQuotes.mutate({ content });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createQuotes.isLoading}
      >
        {createQuotes.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
