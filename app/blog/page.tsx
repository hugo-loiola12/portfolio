import { BlogPosts } from "app/components/posts";
import React from "react";

export const metadata = {
  title: "Blog",
  description: "Aqui só vai encontrar burrice.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Meu Blog</h1>
      <BlogPosts />
    </section>
  );
}
