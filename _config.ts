import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import windi from "lume/plugins/windi_css.ts";
import zennRenderer from "./plugins/zenn-renderer/mod.ts";
import zennKatex from "./plugins/zenn-katex/mod.ts";

const conf = Deno.env.get("MODE") === "PROD"
  ? { location: new URL("https://omochice.github.io/toy-lume") }
  : {};

const site = lume(conf);

site.use(jsx())
  .use(windi())
  .use(zennRenderer())
  .use(zennKatex());

export default site;
