const sortArrMax_Min = (arr) => {
    let sizearr = arr.length;
    let temp;
    for (let i = 0; i < sizearr; i++) {
        let flag = true;
        for (let j = 0; j < sizearr; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        }
        if (flag === true) {
            break;
        }
    }
}
let arr = [3, 5, -2, 14, -9, 30];
sortArrMax_Min(arr);
console.log(arr);
const sortArrMin_Max = (arr) => {
    let sizearr = arr.length;
    let temp;
    for (let i = 0; i < sizearr; i++) {
        let flag = true;
        for (let j = 0; j < sizearr; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        }
        if (flag === true) {
            break;
        }
    }
}
let arr1 = [3, 5, -2, 14, -9, 30];
sortArrMin_Max(arr1);
console.log(arr1);