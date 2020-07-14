//...................................................
function filterNumbersArr(numbers) {

    var positiveArr = numbers.filter(function(num) {
        return num > 0;
    });

    alert(positiveArr);
}
filterNumbersArr([-1, 0, 2, 34, -2]);

//...................................................

function positiveNumber(number) {
    var newNumber = number.find(function (item) {
        return item > 0;
        
    });
    alert (newNumber);
};
positiveNumber([-2,0,-3,1,2,3]);

//....................................................


function isPalindrome(phrase) {
    var newPhrase = phrase.toLowerCase().split('').reverse().join('');

        if (phrase === newPhrase){
            return ('true');
        } else {
            return ('false');
        }
}

isPalindrome('привет');

//......................................................

function areAnagrams(a,b) {
    var newA = a.toLowerCase().split('').sort().join('');
    var newB = b.toLowerCase().split('').sort().join('');

    if (newA === newB){
        return ('true');
    } else {
        return ('false');
    }


}
areAnagrams('кот', 'отк');

//............................................................

function divideArr(a,b) {
    var newArray =[];
    while (a.length >0)
     newArray.push(a.splice(0,b));

    return(newArray);
}


divideArr([1, 2, 3, 4], 2);