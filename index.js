// //Question 1

// var num1 = +prompt('Choose the width of a rectangular')

// var num2 = +prompt('Choose the length of a rectangular')

// var area = num1 * num2

// var perimeter = 2 * (num1 + num2)

// console.log('Area of a Rectangle = ' + area);

// console.log('Perimeter of a Rectangle = ' + perimeter);



// //Question 2

// var num1 = +prompt('Choose the first angle of a triangle')

// var num2 = +prompt('Choose the second angle of a triangle')

// if (num1 + num2 > 180) {
//     alert('Choose the sum of two angles under 180')
// }

// else if (num1 + num2 < 180) {

//     var res = 180 - (num1 + num2)

//     console.log(res);
// }


// //Question 3

// var arr = [45, 67, 89, 23, 55, 88, 93]

// var num1 = prompt('Choose the number what you want')

// for (i of arr) {
//     console.log(i);
//     if (i==num1) {
//      console.log(`${num1} is in the array`); 
//      break
//     }else {
//         console.log(`${num1} isn't in the array`);
//     }
// }


//Question 4

var num = [678, 45, 67, 89, 23, 545, 188, 293]

var sum = 0

var count = num.length

for (i of num) {
    sum = sum + i;

   
}
console.log('Sum of the integers :', sum);
// for (i of num) {
//     var mean = sum/num.length

//     console.log('Mean of the integers :', mean);
// }
git 
// for (i of num) {
//     console.log('Length of the integers :', count);
// }

// var com = 0

// for (var i of num) { //?

    

//     if (i>100 && i<200) {
//         com++
//         console.log(com);
//     }
// }

// for (var i = 0; i<num.length; i++){
//     if (num[i]%2==0) {
//         console.log('Even numbers of the array :', num[i]);
//     }else {
//         console.log('Odd numbers of the array :', num[i]);
//     }
// }

// for (i = 0; i < num.length; i++) {
//     sum = sum + num[i];

//     var mean = sum/num.length

//     var compare = 100<num[i]<200
    

//     console.log('Some of the integers', sum);   
//     console.log('Mean of the integers', mean);
//     console.log('Length of the integers', count);
// }