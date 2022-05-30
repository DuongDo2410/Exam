function solveEquation(a, b) {
    let result = "";
    if(a == 0){
        if(b == 0){
            result = "Phương trình vô số nghiệm";
        } else {
            result = "Phương trình vô nghiệm";
        }
    } else {
        result = `Phương trình có nghiệm x =  ${-b/a}`;
    }
    return result;
}
let result = solveEquation(5,8);
document.write(result)