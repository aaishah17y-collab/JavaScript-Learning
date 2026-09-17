function cafe(item, callWhenTableisReady){
    console.log("cage is ready for your order");
    cosole.log("Your order is pizza");
    callWhenTableisReady();
}

function callWhenTableisReady(){
    console.log("Table is ready for your order");
}

cafe("Burger",callWhenTableisReady);

cafe("pizza",function(){
    console.log("Table is ready for your order");

});

cafe("Pasta",()=>{
    console.log("Table is ready for your order");
});