function indexNumber(arr, number) {
    let array=[];
    let result = "";
   for (let i = 0; i < arr.length; i++) {
       if(number == arr[i]){
        array.push(i);
       }
   }
   if(array != 0){
    result = `Gía trị ${number} nằm ở vị trí ${array}`
   } else {
       result = `Gia trị ${number} không nằm trong mảng`
   }
   return result
}


let arr = [11,23,11,45,67];
let number = +prompt("mảng gồm các phần tử [11,23,11,45,67] nhập số bạn muốn tìm vị trí: ");
let resultIndex = indexNumber(arr, number);
document.write(resultIndex)