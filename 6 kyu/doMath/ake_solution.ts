const transformSortingAndFormat = (data) => data.sort((a, b) => {
    const formattedA = a.replace(/[^a-z]/gi, '');
    const formattedB = b.replace(/[^a-z]/gi, '');

    console.log(formattedA);
    console.log(formattedB);

    if (formattedA < formattedB) {
        return -1;
    }
    if (formattedA > formattedB) {
        return 1;
    }

    return 0;
}).map((string) => parseInt(string.replace(/[a-z]/, '')))

const magicSumIntegerByFixedOperatorOrdering = (data) => {
    let operatorIndex = 0

    const sum = data.reduce((acc, number) => {
        let newValue;

        if (operatorIndex === 0) {
            newValue = acc + number
        } else if (operatorIndex === 1) {
            newValue = acc - number
        } else if (operatorIndex === 2) {
            newValue = acc * number
        } else {
            newValue = acc / number
        }

        // console.log(newValue);

        operatorIndex++

        if (operatorIndex > 3) {
            operatorIndex = 0
        }

        return newValue
    })

    return Math.round(sum)
}

function doMath(string) {
    const arrayOfStrings = string.split(" ")
    const sortedAndFormat = transformSortingAndFormat(arrayOfStrings)

    console.log(sortedAndFormat);

    const result = magicSumIntegerByFixedOperatorOrdering(sortedAndFormat);

    console.log(result);

    return result
}



// function doMath(s){
//     let ops = [(x,y) => x+y, (x,y) => x-y, (x,y) => x*y, (x,y) => x/y],
//         i = 0,
//         r = s.split(' ')
//              .map((x, i) => ({i: i, n: +x.replace(/[a-z]/gi, ''), c: x.replace(/\d/g, '').charCodeAt(0)}))
//              .sort((x, y) => x.c-y.c || x.i-y.i)
//              .map(x => x.n)
//              .reduce((r, x) => ops[i++%4](r, x));
//     return Math.round(r);
// }

console.log(doMath("24z6 1x23 y369 89a 900b")); // 60

// console.log(doMath("1 2 3 4 5 6 7 8 9 10")); // 60