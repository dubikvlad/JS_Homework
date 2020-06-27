function Animal() {
    var foodAmount = 50;

    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }



    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.animalFeed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}



function Cat(name) {
    Animal.apply(this , arguments);

    var parentAnimalFeed = this.animalFeed;
    this.animalFeed = function () {
        parentAnimalFeed();
        this.run();

    }

    this.run = function () {
        console.log('Cat is happy');

    }





}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.animalFeed());

console.log(barsik.dailyNorm(600));
console.log(barsik.animalFeed());

console.log(barsik.dailyNorm(250));
console.log(barsik.animalFeed());

barsik = null;