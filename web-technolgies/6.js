var itemsForSale = [
    { username: "cheese", price: 33 },
    { username: "tv", price: 300 },
    { username: "socks", price: 22 },
    { username: "soft toy", price: 7 },
    { username: "fridge", price: 120 },
  ];
   function formatPrice(item){
    item.price = "£" + item.price + ".00";
    return item;
   }
   var formatteditemforSale = itemsForSale.map(formatPrice);
   var result = formatteditemforSale[2].price;
   console.log(result);