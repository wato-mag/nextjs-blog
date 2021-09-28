import Link from "next/link";
import { client } from "../libs/client";

export default function Home({blog}){
  console.log(blog);
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(){
  const data = await client.get({ endpoint: "blog"});

  return {
    props: {
      blog: data.contents
    },
  };
};
