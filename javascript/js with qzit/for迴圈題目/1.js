const NumberList = [1, 2, 3, 4]
let NewList = []

for (let i = 0; i < NumberList.length; i++) {
    for (let j = 0; j < NumberList.length; j++) {
        for (let k = 0; k < NumberList.length; k++) {
            if (i === j || i === k || j === k) {
                continue;
            } else {
                let NewNumber = NumberList[i] * 100 + NumberList[j] * 10 + NumberList[k]
                NewList.push(NewNumber)
                console.log(NewNumber)
            }
        }
    }

}