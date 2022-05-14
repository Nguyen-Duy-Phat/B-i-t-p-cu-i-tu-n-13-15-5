const add_Element_To_Array = (number, vtIndex) => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sizeArray = arr.length;
    let newArray = [];
    for (let i = 0; i < sizeArray; i++) {
        if (i < vtIndex) {
            newArray[i] = arr[i];
            console.log(newArray);
        }else if (i === vtIndex){
            newArray[i] = newArray[i] = number;
            console.log(newArray);
        }else {
            newArray[i] = newArray[i] = arr[i-1];
        }
    }
    console.log(newArray);
    document.write(`Mảng sau khi thêm ${number} ở vị trí ${vtIndex} là [${newArray}]`);
}
// add_Element_To_Array(11,4);
const input_local_To_Index = () => {
    // document.write(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`);
    let c = prompt(`Nhập vào số bạn cần thêm`);
    let a = +prompt(`Mảng hiện tại [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
  Nhập vào vị trí bạn cần thêm
  Vị trí bắt đầu từ O`);
    // a.placeholder = "Vị trí bắt đầu từ 0 nhé bro";
    let b = add_Element_To_Array(c,a);
    // console.log(b);
}
input_local_To_Index();