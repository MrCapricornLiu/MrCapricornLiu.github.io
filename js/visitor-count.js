(() => {
  "use strict";

  // Do not count local previews or requests without the site's HTTP referrer.
  if (!/^https?:$/.test(location.protocol) || location.hostname !== "mrcapricornliu.github.io") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  document.head.appendChild(script);
})();
