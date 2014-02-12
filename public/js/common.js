/**
 * Created by prbhad on 2/6/14.
 */


exports.createPlist =  function(phones, list) {
    var plist = [];
    for(var i=0;i<list.length;i++) {
        plist[i] = phones[i];
    }
    return plist;
}
