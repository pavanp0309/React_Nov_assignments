// stimulate amazon addtocart functionlites

// select a product
// check the details
// click on addtocart

function selectproduct(name,product,callback){
  console.log("Select a product whatever you want")
  console.log("name",name)
  console.log("product",product)
  callback(name,product)
}
function checkproduct(name,product,callback){
  console.log("check the all the details of a product in the description")
  console.log("name",name)
  console.log("product",product)
  callback(name,product)
}
function addtocart(name,product){
console.log("click on the addtocart button ")
  console.log("name",name)
  console.log("product",product)
}
selectproduct("ramu","tv",function(name,product){
checkproduct(name,product,function(name,product){
    addtocart(name,product)
  })
})


// simulate the hotstar subscription

// create a account
// profile
// click on subscription
// choose the plan
// make the payment
// Enjoy the subscription

function account(username,password,callback){
console.log("your account is created ")
console.log("uname",username)
console.log("password",password)
callback(username,password)
}
function profile(username,password,callback){
console.log("your profile was opend")
console.log("uname",username)
console.log("password",password)
callback(username,password)
}
function clicksub(username,password,callback){
console.log("the subscription menu has been shown ")
console.log("uname",username)
console.log("password",password)
callback(username,password)
}
function selectplan(username,password,callback){
console.log("Select the plan whatever you want monthly or yearly")
console.log("uname",username)
console.log("password",password)
callback(username,password)
}
function payment(username,password,callback){
console.log("The payment was done")
console.log("uname",username)
console.log("password",password)
callback(username,password)
}
function subscription(username,password){
console.log("After payment was done enjoy the subscription")
console.log("uname",username)
console.log("password",password)
}
account("krishna","k@1234",function(username,password){
  profile(username,password,function(username,password){
    clicksub(username,password,function(username,password){
      selectplan(username,password,function(username,password){
        payment(username,password,function(username,password){
          subscription(username,password) 
        })
      })
    })
  })
})
// banking functionalities(withdraw money)

// insert a card
// select the method 
// select the account type
// enter the amount
// enter the password
// collect the payment

function card(username,pin,callback){
console.log("insert the card in to the atm machine")
console.log("uname",username)
console.log("password",pin)
callback(username,pin)
}
function transection(username,pin,callback){
console.log("select the transection withdraw or balence enqurie")
console.log("uname",username)
console.log("password",pin)
callback(username,pin)
}
function accounttype(username,pin,callback){
console.log("select the account wether it is saving account or current account ")
console.log("uname",username)
console.log("password",pin)
callback(username,pin)
}
function amount(username,pin,callback){
console.log("Enter the amount how much you want")
console.log("uname",username)
console.log("password",pin)
callback(username,pin)
}
function password(username,pin,callback){
console.log("After enter the amount we need to enter the password")
console.log("uname",username)
console.log("password",pin)
callback(username,pin)
}
function collectamount(username,pin){
console.log("After all the transsections collect the amount")
console.log("uname",username)
console.log("password",pin)
}
card("krishna","k@1234",function(username,pin){
  transection(username,pin,function(username,pin){
    accounttype(username,pin,function(username,pin){
      amount(username,pin,function(username,pin){
        password(username,pin,function(username,pin){
          collectamount(username,pin) 
        })
      })
    })
  })
})