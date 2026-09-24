// TV shim for Storytime, injected into the site by TizenBrew.
//
// The site handles remote navigation itself, so there's little to do here.
// TizenBrew requires a script for this kind of module; this one just adds a
// hook for TV-only styling.

(function () {
  'use strict';

  // TizenBrew evaluates this in every new page context, frames included.
  if (window !== window.top) return;

  // e.g. `.tizenbrew .some-mouse-only-control { display: none }`
  document.documentElement.classList.add('tizenbrew');
})();
