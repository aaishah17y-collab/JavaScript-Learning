//JavaScript with callback function//
console.log("Test 1: starting the test:");

setTimeout(function(){
    console.log("Test 2: API : response received");
}, 2000);

console.log("Test 3: test completed");

// Why does test 3 print before test2?//
asynchronous

