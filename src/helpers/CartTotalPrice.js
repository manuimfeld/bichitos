const cartTotalPrice = (cart) => {
  return cart.reduce(
    (prev, curr) => prev + curr.attributes.Precio * curr.cantidad,
    0
  );
};

export default cartTotalPrice;
