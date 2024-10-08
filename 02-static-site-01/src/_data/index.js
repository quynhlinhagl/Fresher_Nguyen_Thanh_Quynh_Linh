import about from "./about";
import linklists from "./linklists";
import banner from "./banner";
import block1 from "./block1";

export default (pagePath, config) => ({
  base: config.base,
  linklists: linklists(pagePath, config),
  about,
  banner,
  block1
});
