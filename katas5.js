// implemente aqui as funções de teste
//1- reverseString
function reverseString(test){
    if(test.includes(' ')){
     return test.split(' ').reverse().join(' ');
    }else{
        return test.split('').reverse().join('');
    }
}
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseSentence1()
function testeReverseString2(){
    let result = reverseString("Tecnologia");
    let expected = "aigolonceT";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2()
//2 - reverseSentence
function reverseSentence(teste){
    let res = teste.split(' ').reverse().join(' ')
    return res
}
function testeReverseSentence1(){
    let result = reverseSentence("Amor de fim de noite")
    let expected = "noite de fim de Amor";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseSentence1()
function testeReverseSentence2(){
    let result = reverseSentence("Pare! Você perdeu a cabeça?")
    let expected = 'cabeça? a perdeu Você Pare!'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseSentence2()
// 3 - minimumValue
function minimumValue(test){
    if(typeof(test[0]) === 'number'){
        let result = test.sort((a,b) => a - b)
        return parseInt(result[0])
    }else{
        let result = []
        for(let i = 0; i < test.length; i++){
            if(typeof(test[i]) === 'number'){
                result.push(test[i])
                let res = result.sort((a,b) => a - b)
                return res[0]
            }
        }
    }
}
function testMinimumValue1(){
    let result = minimumValue([10,-2,44,9,'0',2,32,5,'-19',30])
    let expected = -19
    console.assert(result === expected, `testeMinValue esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1()
function testMinimumValue2(){
    let result = minimumValue([3, 2,7, -5, 2])
    let expected = -5
    console.assert(result === expected, `testeMinValue esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2()
// 4 - maximumValue
function maximumValue(test){
    if(typeof(test[0]) === 'number'){
        let result = test.sort((a,b) => b - a)
        return parseInt(result[0])
    }else{
    let result = []
        for(let i = 0; i < test.length; i++){
            if(typeof(test[i]) === "number"){
                result.push(test[i])
                let res = result.sort((a,b) => a - b)
                return res[0]
            }
        }
    }
}
function testMaximumValue1(){
    let result = maximumValue([30,29,10,50,200,30])
    let expected = 200
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1()
function testMaximumValue2(){
    let result = maximumValue(['ar', -2,3,'7',2,'0',1])
    let expected = -2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue2()
// 5 - calculateRemainder
function calculateRemainder(num, divisor){
    if(typeof(num) === 'number'){
        return num % divisor
    }else{
        return 'It isn\'t a number'
    }
}
function testCalculateRemainder1(){
    let result = calculateRemainder((34), 3)
    let expected = 1
    console.assert(result === expected, `testCalculate esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1()
function testCalculateRemainder2(){
    let result = calculateRemainder(('lost'), 2)
    let expected = 'It isn\'t a number'
    console.assert(result === expected, `testCalculate esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2()
// 6 - distinctValues
function distinctValue(test){
    let res = test.split(' ')
    let result = []
    for(let i = 0; i < res.length; i++){
        if(result.includes(res[i]) === false){
            result.push(res[i])
        }
    }
    return result.join(' ')
}
function testDistinctValues1(){
    let result = distinctValue('3 3 2 4 5 10 2 -5 3')
    let expected = '3 2 4 5 10 -5'
    console.assert(result === expected, `testeDistinct esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues1()
function testDistinctValues2(){
    let result = distinctValue('2 3 2 -5')
    let expected = '2 3 -5'
    console.assert(result === expected, `testeDistinct esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues2()

// 7 - countValues
// recebo uma lista de números em string
// devo retornar o número e a quantidade de repetições
// 'numero(repetições) '
// function countValues(test){
//     let myArr = test.split(' ')

//     for (let index = 0; index < myArr.length; index++) {
//         let currentNumber = myArr[index];
//         console.log(currentNumber)
//         let count = m

//         console.log(count)
//     }
    
// }
function testCountValues1(){
    let result = countValues('3 3 2 4 5 10 2 -5 3')
    let expected = '3(3) 2(2) 4(1) 5(1) 10(1) -5(1)'
    console.assert(result === expected, `testCount esperado: ${expected}, obtido: ${result}`)
}
testCountValues1()
testCountValues1()
function testCountValues2(){
    let result = countValues()
    let expected =
    console.assert(result === expected, ` testCount esperado: ${expected}, obtido: ${result}`)
}

// 8 - evaluateExpression
function evaluateExpression(exp, obj){
}
function testEvaluateExpression1(){
    let result = countValues('a + b + c - d', {a:1, b:3, c:2,d:2})
    let expected = 4
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testEvaluateExpression2(){
    let result = countValues('a + b + c - d', {a:5, b:2, c:14,d:7})
    let expected = 14
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
