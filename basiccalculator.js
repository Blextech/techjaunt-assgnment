 function calculate(valueone, valuetwo, operator){
    //  let check = true ; //want to validate 
    let result ;
if(valueone == null || valuetwo == null || operator == null || typeof valueone !== "number" ||typeof valuetwo !== "number"  ){
   return "One or two value is missing or Not the right data type";
}
   

       

  switch(operator){
      case "+" :
          result = valueone + valuetwo ;
          break;
      case "-" :
        result = valueone - valuetwo ;
        break ;  
        case "*" :
          result = valueone * valuetwo ;
          break;
      case "/" :
        result = valueone / valuetwo ;
        break ; 

     default :
           result = "Input operator is not valid";


  }

  return result ;  //returning my result

}

const assignmentresult = [calculate(5,3,'+'), calculate(7,2,'/')];  //saving the tested result in an array 

console.log(assignmentresult);
