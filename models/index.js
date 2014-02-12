'use strict';

var phones = require('../public/phones/phones');
var common = require('../public/js/common');


module.exports = function IndexModel() {

    var preloadlist = [0,1,2,3,4,5,6];
    var postloadlist = [7,8,9,10,11,12];

    var plist = [];
    plist = common.createPlist(phones,preloadlist);

    return {
        name: 'kraken-angular-test',
        'postloadlist' : postloadlist,
        'plist': plist
    };
};