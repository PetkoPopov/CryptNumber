function convertToBinari(num) {
    let curNum
    let numArr = []

    curNum = Number(num)

    numArr.push(1)
    while (curNum != 0) {
        numArr.push(curNum % 2)
        // numArr.push(curNum % 2)
        // numArr.push(curNum % 2)
        curNum = Math.floor(curNum / 2)
    }
    numArr.push(1)
    return numArr
}
function convertToDecimal(bin) {

    // bin =[ 1 , 1 , 1 , 0 , 1 ]
    //        0   1   2   3   4 
    let dex = 0
    for (let index = 0; index < bin.length; index++) {
        dex += bin[bin.length - index - 1] * Math.pow(2, index)
    }
    return dex
}
export {
    convertToBinari,
    convertToDecimal,
    
}

