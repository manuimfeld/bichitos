const CartTotalPrice = (cart) => {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let number = 0;
    number += cart[i].item.attributes.Precio * cart[i].cantidad;
    totalPrice += number;
  }
  return totalPrice;
};

export default CartTotalPrice;
