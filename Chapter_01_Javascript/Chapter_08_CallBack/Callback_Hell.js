// Simulating an asynchronous e-commerce checkout flow
function verifyUser(userId, callback) {
    setTimeout(() => {
        console.log("User verified");
        callback(null, { id: userId, name: "Alex" });
    }, 1000);
}

function getCart(user, callback) {
    setTimeout(() => {
        console.log("Cart retrieved for " + user.name);
        callback(null, ["Laptop", "Mouse"]);
    }, 1000);
}

function processPayment(cart, callback) {
    setTimeout(() => {
        console.log("Payment processed for: ", cart);
        callback(null, { transactionId: "TXN123", status: "Success" });
    }, 1000);
}

function sendEmail(paymentStatus, callback) {
    setTimeout(() => {
        console.log("Confirmation email sent!");
        callback(null, "Email Sent Successfully");
    }, 1000);
}

// EXECUTION: Notice the deep nesting forming a pyramid shape (Callback Hell)
verifyUser(1, function(err, user) {
    if (err) {
        console.error(err);
    } else {
        getCart(user, function(err, cart) {
            if (err) {
                console.error(err);
            } else {
                processPayment(cart, function(err, paymentStatus) {
                    if (err) {
                        console.error(err);
                    } else {
                        sendEmail(paymentStatus, function(err, result) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("Checkout process complete:", result);
                            }
                        });
                    }
                });
            }
        });
    }
});
