var url = "https://api2.binance.com/api/v3/ticker/24hr";
var main = document.querySelector(".main");

fetch(url)
   .then(res => res.json())
   .then((output) => {
      console.log(output);
      
      for( i = 0; i < 100; i++) {
         output[i];

         var div1 = document.createElement("div");
         div1.classList.add("content");
         var span1 = document.createElement("span");
         var span2 = document.createElement("span");
         var span3 = document.createElement("span");
         var span4 = document.createElement("span");
         var span5 = document.createElement("span");
         var span6 = document.createElement("span");
         
         main.appendChild(div1);
         span1.classList.add("name");
         span1.innerText = "Name";
         span2.classList.add("data");
         span2.innerText = output[i].symbol;
         span3.classList.add("name");
         span3.innerText = "Price";
         span4.classList.add("data");
         span4.innerText = output[i].bidPrice;
         span5.classList.add("name");
         span5.innerText = "Count";
         span6.classList.add("data");
         span6.innerText = output[i].count;
         div1.append(span1, span2, span3, span4, span5, span6);
         
      }
   });