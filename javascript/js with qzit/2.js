const Num = Number(prompt('ENTER THE NUMBER'))

let Num1 = parseFloat(Num * 0.1).toFixed(2)
let Num2 = (parseFloat(Num1) + parseFloat((Num - 100000) * 0.075)).toFixed(2)
let Num3 = (parseFloat(Num2) + parseFloat((Num - 200000) * 0.05)).toFixed(2)
let Num4 = (parseFloat(Num3) + parseFloat((Num - 400000) * 0.03)).toFixed(2)
let Num5 = (parseFloat(Num4) + parseFloat((Num - 600000) * 0.015)).toFixed(2)
let Num6 = (parseFloat(Num5) + parseFloat((Num - 1000000) * 0.01)).toFixed(2)

if (Num <= Number(100000)) {
    const bouns = Number(Num1)
    console.log(bouns)
} else if (Num <= Number(200000)) {
    const bouns = Number(Num2)
    console.log(bouns)
} else if (Num <= Number(400000)) {
    const bouns = Number(Num3)
    console.log(bouns)
} else if (Num <= Number(600000)) {
    const bouns = Number(Num4)
    console.log(bouns)
} else if (Num <= Number(1000000)) {
    const bouns = Number(Num5)
    console.log(bouns)
} else if (Num > Number(1000000)) {
    const bouns = Number(Num6)
    console.log(bouns)
}