
// stimulate add to cart functionality with callback hell
function addToCart(user,product,callback){
    console.log("user is ",user)
    console.log("user is ",user)
    console.log("user is ",user)
    console.log("user is ",user)
    console.log("product added to cart is ",product)
    callback(user,product)
}

function checkout(user,product,callback){
    console.log("checkout for user ",user)
    console.log("checkout for user ",user)
    console.log("product to checkout is ",product)
    callback(user,product)
}

function paymentDone(user,product){
    console.log("payment done for user ",user)
    console.log("for product ",product)
}

addToCart("surya","laptop",function(u,p){
    checkout(u,p,function(u,p){
        paymentDone(u,p)
    })
})

console.log("-----------------------------------------------------------------" )

// stimulate hotstar subscription untill waatch the movie with callback hell
function subscribe(user,plan,callback){
    console.log("user is ",user)
    console.log("plan is ",plan)
    callback(user,plan)
}

function payment(user,plan,callback){
    console.log("payment done for user ",user)
    console.log("payment plan is ",plan)
    callback(user,plan)
}

function watchMovie(user,plan){
    console.log("user ",user," is watching movie with plan ",plan)
}

subscribe("surya","premium",function(u,p){
    payment(u,p,function(u,p){
        watchMovie(u,p)
    })
})


console.log("-----------------------------------------------------------------" )


// stimulate banking login to payment functionality with callback hell
function bankLogin(user,pass,callback){
    console.log("bank user is ",user)
    console.log("bank user is ",user)
    console.log("bank password is ",pass)
    callback(user,pass)

}

function transferMoney(user,pass,callback){
    console.log("transfer money for user ",user)
    console.log("using password ",pass)
    callback(user,pass)
}

function paymentDone(user,pass){
    console.log("payment done for user ",user)
}

bankLogin("surya","bank@123",function(u,p){
    transferMoney(u,p,function(u,p){
        paymentDone(u,p)
    })
})
