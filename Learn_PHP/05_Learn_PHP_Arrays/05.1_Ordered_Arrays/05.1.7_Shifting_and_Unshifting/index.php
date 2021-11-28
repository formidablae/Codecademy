<?php
namespace Codecademy;
$record_holders = [];
// Write your code below:
array_unshift($record_holders, "Carl Lewis");
array_unshift($record_holders, "Leroy Burrell");
array_unshift($record_holders, "Donovan Bailey");
array_unshift($record_holders, "Maurice Greene");
array_unshift($record_holders, "Tim Montgomery");

array_shift($record_holders);

array_unshift($record_holders, "Asafa Powell");
array_unshift($record_holders, "Justin Gatlin");

array_shift($record_holders);

array_unshift($record_holders, "Usain Bolt");
print_r($record_holders);
