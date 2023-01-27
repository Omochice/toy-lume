import type { ZennPageData } from "plugins/zenn-renderer/mod.ts";

export const layout = "base.tsx";

export default ({ title, children, topics, emoji }: ZennPageData) => (
  <>
    <h1>
      {title} {emoji}
    </h1>
    {(topics ?? []).map((value) => <div>{value}</div>)}
    <article className="znc">{children}</article>
  </>
);
