<?php
  // amounts left
  $riel = 2103942;
  $kyat = 19092;
  $krones = 109;
  $lek = 9094;

  echo "Riel left: " . $riel;
  echo "\nKyat left: " . $kyat;
  echo "\nKrones left: " . $krones;
  echo "\nLek left: " . $lek;

  // exchange rate
  $riel_to_dollar = 4077;
  $kyat_to_dollar = 1853;
  $krones_to_dollar = 8.35;
  $lek_to_dollar = 105;

  $dollars_from_riel = $riel / $riel_to_dollar;
  $dollars_from_kyat = $kyat / $kyat_to_dollar;
  $dollars_from_krones = $krones / $krones_to_dollar;
  $dollars_from_lek = $lek / $lek_to_dollar;

  // coverted to dollars
  echo "\n\nDollars from riel: " . $dollars_from_riel % 1000;
  echo "\nDollars from kyat: " . $dollars_from_kyat % 1000;
  echo "\nDollars from krones: " . $dollars_from_krones % 1000;
  echo "\nDollars from lek: " . $dollars_from_lek % 1000;

  // dollars with fees
  $dollars_with_fees = $dollars_from_riel + $dollars_from_kyat + $dollars_from_krones + $dollars_from_lek - 1 * 4;

  echo "\n\nTotal dollars with fees: " . $dollars_with_fees % 1000;
  
