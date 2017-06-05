'use strict';

var ma = require('makara-amdify');
var path = require('path');

module.exports = function (grunt) {
    grunt.registerTask('makara-amdify', 'Write out AMD i18n bundles', function () {
        ma.build({
            appRoot: this.options().appRoot || process.cwd(),
            writer: this.async(),
            cb: function() {}
        });
    });
};
