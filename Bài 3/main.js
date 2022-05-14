const checkNumberofArray = (number, arr) => {
    let sizearray = arr.length;
    for (let i = 0; i < sizearray; i++) {
        if (arr[i] === number) {
            console.log(i);
            document.write(`Vị trí ${i},`);
        }
    }
}
checkNumberofArray(5, [1, 2, 3, 4, 5, 6, 7, 5, 9, 10]);//4,7