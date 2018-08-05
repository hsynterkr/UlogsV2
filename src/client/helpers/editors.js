export function getEditorLocation(tags) {
    let location = 'editor';
    if (tags) {
      if (tags.indexOf("ulog") > -1) {
        if (tags.indexOf("ulog-ned") > -1) {
          location = 'ulog-ned';
        } else if (tags.indexOf("ulog-ned") > -1) {
          location = 'ulog-ned';
        } else {
          location = 'main-editor';
        }
      } else if (tags.indexOf("untalented") > -1) {
          location = 'untalented';
      }
    }
    return location;
}
