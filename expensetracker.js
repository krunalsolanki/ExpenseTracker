
//Orders sent, CustomerService, Infrastructure, Delivery Partners

console.log("Please enter duration like 'YYYY/MM' e.g. 2020/10");
console.log("Please select ExpName like Marketing,Shipping,CustomerService,Infrastructure,Delivery Partners e.g. Marketing");

var details = [
    { period: '2020/10', expName: 'Marketing', exp: 20055 },
    { period: '2021/8', expName: 'Shipping', exp: 20053 },
    { period: '2021/12', expName: 'CustomerService', exp: 45652 },
    { period: '2021/12', expName: 'Infrastructure', exp: 46732 },
    { period: '2021/12', expName: 'Delivery Partners', exp: 12342 },
    { period: '2021/12', expName: 'CustomerService', exp: 35634 }
    ];

function getExpValue(period,expName) {
    index = details.findIndex((obj) => obj.period == period && obj.expName==expName);
  if(index>-1)
  {
    var Name = details[index].expName ;
   var price = parseInt( details[index].exp );
   console.log("-------------------------------------------------------------------------------------------------");
    console.log("Hello you have selected data for " +expName + " during "+ period + ". Total expenses are " + price );
    console.log("-------------------------------------------------------------------------------------------------");
  }
  else{
      console.log("No Data found");
  }
  }

  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var duration;
var typeofExpense;
function getUserInput(n) {
    rl.question('Please provide input : ', (answer) => {
        if(n==1)
        duration=answer;
        else
        typeofExpense=answer;
        if (n < 2) {
            getUserInput(n+1);
        } else {
            rl.close();
            getExpValue(duration,typeofExpense);
        }
    }); 
}
getUserInput(1);





 
