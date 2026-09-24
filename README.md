# Storytime for TizenBrew

A TizenBrew module that opens a storytime web app full-screen on a Samsung TV and lets the remote's Play/Pause key reach it.

## Install on the TV

TizenBrew → Module Manager → **Add GitHub module** → type `kynomatix/tizenbrew-postpartum-cal`, close the keyboard, then press Up or Down to move off the field.

## How it works

This is a `mods` module, so TizenBrew loads the live site every time and injects `tv-shim.js` into it. Republishing the site on Replit is all it takes to update the TV. This repo only changes if the module itself does, and jsDelivr caches it for up to 12 hours, so pin a commit (`kynomatix/tizenbrew-postpartum-cal@<short sha>`) to test a change straight away.

`package.json` registers the Play/Pause keys, which the TV otherwise keeps to itself. Arrows, OK and Back always reach the page.

`tv-shim.js` does two small things:

- Adds a `tizenbrew` class to the page's `<html>` element, so the site can style for the TV if it ever needs to.
- Exits the app when Back is pressed on the site's home page, which is the one place the site leaves Back unhandled. This depends on the TV exposing its app API to websites; if it doesn't, Back does nothing there and the Home button leaves as usual.
