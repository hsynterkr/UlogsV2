export function getEditorLocation(tags) {
    let location = 'editor';
    if (tags) {
      if (tags.length === 1 && tags[0] === "ulog") {
        location = 'main-editor';
      } else if (tags.length > 1 && tags[0] === "ulog") {
        if (tags[1] === "ulog-ned") {
          location = 'ulog-ned';
        } else {
          location = 'main-editor';
        }
      }
    }
    return location;
}
