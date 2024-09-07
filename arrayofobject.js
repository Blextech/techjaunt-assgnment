
const student = [  //Creating an array of object
    {name: "Orimadegun Hafeez", age:22, grade:220},
    {name: "Aderinoye Isnael", age:20, grade:88},
    {name: "Ganiyat Sirkay", age:28, grade:88},
    {name: "Yom Yom", age:21, grade:112},
    {name: "Christiano Ronaldo", age:24, grade:127},
    {name: "Jacuzzi Tj", age:22, grade:215},
    {name: "Opera mini", age:45, grade:205},
    {name: "wonki itomus", age:27, grade:310},
    {name: "wayne bruce", age:42, grade:67},
    {name: "teng dumb", age:18, grade:155},
    {name: "sheldon smart", age:31, grade:400},
];

const filterGrade = (grade, allstudent = student) =>{
  let  result = allstudent.filter((filt) => filt.grade == grade); //returning reuslt that only match grade 

    return result ;
}

const averageAge = (allstudent = student) =>{
 let   result = allstudent.reduce((total , num) => total + num.age, 0 ); //returning reuslt that only match grade 

 const  length = allstudent.length ; //getting the lenght of the array
   
const average = result / length ; //now dividing the array by length to get the average age in the class 
    return average ;
}



const assignmentresult = [filterGrade(88), averageAge()];  //saving the tested result in an array 
console.log(assignmentresult);


