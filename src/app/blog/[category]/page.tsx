
// TODO
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json());

  // TODO
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}


export default function Page() {

  return (
    <div>
      blog from categories
    </div>
  )
}