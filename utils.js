var number = function () {};
number.prototype.log = function () {
    var tab=[];
    for(var i=0; i<=100; i++) {
        tab.push(i);
     }
     return tab;
 }
exports.number = number;



var even = function () {};
even.prototype.log = function () {
    var tab=[];
   for(var i=0; i<=100; i++) {
       if (i % 2 == 0)
       tab.push(i);
    }
    return tab;
}
exports.even = even;


var odd = function (){};
odd.prototype.log = function () {
    var tab=[];
   for(var i=0; i<=100; i++) {
       if (i % 2 != 0)
       tab.push(i);
    }
    return tab;
   
}
exports.odd = odd;

