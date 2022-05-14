const delete_random_Value_Of_Array = (index) => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sizeArray = arr.length;
    let newArray = [];
    for (let i = 0; i < sizeArray - 1; i++) {
        if (i < index) {
            newArray[i] = arr[i];
            // console.log(newArray);
        } else if (i >= index) {
            newArray[i] = newArray[i] = arr[i + 1];

        }

        // console.log(newArray);
    }
    console.log(newArray);
    document.write(`Mảng sau khi xóa vị trí ${index} là : [${newArray}]`);
    return newArray;
}
// delete_random_Value_Of_Array(3,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const input_local_To_Index = () => {
    // document.write(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`);
    let a = +prompt(`Mảng hiện tại [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
  Nhập vào vị trí bạn cần xóa
  Vị trí bắt đầu từ O`);
    // a.placeholder = "Vị trí bắt đầu từ 0 nhé bro";
    let b = delete_random_Value_Of_Array(a);
}
input_local_To_Index();