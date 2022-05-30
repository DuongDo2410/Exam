function indexNumber(arr, number) {
   for (let i = 0; i < arr.length; i++) {
       if(number == arr[i]){
            document.write(`Mảng cho trước:${arr} <br>`)
            document.write(`Vị trí của ${number} trong mảng là ${i}`)
       }
   }
}
let arr = [11,23,45,67];
let number = prompt("mảng gồm các phần tử [11,23,45,67] nhập số bạn muốn tìm vị trí: ");
indexNumber(arr, number);