

// console.log(expenseValues);
// console.log(incomeValues);
// console.log(totalExpenseValue);
// console.log(totalIncomeValue);


angular.module('myApp', [])
.controller('myCtrl', ['$scope', function($scope) {

    // Initializing the total
    var total = 0;

    // Getting References to the necessary InputFields
    var expenseValues = document.querySelectorAll(".expense_value");
    var incomeValues = document.querySelectorAll(".income_value");
    var totalExpenseValue = document.querySelector(".expense_total_value");
    var totalIncomeValue = document.querySelector(".income_total_value");

    // Running sumOfExpenses function on every expense InputField
    $scope.ReCalculate = function(){
        expenseValues.forEach(sumOfExpenses);

        function sumOfExpenses(item, index) {
        total = total + Number(item.value);
        $scope.expense_total_value = total;
        }
    }

    $scope.ReCalculate();
    $scope.expense_total_value = total;
}]);