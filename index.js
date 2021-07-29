
function shout(string){

    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}


function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if(string === "I love you, Grandma."){
        return "I love you, too."
    }
}

// console.log(sayHiToGrandma("i love you, Grandma"))

// If the string that is passed into the function is all lowercase, the function should return "I can't hear you!"
// If the string that is passed into the function is all uppercase, the function should return "YES INDEED!"
// If the string that is passed into the function is equal to "I love you, Grandma.", the function should return "I love you, too."