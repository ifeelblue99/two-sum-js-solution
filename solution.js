
const data = [1, 5, 7, 9, 7, 3, 6, 10]

function towSum(arr, target) {
    
    const res = []
    arr.forEach((el, indx) => {
        let num = Math.abs(el-target)
        if (arr.includes(num)) {
            const numIndx = arr.indexOf(num)
            if (indx!==numIndx) {
                res.push([indx, numIndx])                
            }
        }
    });
    return res
}
// drive
console.log(towSum(data, 10))
