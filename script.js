// Part 1 Thinking Functionally
{
let array = [10,10,10,10,10]

function arraySum(arr) {
    let sum = 0
    arr.forEach(num => {
        sum += num
    });
    return sum
}

console.log(arraySum(array));
console.log("----------------");

}

{
let array = [10,10,10,10,10]

function arraySum(arr) {
    let sum = 0
    arr.forEach(num => {
        sum += num
    });
    return sum
}

let sum = arraySum(array)
let average = sum / array.length

console.log(average);
console.log("----------------");

}

{
    let array = ['Bananas','Apple','Grapes','HoneyCrisp']
    function longestStringFinder(array){
        let longestString = ''

        array.forEach(string => {
            if (string.length > longestString.length){
                longestString = string
            }
        })
        return longestString
    }
    console.log(longestStringFinder(array));
    console.log("----------------");


}

{
    let arrayOfStrings = ['Bananas','Apple','Grapes','HoneyCrisp']
    let number = 6;
    const strings = []

    function stringsLongerThan(arrayOfStrings, num){
        // arrayOfStrings.forEach(string => {
        //     if (string.length > num) {
        //         strings.push(string)
        //     }
        // })
        // return strings

        return arrayOfStrings.filter(word => word.length > number)
    }
    console.log(stringsLongerThan(arrayOfStrings, number));
    console.log("----------------");

}

{
    let i = 2

    function countUp(n){
        if (i < n){
            console.log(i);
            i++
            countUp(n)
        }
        // if (n < 1){
        //     return
        // }
        //     console.log(n);
        //     countUp(--n)
    }

    countUp(6)
    console.log("----------------");
}


{
    function countUp(n){
        if (n < 2){
            return
        }
            console.log(n);
            countUp(--n)
    }
    countUp(6)
    console.log("----------------");
}

// Part 2; Thinking Methodically

{
    data = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
        { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    ]

    // Sort the array by age.
    console.log(data.age);
    // Filter the array to remove entries with an age greater than 50.
    // Map the array to change the “occupation” key to “job” and increment every age by 1.
    // Use the reduce method to calculate the sum of the ages.
    // Then use the result to calculate the average age.
}