function findMissingNumbers(arr) {
    let fullArr = [1,2,3,4,5,6,7,,8,9]
 
    for(let i = 0; i < arr.length; i ++) {
        for(let j = 0; j < fullArr.length; j++) {
            if(arr[i] === fullArr[j]) {
                fullArr.splice(fullArr[j],1)
            }
        }
    }
    return fullArr;
}

function 