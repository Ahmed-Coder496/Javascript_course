"use_strict"

// Nested Function in js

function perentFunc() {
    let perentFuncName = "Hen"
    function childFunc() {
        let childFuncName = "Chick"
        // console.log(perentFuncName);
    }
    // console.log(childFuncName);
    childFunc()
}
perentFunc()

// =======================================================================================================================================

// Nested if,...else in js

if (false) {
    let mobile = "vivo"
    console.log(`Your mobile is our company so how we can help you`);
    if (mobile = "vivo") {
        let mobileVersion = "v20.17.0"
        console.log(`Your mobile is ${mobile} and Your mobile version is ${mobileVersion}`);
    }
    else {
        console.log(`Your mobile need to upgrade`);
    }
    // console.log(mobileVersion);
    // console.log(mobile);
}
else {
    console.log(`Your mobile is not our company so we don't help you`);
    if(true){
        console.log(`If you can need our help so please contact our head office`);
        if(true){
            console.log(`Our head office Contact Number is 123456788`);
        }
        else{
            `Thanks you for contacting Us`
        }
    }
    else{
        console.log(`Your mobile is not our company so please dont disturb again`);
    }
}
// console.log(mobile);

// =======================================================================================================================================



// console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5)
const addTwo = function(num){
    return num + 2
}


let randi2 = ""