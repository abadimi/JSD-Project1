var numberindise=0;

function checkarray(num1,num2){

for (var i=0;i<=num1.length-1;i++)
{
  if (num1[i]==num2){
     numberindise=1;
        }

  }
if (numberindise==1){
console.log("True");
}
else{console.log("False");
}
}


checkarray([1,2,3,7],18);