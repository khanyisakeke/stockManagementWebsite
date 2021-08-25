
//Global Declarations
  const btnAddStock = document.getElementById("btnAddStock");
  const btnItemsShipped = document.getElementById("btnItemsShipped");
  const buyerEmailAddressArray = []; 

  btnAddStock.addEventListener("click", function(){

  //Accept the inputs from the textboxes
 let itemsReceived = document.querySelector("#itemsReceived").value;
 let itemsPrice = document.querySelector("#itemsPrice").value;
  
  let newItemQuantity = 0;
  let newProductPrice = 0;
  let firstProductList = document.getElementById("firstProductList")
  let table = document.getElementById("tableStockLevels");
   let optionIndex = firstProductList.selectedIndex; 
  /* If the user has not entered a numeric value for the items received,
  prompt them to enter a numeric value */
   if(isNaN(parseInt(itemsReceived))) {
    alert('Enter the item quantity');
   } else {
      /* If the user has not entered a numeric value for the product price,
  prompt them to enter a numeric value */
    if (isNaN(parseFloat(itemsPrice))) {
      alert('Enter the item price');
    } else {
      //Based on the option selected from the dropdown list calculate and return
     //the results of the product price and item quantity calculation
      switch(optionIndex) {
        case 1: 
          /* Get the existing item quantity for product one from the table cell and add it to
          the new item quantity that the user typed in and display it in the Stock Levels Section*/
          let productOneItemQuantity = parseInt(table.rows[0].cells[1].innerHTML);
          newItemQuantity = productOneItemQuantity + parseInt(itemsReceived);
          table.rows[0].cells[1].innerHTML = newItemQuantity;
          /* Add the price that the user entered to the price of the items already in stock, 
          than divide them by 2 to get the average price of product one, 
          and display the average price for product one in the Average Stock Price Section*/
          let productOnePrice = parseFloat(table.rows[1].cells[0].innerHTML);
          
          if (productOnePrice > 0) {
            newProductPrice = (productOnePrice + parseFloat(itemsPrice)) / 2; 
            table.rows[1].cells[0].innerHTML = newProductPrice;
          } else {
            table.rows[1].cells[0].innerHTML = itemsPrice;
          }

         
          break;
          
        case 2:
          /* Get the existing item quantity for product two from the table cell and add it to
          the new item quantity that the user typed in and display it in the Stock Levels Section*/
          let productTwoItemQuantity = parseInt(table.rows[2].cells[1].innerHTML);
          newItemQuantity = productTwoItemQuantity + parseInt(itemsReceived);
          table.rows[2].cells[1].innerHTML = newItemQuantity;
           /* Add the price that the user entered to the price of the items already in stock, 
          than divide them by 2 to get the average price of product two, 
          and display the average price for product two in the Average Stock Price Section*/
          let productTwoPrice = parseFloat(table.rows[3].cells[0].innerHTML);
          
          if (productTwoPrice > 0) {
            newProductPrice = (productTwoPrice + parseFloat(itemsPrice)) / 2; 
            table.rows[3].cells[0].innerHTML = newProductPrice;
          } else {
            table.rows[3].cells[0].innerHTML = itemsPrice;
          }

          break;
        case 3:
          /* Get the existing item quantity for product three from the table cell and add it to
          the new item quantity that the user typed in and display it in the Stock Levels Section*/
          let productThreeItemQuantity = parseInt(table.rows[4].cells[1].innerHTML);
          newItemQuantity = productThreeItemQuantity + parseInt(itemsReceived);
          table.rows[4].cells[1].innerHTML = newItemQuantity;
            /* Add the price that the user entered to the price of the items already in stock, 
          than divide them by 2 to get the average price of product three, 
          and display the average price for product three in the Average Stock Price Section*/
          let productThreePrice = parseFloat(table.rows[5].cells[0].innerHTML);
          
          if (productThreePrice > 0) {
            newProductPrice = (productThreePrice + parseFloat(itemsPrice)) / 2; 
            table.rows[5].cells[0].innerHTML = newProductPrice;
          } else {
            table.rows[5].cells[0].innerHTML = itemsPrice;
          }

          break;


        default:
        //The user has not selected any of the products and must be prompted to select a product
        alert("Select a product");
        
      }
    }
   
   }
 
});

btnItemsShipped.addEventListener("click", function(){
  //Retrieve user input from the textboxes
  let buyerEmailAddress = document.querySelector("#buyerEmailAddress").value;
  let itemsBought = document.querySelector("#itemsBought").value;
  let newItemQuantity = 0;

  let secondProductList = document.getElementById("secondProductList")
  let table = document.getElementById("tableStockLevels");
   let optionIndex = secondProductList.selectedIndex; 
  if (buyerEmailAddressArray.includes(buyerEmailAddress) === true) {
    alert("You cannot buy another product with this email address");
  
  } else {
  /* If the user has not entered a numeric value for the items bought,
  prompt them to enter a numeric value */
   if(isNaN(parseInt(itemsBought))) {
    alert('Enter the item bought');
   } else {

    switch(optionIndex) {
      case 1: 
        /* Deduct the items bought from the existing item quantity for product one from the table cell and
        and display the new stock level in the Stock Levels Section*/
      let productOneItemQuantity = parseInt(table.rows[0].cells[1].innerHTML);
      if (itemsBought > productOneItemQuantity) {
        alert('Buyer cannot buy more items than we have in stock');
      } else {

        newItemQuantity = productOneItemQuantity - itemsBought;
        table.rows[0].cells[1].innerHTML = newItemQuantity;
        //Add the buyer's email to the buyerEmailAddressArray
        buyerEmailAddressArray.push(buyerEmailAddress); 

      }
      break;
      case 2:
        /* Deduct the items bought from the existing item quantity for product one from the table cell and
        and display the new stock level in the Stock Levels Section*/
        let productTwoItemQuantity = parseInt(table.rows[2].cells[1].innerHTML);
        if (itemsBought > productTwoItemQuantity) {
          alert('Buyer cannot buy more items than we have in stock');
        } else {
  
          newItemQuantity = productTwoItemQuantity - itemsBought;
          table.rows[2].cells[1].innerHTML = newItemQuantity;
          //Add the buyer's email to the buyerEmailAddressArray
          buyerEmailAddressArray.push(buyerEmailAddress); 
        }
      break;
      case 3:
            /* Deduct the items bought from the existing item quantity for product one from the table cell and
        and display the new stock level in the Stock Levels Section*/
      let productThreeItemQuantity = parseInt(table.rows[4].cells[1].innerHTML);
      if (itemsBought > productThreeItemQuantity) {
        alert('Buyer cannot buy more items than we have in stock');
      } else {

        newItemQuantity = productThreeItemQuantity - itemsBought;
        table.rows[4].cells[1].innerHTML = newItemQuantity;
        //Add the buyer's email to the buyerEmailAddressArray
        buyerEmailAddressArray.push(buyerEmailAddress); 

      }


      break;

      default:

        //The user has not selected any of the products and must be prompted to select a product
        alert("Select a product");

    }

    
   }
    
    
  } 






  


});
