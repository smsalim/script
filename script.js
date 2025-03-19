// function myFunction(){
//     document.getElementById("index").innerHTML = "Welcome Coder"
// }
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

  const myDisplayer = (sum)=> {
    document.getElementById("demo").innerHTML = sum
  }

  const myCalculator = (num1, num2, myCallBack) =>{
    let sum = num1 + num2
    myCallBack(sum)
  }

  myCalculator(5, 15, myDisplayer)