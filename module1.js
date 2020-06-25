function printName(val){
    console.log(val);
}

function printHello(){
    console.log("hello World");
}

function changeVar(val){
    return val+"modified";
}

module.exports={
    printName,
    printHello,
    changeVar
};
