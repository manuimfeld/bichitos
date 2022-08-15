const CartTotalPrice = (cart) => {
  return cart.reduce(
    (prev, curr) => prev + curr.item.attributes.Precio * curr.cantidad,
    0
  );
};

export default CartTotalPrice;
