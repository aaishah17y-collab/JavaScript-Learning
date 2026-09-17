function greeTester(name, callback) {
    console.log("Welcome," +name);
    callback();
}
   
greeTester("Dev",function(){
        
console.log("Let's start testing");

});
// callback with parameters

function runTest(testName ,callback){
    let status = "Pass";
    callback(testName,status);
    
}
runTest("Login Test", function (name, result){
    console.log(name +"->" + result);
})

// Sync callback -> forEach

let bugs = ["Bug1","Bug2","Bug3","Bug4"];
bugs.forEach(function(bug,i){
    console.log("Bug" +(i+1) + ":" + bug);

});
console.log("Total bugs:" +bugs.length);