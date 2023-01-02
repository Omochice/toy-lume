import { SharedHead } from "./components/sharedHead.tsx"

export default ({ title, children, type }) => (
  <>
    <html lang="ja">
      <head>
        <SharedHead />
        <title>{title}</title>
        <link rel="stylesheet" href="https://esm.sh/zenn-content-css@0.1.134?css" />
        <script src="https://embed.zenn.studio/js/listen-embed-event.js" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css"
          integrity="sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  </>
);
