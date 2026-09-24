// TV shim for Storytime, injected into the site by TizenBrew.
//
// The site handles remote navigation itself. This only covers what a website
// can't do on its own: leaving the app from the home screen.

(function () {
  'use strict';

  // TizenBrew evaluates this in every new page context, frames included.
  if (window !== window.top || window.__storytimeTvShim) return;
  window.__storytimeTvShim = true;

  // A hook for TV-only styling, e.g. `.tizenbrew .some-mouse-only-control { display: none }`.
  document.documentElement.classList.add('tizenbrew');

  // The site deliberately leaves Back unhandled on its home page, so Back
  // there exits the app. Capture phase, so this runs before the site's own
  // Back handler can change the route underneath it. If the TV doesn't expose
  // its API to websites this does nothing, and the Home button still works.
  window.addEventListener('keydown', function (e) {
    if (e.keyCode !== 10009 || location.pathname !== '/') return;
    if (window.tizen && window.tizen.application) {
      e.preventDefault();
      window.tizen.application.getCurrentApplication().exit();
    }
  }, true);
})();
