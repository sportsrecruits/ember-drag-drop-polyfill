import config from 'ember-get-config';

export function initialize(/* application */) {
  let options = config["ember-drag-drop-polyfill"] || {};

  if (typeof MobileDragDrop !== 'undefined') {
    MobileDragDrop.polyfill(options);
  }
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
