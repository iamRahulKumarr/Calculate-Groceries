'use strict';

document.querySelector('input#grocery').addEventListener('click', function () {
  document.querySelector('input#quantity').disabled = false;
});
//Grocery items

const groceries = {
  johnsons: 127.35,
  hShampoo: 77.94,
  jOil: 72.38,
  jBuds: 46.22,
  phenolClean: 89.09,
  refinedOil: 809.37,
  sensodyne: 66.32,
  vicoWSO: 98.46,
};
let totalSum = 0;

let gInput = function (inputQuantity, inputItem) {
  let totalExpense = inputItem * inputQuantity;
  // totalExpense.toFixed(2);
  return totalExpense.toFixed(2);
};

let sumFunc = function (singleSum) {
  totalSum += Number(singleSum);
  return totalSum;
};

document.querySelector('button').addEventListener('click', function () {
  let inputValue = document.querySelector('input#grocery').value;
  let inputQuantity = Number(document.querySelector('input#quantity').value);
  let inputItem = groceries[inputValue];
  document.getElementById('grocery-table').style.cssText = 'display: block';
  document.querySelector('table').style.cssText = 'display: table';
  let row = document.getElementById('body').rows.length;
  document.querySelector('tbody').innerHTML += `<tr>
    <th>${row + 1}.</th>
    <td>${inputValue}</td>
    <td>${inputQuantity}</td>
    <td>${inputItem}</td>
    <td>${gInput(inputQuantity, inputItem)}</td>
    </tr>
    `;
  sumFunc(gInput(inputQuantity, inputItem));
  document.querySelector('input#grocery').value = '';
  document.querySelector('input#quantity').value = '';
});

document.getElementById('calculate').addEventListener('click', function () {
  let inputValue = document.querySelector('input#grocery').value;
  let inputQuantity = Number(document.querySelector('input#quantity').value);
  let inputItem = groceries[inputValue];
  document.getElementById('body').innerHTML += `<tr>
  <th>Total Amount</th>
  <td></td>
  <td></td>
  <td></td>
  <th>${totalSum}</th>`;
});
//  vico wso :98.46
//  black Chana : 148.58
//  Shoe Brush : 37.37
//  white Hanki :95.70
//  Mortien coil : 24.80
//  Dettol Shaving Cream :47.59
//  Broom : 90.33
