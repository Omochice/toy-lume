import { SharedHead } from "./components/sharedHead.tsx";
import { ZennHeader } from "./components/zennHeader.tsx";

export default ({ title, children, type }) => (
  <>
    <html lang="ja">
      <head>
        <SharedHead />
        <ZennHeader />
        <title>{title}</title>
      </head>
      <body className="p-10">{children}</body>
    </html>
  </>
);
