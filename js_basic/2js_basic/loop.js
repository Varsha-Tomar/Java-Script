// for loop

let myarray = ["Varsha","Khushi","Anamika","Krishna"];

for(let index =0; index < myarray.length; index++) {
    const element = myarray[index];

    console.log(element);
}

// for(let index =0; index < 10; index++) {
//     const element = index;
//     if(element == 5) {
//         console.log("5 is the best Number");
//     }
//     console.log(element);

// }

for(let i= 0; i< 10; i++) {
    // console.log(`Outer loop ${i}`);
    for(let j =0; j <10; j++) {
        // console.log(`Inner loop ${j} and inner loop ${i}`);

        // console.log(i + '*' + j +' = ' +i*j);
    }
}

// break and continue

// for(let i =1; i<=10; i++) {
    // if(i==5) {
        // console.log("detect " + i);
        // break;
    // }
    // console.log("here");
// }

for(let i =1; i<=10; i++) {
    if(i==5) {
        console.log("detect " + i);
        contiue;
    }
    console.log("here");
}
