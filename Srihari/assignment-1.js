
//stimulate amazon add to cart functionality




function selectproduct(Name,product,callback){
  console.log("Select a product whatever you want")
  callback(Name,product)
}
function checkproduct(Name,product,callback){
  console.log("check the all the details of a product in the description")
  callback(Name,product)
}
function addtocart(name,product){
console.log("click on the addtocart button ");
console.log(`Now your Cart contains ${product}`);
}
selectproduct("Srihari","Mobile",function(Name,product){
checkproduct(Name,product,function(Name,product){
    addtocart(Name,product)
  })
})


//stimulate hotstar/prime subscription

function account(username,password,callback){
console.log(`Account is Created Successfuly with username ${username}`)
callback(username,password)
}
function profile(username,password,callback){
console.log(`${username} Welcome to Your Profile`);
callback(username,password)
}
function clicksub(username,password,callback){
console.log("To Buy Subscription Click on Buy Subscription");
callback(username,password)
}
function selectplan(username,password,callback){
console.log("Select the plan you want monthly or yearly");
console.log("Click on Proceed to Payament");
callback(username,password)
}
function payment(username,password,callback){
console.log("The payment Successfully Enjoy your Subscrption")
callback(username,password)
}
function subscription(username,password){
console.log(`Mr. ${username} Enjoy Your Subscription...`)
}
account("srihari","hari@524",function(username,password){
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

//stimulate banking application
function card(username,pin,callback){
console.log("Insert card into the ATM machine");
console.log("Your Details is Scanning wait for a moment..");
callback(username,pin)
}
function transection(username,pin,callback){
console.log("Select the transection what would you like to do...");
console.log("Balance Enquiry");
console.log("Withdraw cash");
console.log("Change Pin");
console.log("Other");
callback(username,pin)
}
function accounttype(username,pin,callback){
console.log("select the account Type Saving or Current");
callback(username,pin)
}
function amount(username,pin,callback){
console.log("Enter the amount how much you want")
console.log("Click on confirm.");
console.log("Collect Cash From the ATM.");
callback(username,pin)
}
function done(username,pin,callback){
console.log(`${username} Please Collect Your Card......`); 
}
card("srihari","srihari@0524",function(username,pin){
  transection(username,pin,function(username,pin){
    accounttype(username,pin,function(username,pin){
      amount(username,pin,function(username,pin){
        done(username,pin);
      })
    })
  })
})