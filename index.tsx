import site from "././_config.ts";
import type { Data, Page } from "lume/core.ts";
import { compareDesc, fromUnixTime } from "date-fns";
import { SharedHead } from "./_includes/components/sharedHead.tsx";

export const layout = "zenn.tsx";

function comparePage(a: Page, b: Page): number {
  const defaultCreated = fromUnixTime(0);
  return compareDesc(
    a.src?.created ?? defaultCreated,
    b.src?.created ?? defaultCreated,
  );
}

const BlogPosts = () => {
  const blogPosts = site.pages
    .filter((page: Page) => page.data.type !== undefined)
    .sort(comparePage);

  return (
    <>
      <ul>
        {blogPosts.map((page) => (
          <li key={page.data.title}>
            <div className="flex">
              <div
                name="page-title"
                key={page.data.title}
                className="w-3/5 truncate"
              >
                <a
                  href={page.data.url}
                >
                  {page.data.title}
                </a>
              </div>

              <div name="page-metadata">
                {(page.data.topics ?? []).map((topic: string) => (
                  <span>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default (_data: Data) => {
  return (
    <>
      <h1>Recent posts</h1>
      <BlogPosts />
    </>
  );
};
