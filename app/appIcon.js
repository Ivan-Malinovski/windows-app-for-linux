const path = require('path');
const { nativeImage } = require('electron');

let icon;

// Window icon for every BrowserWindow. Without it, X11/XWayland windows that
// KDE can't match to a desktop file show the generic X logo in the title bar.
function getAppIcon() {
  if (!icon) icon = nativeImage.createFromPath(path.join(__dirname, '../assets/icons/256x256.png'));
  return icon;
}

module.exports = { getAppIcon };
