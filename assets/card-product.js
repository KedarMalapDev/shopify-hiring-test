// function updateCartCount(newCount) {
//   const cartCountBubbles = document.querySelectorAll('.cart-count-bubble');
//   cartCountBubbles.forEach((bubble) => {
//     if (newCount > 0) {
//       bubble.textContent = newCount;
//       bubble.classList.remove('hidden');
//     } else {
//       bubble.classList.add('hidden');
//     }
//   });
// }

// function addToCart(button) {
//   const variantId = button.getAttribute('data-variant-id');

//   let formData = {
//     items: [
//       {
//         id: variantId,
//         quantity: 1,
//       },
//     ],
//   };

//   fetch(window.Shopify.routes.root + 'cart/add.js', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Product added to cart:', data);

//       const cartDrawer = document.querySelector('cart-drawer');
//       if (cartDrawer) {
//         cartDrawer.open();
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }
