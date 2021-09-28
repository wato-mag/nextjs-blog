import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export async function getStaticProps(context){
  console.log(context)
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })
  return {
    props: {
      blog: data
    }
  }
}

export async function getStaticPaths(){
  const data = await client.get({ endpoint: "blog"})
  console.log(data)

  const paths = data.contents.map((content) => {
    return {params: { id: `${content.id}` } }
  })
  console.log(paths)
  return {paths: paths, fallback: false}
}



export default function BlogId({ blog }){
  console.log(blog)
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p className="category">{blog.category && `${blog.category.name}`}</p>
      <div className={styles.post} dangerouslySetInnerHTML={{__html: `${blog.body}`,}}
      />
    </main>
  )
}