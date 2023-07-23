// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

//function getPrices();
function getPrices(taxBoolean) {

  for (i = 0; i < dishData.length; i++){
    // console.log(dishData[i]);
    
    var finalPrice;

    if (taxBoolean == true) {
      finalPrice = dishData[i].price * tax;     
    } else if (taxBoolean == false) {
      finalPrice = dishData[i].price;      
    } else {
      console.log("You need to pass a boolean to the getPrices call!")
      return;
    }

    console.log("Dish: " + dishData[i].name + " Price(incl.tax): $" + finalPrice);

  }

}

//function getDiscount();
function getDiscount(taxBoolean, guests) {

  getPrices(taxBoolean);

  if (typeof (guests) == 'number' && (guests > 0 && guests < 30)) {
    var discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5){
      discount = 10;
    }
    
    console.log('Discount is : $' + discount);

  } else {
    console.log('The second argument must be a number between 0 and 30');

  }

}

// call function getDiscount();
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount();
getDiscount('Sokouern', 50);










// function getPrices(taxBoolean) {
//   let results = [];
//   for (const product of dishData) {
//     let finalPrice;
//     if (taxBoolean) {
//       finalPrice = product.price * tax;
//     } else {
//       finalPrice = product.price;
//     }
//     results.push(`Dish: ${product.name} Price: $${finalPrice}`);
//   }
//   return results.join(' ');
// }

// function getDiscount(taxBoolean, guests) {
//   let result = getPrices(taxBoolean);
//   if (typeof guests === 'number' && (guests > 0 && guests < 30)) {
//     let discount = 0;
//     if (guests < 5) {
//       discount = 5;
//     } else if (guests >= 5) {
//       discount = 10
//     }
//     return result + ' Discount is: $' + discount;
//   } else; {
//     return result + ' The second argument must be a number between 0 and 30';
//   }
// }


// getDiscount(true, 2);
// getDiscount(false, 10);
