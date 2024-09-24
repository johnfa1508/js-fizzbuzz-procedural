const answer = []

// Write your code below this line
for (let i = 1; i <= 15; i++) 
    {
        answer.push(FizzBuzzCheck(i))
    }

function FizzBuzzCheck(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz' 
    else if (num % 3 === 0) return 'Fizz'
    else if (num % 5 === 0) return 'Buzz'
    else return num
}

console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
