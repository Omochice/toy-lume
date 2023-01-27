import site from "././_config.ts";
import type { Data, Page } from "lume/core.ts";
import { compareDesc, fromUnixTime } from "date-fns";
import { SharedHead } from "./_includes/components/sharedHead.tsx";

export const layout = "base.tsx";

function comparePage(a: Page, b: Page): number {
  const defaultCreated = fromUnixTime(0);
  return compareDesc(
    a.src?.created ?? defaultCreated,
    b.src?.created ?? defaultCreated,
  );
}

function joinURL(to: string): string {
  const n = new URL(to.replace(/^\//, "./"), site.options.location)
  return n.href
}

const BlogPosts = () => {
  const blogPosts = site.pages
    .filter((page: Page) => page.data.type !== undefined)
    .sort(comparePage);

  return (
    <>
      <ul className="leading-relaxed">
        {blogPosts.map((page) => (
          <li key={page.data.title}>
            <div className="flex">
              <div
                name="page-title"
                key={page.data.title}
                className="w-3/5 truncate"
              >
                <a
                  href={joinURL(page.data.url)}
                  className="text-blue-500 cursor-pointer"
                >
                  {page.data.title}
                </a>
              </div>

              <div name="page-metadata" className="flex gap-1">
                {(page.data.topics ?? []).filter(e => e.length !== 0).map((topic: string) => (
                  <a className="bg-gray-300 rounded px-2 font-mono h-11/12 cursor-pointer">{topic.toLowerCase()}</a>
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
      <h1 className="text-6xl leading-normal">Recent posts</h1>
      <BlogPosts />
    </>
  );
};
