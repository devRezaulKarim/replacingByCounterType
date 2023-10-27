const log = console.log
//   =>Target: Take an array of random numbers, then replace the odd number by it's emmidiate even number, and vice versa.

//  *Condition - 1: Can't duplicate the eliment, if the emmidiate counter type number already exists in the reference array then jump to the next one and so on.
//  *Condition - 2: Smallest eliment of the reference array must be replaced by the smallest missing counter type number. 

// Example: reference array = [7, 22, 15, 20, 35, 40, 6]; Output array allEvenElement = [8, 22, 16, 20, 36, 40,  6]; allOddElement = [7, 23, 15, 21,  35, 41,  9]

const array = [7, 22, 15, 20, 35, 40, 6]
const array2 = [59, 99, 36, 57, 18, 8, 26, 14, 65, 76, 54, 55]

const replaceByCounter = arr => {
    let largestNum = arr[0]
    let smallestNum = arr[0]
    let oddNumbers = []
    let evenNumbers = []
    let allEvenNumbers = [...arr]
    let allOddNumbers = [...arr]

    // Finding the smallest and largest number
    for (let a = 0; a < arr.length; a++) {
        if (largestNum < arr[a]) {
            largestNum = arr[a]
        }
        else if (smallestNum > arr[a]) {
            smallestNum = arr[a]
        }
    }


    // Taking the odd and even numbers separetly from smallest to largest number
    for (let b = smallestNum; b < largestNum * 2; b++) {
        if (b % 2 === 0) {
            let found = false
            for (let c = 0; c < allOddNumbers.length; c++) {
                if (b === allOddNumbers[c]) {
                    found = true
                    break
                }
            }
            if (!found) {
                evenNumbers.push(b)
            }
        }
        else {
            let found = false
            for (let d = 0; d < allEvenNumbers.length; d++) {
                if (b === allEvenNumbers[d]) {
                    found = true
                    break
                }
            }
            if (!found) {
                oddNumbers.push(b)
            }
        }
    }

    // replacing the odd number and placing the even number
    for (let i = 0; i < arr.length; i++) {
        if (allEvenNumbers[i] % 2 !== 0) {
            for (let j = 0; j < evenNumbers.length; j++) {
                if (allEvenNumbers[i] !== evenNumbers[j] && allEvenNumbers[i] < evenNumbers[j]) {
                    allEvenNumbers[i] = evenNumbers[j]
                    evenNumbers.splice(j, 1)
                    break
                }
            }
        }
    }

    // replacing the even number and placing the odd number
    for (let e = 0; e < arr.length; e++) {
        if (allOddNumbers[e] % 2 === 0) {
            for (let f = 0; f < oddNumbers.length; f++) {
                if (allOddNumbers[e] !== oddNumbers[f] && allOddNumbers[e] < oddNumbers[f]) {
                    allOddNumbers[e] = oddNumbers[f]
                    oddNumbers.splice(f, 1)
                    break
                }
            }
        }
    }

    return { allOddNumbers, allEvenNumbers }
}

log(replaceByCounter(array))