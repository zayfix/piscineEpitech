module.exports = {
    fizzBuzz: function (num) {
        var resultat;

        for (let i = 1; i <= num; i++) {
            if (i % 15 == 0)
                resultat = "FizzBuzz";
            else if (i % 3 == 0)
                resultat = "Fizz";
            else if (i % 5 == 0)
                resultat = "Buzz";
            else
                resultat = i;
            if(i<num)
                process.stdout.write(resultat + ', ');
            else
                process.stdout.write(resultat + '\n');
        }
    }
}

