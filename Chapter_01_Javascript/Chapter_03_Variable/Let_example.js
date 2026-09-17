let a = 10;
let retryCount = 0;
retryCount =retryCount + 1; //Reassignment is allowed in let
console.log(a);
console.log(retryCount);

/* let cannot be redeclared but can be reassigned.
 It is block-scoped and helps to avoid unexpected behavior due to variable hoisting.
 */