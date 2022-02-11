/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author: Martijn Vermaat <martijn@vermaat.name>
 */

module.exports = function(content) {
    this.cacheable && this.cacheable();
    this.value = content;

    var array = new Array();
    for (var i = 0; i != content.length; ++i) {
        array[i] = String.fromCharCode(content[i]);
    }

    return 'module.exports = ' + JSON.stringify(array.join(''));
};

module.exports.raw = true;
