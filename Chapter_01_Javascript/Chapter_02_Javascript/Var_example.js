var v = 10 ;
var browser ="chrome";
var browser = "firefox"; //Redecalaration is allowed in var
console.log(v);
console.log(browser);
browser = "edge"; //Reassignment is allowed in var
console.log(browser);

/* var can be redeclared and reassigned.
 It is function-scoped and can lead to unexpected behavior if not used carefully.
 */