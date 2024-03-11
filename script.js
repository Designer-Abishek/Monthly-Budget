var expenseValues = document.querySelectorAll(".expense_value");
var incomeValues = document.querySelectorAll(".income_value");

var totalExpenseValue = document.querySelector(".expense_total_value");
var totalIncomeValue = document.querySelector(".income_total_value");

// console.log(expenseValues);
// console.log(incomeValues);
// console.log(totalExpenseValue);
// console.log(totalIncomeValue);

var total = 0;

expenseValues.forEach(sumOfExpenses);

function sumOfExpenses(item, index) {
    total = total + Number(item.value);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.expense_total_value = total;
});