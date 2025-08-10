
    function searchProduct() {
      const products = [

        { name: "rice bag", price: "₹400 / 5kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0cINSMy5M3Y8WvIF6uzfG3SFJ5cfBA9DFQ&s" },

        { name: "sunflower oil", price: "₹150 / 900ml", image: "https://5.imimg.com/data5/SELLER/Default/2022/4/KT/MS/JZ/148540348/1-litre-freedom-refined-sunflower-oil-1000x1000.png" },

        { name: "black gram", price: "₹110 / kg", image: "https://3.imimg.com/data3/PJ/AA/MY-6842829/black-gram-whole-1000x1000.jpg" },

        { name: "red gram", price: "₹90 / kg", image: "https://m.media-amazon.com/images/I/81VIi38z2xL.SL1500.jpg" },

        { name: "ground nuts", price: "₹120 / kg", image: "https://5.imimg.com/data5/EW/EU/MY-31443385/8-500x500.jpg" },

        { name: "tomatoes", price: "₹30 / kg", image: "https://images.pexels.com/photos/3938343/pexels-photo-3938343.jpeg" },

        { name: "potatoes", price: "₹20 / kg", image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg" },

        { name: "drumstick", price: "₹30 / kg", image: "https://images.pexels.com/photos/20466259/pexels-photo-20466259.jpeg" },

        { name: "cauliflower", price: "₹35 / kg", image: "https://images.pexels.com/photos/33211281/pexels-photo-33211281.jpeg" },

        { name: "capsicum", price: "₹40 / kg", image: "https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg" },

        { name: "apple", price: "₹100 / kg", image: "https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg" },

        { name: "banana", price: "₹40 / dozen", image: "https://images.pexels.com/photos/2875814/pexels-photo-2875814.jpeg" },

        { name: "grapes", price: "₹60 / kg", image: "https://images.pexels.com/photos/24277433/pexels-photo-24277433.jpeg" },

        { name: "watermelon", price: "₹50 / each", image: "https://images.pexels.com/photos/1178652/pexels-photo-1178652.jpeg" },

        { name: "pineapple", price: "₹60 / each", image: "https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg" },

        { name: "coca-cola", price: "₹40 / bottle", image: "https://images.pexels.com/photos/17650224/pexels-photo-17650224.jpeg" },

        { name: "sprite", price: "₹35 / bottle", image: "https://images.pexels.com/photos/31332092/pexels-photo-31332092.jpeg" },

        { name: "Thumps up", price: "₹40 / bottle", image: "https://5.imimg.com/data5/SZ/IH/PE/SELLER-49520187/thums-up-tin-500x500.jpg" },

        { name: "Chocolate milkshake", price: "₹45 / bottle", image: "https://frivery.in/wp-content/uploads/2021/11/Amul-Kool-Koko-Chocolate-Milk-Tin-250ml.jpg" },

        { name: "Limca", price: "₹20 / bottle", image: "https://tse3.mm.bing.net/th/id/OIP.Z-xxQERq300zzvmjjlQq5AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

        { name: "lays", price: "₹20 / pack", image: "https://thumbs.dreamstime.com/z/lays-packet-potato-chips-isolated-white-background-94842615.jpg" },

        { name: "kurkure", price: "₹10 / pack", image: "https://apnafoodmarket.com/wp-content/uploads/2020/05/kurkure-masala.jpg" },

        { name: "Good day biscuits", price: "₹20 / pack", image: "https://kiasumart.com/wp-content/uploads/2020/01/Copy-of-90004736F-scaled.jpg" },

        { name: "Britannia cake", price: "₹40 / pack", image: "https://tse2.mm.bing.net/th/id/OIP.4_fk3lxrJY0pOL1YwqyRNQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

        { name: "Yippee", price: "₹80 / pack", image: "https://m.media-amazon.com/images/I/71Oc2RWDHkL.SL1440.jpg" },

        { name: "Cup cakes", price: "₹40 / pack", image: "https://tse3.mm.bing.net/th/id/OIP.hFSSY3tURsL99_RrRx0wuQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

        { name: "milk", price: "₹30 / 450ml", image: "https://cdn.shopify.com/s/files/1/0586/7303/7499/products/815V9EawbJL._SL1500.png?v=1655986659&width=1946" },

        { name: "curd", price: "₹40 / 500ml", image: "https://www.anikdairy.com/images/products/curd/cup/Anik-Curd_Cup-label_200g.jpg" },

        { name: "Ghee", price: "₹200 / 250ml", image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438252412/XP/XI/YR/100237673/gulab-jamun-sweet-1000x1000.jpeg" },

        { name: "Panner", price: "₹250 / 500ml", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/313205547/KR/DU/QL/45870248/1kg-fresh-paneer-1000x1000.jpg" },

        { name: "Badam milk", price: "₹30 / 200ml", image: "https://cdn.zeptonow.com/production/tr:w-250,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/1c397b02-cf8e-48ba-bfed-1af877eba9dd.jpeg" },

        { name: "butter", price: "₹45 / 100g", image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438254705/JL/CP/DG/100237673/tm-170ml-1000x1000.jpeg" }

      ];
      const query = document.getElementById('search-input').value.toLowerCase();
      const Products = document.querySelectorAll('.product-card');
      const resultDiv = document.getElementById("search-results");

      resultDiv.innerHTML = '';
      let results = [];

      Products.forEach(card => {
        const name = card.querySelector('h3').innerText.toLowerCase();
        if (name.includes(query)) {
          results.push(card.cloneNode(true));
          // results.style.padding="5px";
        }
      });

      if (results.length > 0) {
        results.forEach(card => resultDiv.appendChild(card));
      } else {
        resultDiv.innerHTML = "<h3>No results found.</h3>";
      }
    }
    
  const cart = [];

  document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to all Add to Cart and Buy Now buttons
    document.querySelectorAll(".product-card").forEach(card => {
      const title = card.querySelector("h3").innerText;
      const price = card.querySelector("p").innerText;
      const img = card.querySelector("img").src;

      const addToCartBtn = card.querySelector("button:nth-of-type(1)");
      const buyNowBtn = card.querySelector("button:nth-of-type(2)");

      addToCartBtn.addEventListener("click", () => {
        addToCart(title, price, img);
      });
      
      buyNowBtn.addEventListener("click", () => {
        addToCart(title, price, img);
        const modal = document.getElementById("cart-modal");
        // modal.innerHTML=`
        //   <button>purchse</button>
        //   <button>clear</button>
        // `;
        modal.style.display = "block";
        renderCart();
      });


      // buyNowBtn.addEventListener("click", () => {
      //   //alert(Thank you for purchasing: ${title} - ${price});
      // });
  //     buyNowBtn.addEventListener("click", () => {
  // // Clear current cart and add only this item
  //       cart.length = 0;
  //       cart.push({ name: title, price: price, image: img, qty: 1 });
      
  //       // Show cart modal with this item
  //       const modal = document.getElementById("cart-modal");
  //       modal.style.display = "block";
  //       renderCart();
  //     });
        

    });

    // Toggle cart modal
    document.querySelector(".cart-icon").addEventListener("click", () => {
      const modal = document.getElementById("cart-modal");
      modal.style.display = modal.style.display === "none" ? "block" : "none";
      renderCart();
    });
  });

  function addToCart(name, price, image) {
    // Check if item already exists, then increase quantity
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, image, qty: 1 });
    }
    //alert(${name} added to cart.);
    renderCart();
  }

  function renderCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement("li");
      li.style.marginBottom = "10px";
      li.innerHTML = `
        <div style="display:flex; align-items:center;">
          <img src="${item.image}" alt="${item.name}" style="width:40px; height:40px; margin-right:10px; border-radius: 5px;">
          <div>
            <strong>${item.name}</strong><br>
            ${item.price} * ${item.qty}
          </div>
        </div>
      `;
      cartList.appendChild(li);

      // Extract numeric value from price string like ₹90 / kg
      //const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      const numericPrice = parseFloat(item.price.match(/[\d.]+/)[0]);
      total += numericPrice * item.qty;
    });

    cartTotal.innerText = `Total: ₹${total.toFixed(2)}`;

  }
  
  
   

 