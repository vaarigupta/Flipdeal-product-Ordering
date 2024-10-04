const express = require('express');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
const port = 3010;
app.use(cors());

//server-side values
let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

//Endpoint 1:
function totalCartAmount(newItemPrice, cartTotal) {
  return newItemPrice + cartTotal;
}

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  res.send(totalCartAmount(newItemPrice, cartTotal).toString());
});

//Endpoint 2:
function priceForMembershipAccount(cartTotal, isMember) {
  if (isMember === 'true') {
    cartTotal = cartTotal - 0.1 * cartTotal;
  }
  return cartTotal;
}
app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;
  res.send(priceForMembershipAccount(cartTotal, isMember).toString());
});

//Endpoint 3:
function amountAfterTaxApplied(cartTotal) {
  let tax = 0.05 * cartTotal;
  return tax;
}
app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  res.send(amountAfterTaxApplied(cartTotal).toString());
});

//Endpoint 4:
function findDeliveryTime(distance, shippingMethod) {
  let days;
  if (shippingMethod === 'express') {
    days = distance / 100;
  } else {
    days = distance / 50;
  }
  return days;
}
app.get('/estimate-delivery', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let shippingMethod = req.query.shippingMethod;
  res.send(findDeliveryTime(distance, shippingMethod).toString());
});

//Endpoint 5:
function calculateShippingCost(weight, distance) {
  let shippingCost = weight * distance * 0.1;
  return shippingCost;
}
app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  res.send(calculateShippingCost(weight, distance).toString());
});

//Endpoint 6:
function calculateLoyaltyPoint(purchaseAmount) {
  let loyaltyPoint = purchaseAmount * 2;
  return loyaltyPoint;
}
app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  res.send(calculateLoyaltyPoint(purchaseAmount).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
