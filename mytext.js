function chao_mn(ten, tuoi){
    console.log("xin chao moi nguoi, minh la "+ ten.toString() + ",minh nam nay "+ tuoi.toString())
}

chao_mn("khuong","24") 
let name = "John";
var age = 30;
let isStudent = true;
age= age+5;
name1="johnny"
//console.log(name,age);
// let num = 7;
// ...
//let num = 10;
//if (num % 2 == 0){
  //  console.log("so chan")

//if (num %2 != 0){
//    console.log("so le")

//console.log("======================")
// 4) Use a for loop to print numbers from 1 to 10. 
//for (let i = 1; i< 11; i++){
 //   console.log(i)
//}
let num=31;
function kiemtraamduong(num){
if(num<0){console.log("so am")}
else if(num==0){console.log("so khong")}
else{console.log("so duong")}
}
function BMI(kg,m){
    let bmi=kg/(m*m);
    if(bmi>25){console.log("can nang beo")}
    else if(bmi<18){console.log("can nang gay")}
    else{console.log("can nang binh thuong")}
}
function phanloai(diem){
    if(diem<5){
        console.log("hoc sinh yeu")
    }
    else if(diem==5 && diem<6){
        console.log("hoc sinh trung binh")
    }
    else if(diem>6 && diem<8){
        console.log("hoc sinh kha")
    }
    else{
        console.log("hoc sinh gioi")
    }
    
}var num2=10;
var cannang=50;
var chieucao=1.50;
phanloai(num2);
BMI(cannang,chieucao);
kiemtraamduong();