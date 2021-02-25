
function firstLetterName(myName) {
    alert("The name " + myName + " starts with the letter " + myName[0]); 
}

function divisibleByTwo(num) {
    if (num % 2) {
        return false
    } else {
        return true
    }
}

function largestNum(arr) {
    var largestNumb;
    largestNumb = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumb) {
            largestNumb = arr[i];
        }
      }
    return (largestNumb);
}

firstLetterName('Kerven');
divisibleByTwo(8);
largestNum([1,12,56,25,81,64,33]);