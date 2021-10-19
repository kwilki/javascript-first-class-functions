function receivesAFunction(callback){
    return function callback(greeting){
        console.log(`${greeting} mate`)
    }
}

console.log(receivesAFunction("HI"))
