let testRun = new Promise(function(resolve , reject){
    let apiCall = true;
    if(apiCall){
        resolve({" Status": "done"});
    }
    else{
        reject({"status": "not done"});
    }
    
});
testRun.then(function (data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Test is completed");
})