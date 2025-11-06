
function create(username,password,callback){
    console.log("username",username)
    console.log("password is",password)
    callback(username,password)
}


function login(username,password,callback){
    console.log("login user ",username)
    console.log("login password",password)
    callback(username,password)
}

function profile(username,password,callback){
    console.log("user profile is",username)
    console.log("password is ",password)
    callback(username,password)
}
function settings(username,password){
    console.log("user settings is ",username)
    console.log("password is ",password)
}

create("surya","1234",function(u,p){
    login(u,p,function(u,p){
        profile(u,p,function(u,p){
            settings(u,p)
        })
    })
})

// stimulate add to cart functionality with callback hell

// stimulate hotstar subscription untill waatch the movie with callback hell

// stimulate banking login to payment functionality with callback hell