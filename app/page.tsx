import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Meu Portifólio
      </h1>
      <p className="mb-4">{`Olá, eu sou o hugo.`}</p>
      <Image src={"/images/hugo.webp"} alt="Hugo" width={200} height={200} />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
