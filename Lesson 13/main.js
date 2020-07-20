

function names (array){
    var obj = array.reduce(function (result, item, index) {
        result[index] = item;
        return result;
    }, {});
    var newObj = obj

    console.log(newObj)

}

names(['Vasya','Vlad','Vadim']);



function names (array){
    var newNames = array.map(function (i,v) {
        return 'name: ' + i
    })
    console.log (newNames)
}

names(['Vasya','Vlad','Vadim']);



//..........................................................................

function time(arr) {
    function f(sum, i) {
        return sum + ':' +i
    }
    var itIsTime = arr.reduce(f, 'It\'s time ');
    console.log(itIsTime)
}
 time (['00', '13', '24'])

//...................................................................

function words(phrase) {
    var string = phrase.toLowerCase().split('');
    var wordsArray = "аеёиоуыэюя";
    var result = string.reduce( (sum, i) => {
        if (wordsArray.indexOf (i) !==-1) {
            sum++;
        }
        return sum;
    }, 0);

    console.log ("Гласных букв во фразе: "+ result);
}

words('уфшощыпамрфзгврыпаф9кцагзшзшр')


//.....................................

function countSentencesLetters(text) {

    var newText = text.split(/[!.?]/);
    var newTextArray = []
    for (var i = 0 ; i < newText.length ; i++) {
        if(newText[i]){
            newTextArray.push(newText[i]);
        }
    };
    function f(text){
        return text.replace(/[^А-Яа-яЁё]/g, " ");
    }
    f (newTextArray)
    console.log (newText)
    console.log(newTextArray)

}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');








