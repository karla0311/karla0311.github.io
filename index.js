// var student_debt = document.getElementById(" student_debt_input");
// var monthly_income = document.getElementById("monthly_income");

// function start() {
//   var student_debt = readLine("How much student debt do you have?");
//   var monthly_income = readLine("What is your monthly income?");
// }

// function calculateExpenses() {
//   //var monthly_expenses=
// }
/*
function calculate_button() {
  var total_money_left = monthly_income - monthly_expenses
  var months_eliminated_debt = student_debt / total_money_left
  console.log(months_eliminated_debt + "months till eliminiated student debt")
}
*/
function calculate_button(event) {
    event.preventDefault();
    var total_debt = document.getElementById("student_debt_input").value;
    var monthly_income = document.getElementById("monthly_income").value;
    // TOPICS //
    //var topic_1 = document.getElementByID("topic1");
    // var topic_2 = document.getElementByID("topic2");
    // var topic_3 = document.getElementByID("topic3");
    // var topic_4 = document.getElementByID("topic4");
    // var topic_5 = document.getElementByID("topic5");
  
    // EXPENSES//
    var expenses_1 = document.getElementById("expenses1").value;
    // alert("expenses_1 is : " + expenses_1);
    var expenses_2 = document.getElementById("expenses2").value;
    // alert("expenses_2 is : " + expenses_2);
    var expenses_3 = document.getElementById("expenses3").value;
    // alert("expenses_3 is : " + expenses_3);
    var expenses_4 = document.getElementById("expenses4").value;
    // alert("expenses_4 is : " + expenses_4);
    var expenses_5 = document.getElementById("expenses5").value;
    // alert("expenses_5 is : " + expenses_5);
  
    if (
      isNaN(expenses_1) ||
      isNaN(expenses_2) ||
      isNaN(expenses_3) ||
      isNaN(expenses_4) ||
      isNaN(expenses_5)
    ) {
      alert("Expenses must be integers!");
      return;
    }
  
    if (expenses_1 == null) {
      expenses_1 = 0;
    }
    if (expenses_2 == null) {
      expenses_2 = 0;
    }
    if (expenses_3 == null) {
      expenses_3 = 0;
    }
    if (expenses_4 == null) {
      expenses_4 = 0;
    }
    if (expenses_5 == null) {
      expenses_5 = 0;
    }
  
    var total_expenses =
      +expenses_1 + +expenses_2 + +expenses_3 + +expenses_4 + +expenses_5;
    alert("total expenses is : " + total_expenses);
  
    var total_money_left = monthly_income - total_expenses;
    var months_eliminated_debt = total_debt / total_money_left;
    alert(
      Math.round((100*x)/10)(months_eliminated_debt) + " months till eliminated student debt!"
    );
    if (months_eliminated_debt <= 0) {
      alert("You will never eliminate your debt.");
    }
  }
  
  // document
  //   .getElementById("ourbutton")
  //   .addEventListener("click", function (event) {
  //     event.preventDefault();
  //   });
  
  // calculate_button();
  
