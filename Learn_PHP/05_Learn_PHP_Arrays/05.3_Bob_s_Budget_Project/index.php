<?php
  
$annualExpenses = [
    "vacations" => 1000,
    "carRepairs" => 1000,    
];

$monthlyExpenses = [
    "rent" => 1500,
    "utilities" => 200,
    "healthInsurance" => 200
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

// Write your code below:
$netIncome = $incomeSegments[0][0] * $incomeSegments[0][1] + $incomeSegments[1][0] * $incomeSegments[1][1] + $incomeSegments[2][0] * $incomeSegments[2][1];

$annualIncome = $netIncome - $socialSecurity;
echo "Annual income: ". $annualIncome;

$annualIncomeAfterExpenses = $annualIncome - $annualExpenses["vacations"] - $annualExpenses["carRepairs"];
echo "\nRemaining after expenses: " . $annualIncomeAfterExpenses;

$monthlyIncome = $annualIncomeAfterExpenses / 12;
$monthlyIncomeAfterExpenses = $monthlyIncome - $monthlyExpenses["rent"] - $monthlyExpenses["utilities"] - $monthlyExpenses["healthInsurance"];
echo "\nRemaining monthly after monthly expenses: " . $monthlyIncomeAfterExpenses;

$weeklyIncome = $monthlyIncomeAfterExpenses / 4.33;
echo "\nWeekly income: ". $weeklyIncome;

$weeklyExpenses = [
    "gas" => 25,
    "food" => 90,
    "entertainment" => 47,
];
$weeklyIncomeAfterExpenses = $weeklyIncome - $weeklyExpenses["gas"] - $weeklyExpenses["food"] - $weeklyExpenses["entertainment"];
echo "\nRemaining weekly after weekly expenses: " . $weeklyIncomeAfterExpenses;

$savings = $weeklyIncomeAfterExpenses * 52;
echo "\nSavings: " . $savings;
