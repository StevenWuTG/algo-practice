//write a function which takes in a string an returns counts of each character in the string.

const charCount = (string) => {
    var result = {}
    for (var i = 0; i < string.length; i++){
        var char = string[i]
        if (result[char] > 0){
            result[char]++
        }
        else {
            result[char] = 1
        }
    }
    return console.log(result)

}


charCount("hello") //{h:1, e:1, l:2, o:1}