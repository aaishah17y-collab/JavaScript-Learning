function print(){
    console.log("Normal Function");

}

function placeOrder(ClippboardItem, callback){

    console.log("Hi , you order is placed");
    callback();
}
// First Way
placeOrder("Pizza", print);

// Second Way
placeOrder("Burger",function(){
    console.log("Anonymous Function")
});

// Third Way
placeOrder("Pasta",()=>{

    console.log("Arrow Functions")
}); 