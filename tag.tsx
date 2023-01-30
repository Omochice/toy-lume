import { Data } from "lume/core.ts";
import { getPosts, getTags } from "./posts.ts";
import { BlogPosts } from "./index.tsx";

export default function* (): Generator<Data> {
  const tags = getTags();
  console.log(tags);
  for (const tag of getTags()) {
    const title = `#${tag}`;
    const posts = getPosts(tag);

    yield {
      url: "/tag/" + tag,
      title,
      tag,
      layout: "base.tsx",
      content: () => (
        <>
          <BlogPosts posts={posts} />
        </>
      ),
    };
  }
}
