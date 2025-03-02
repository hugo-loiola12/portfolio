import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog do Hugo",
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
