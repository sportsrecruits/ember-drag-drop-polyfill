/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'mobile-drag-drop', target: '2.2.0' }
    ]);
  }
};
