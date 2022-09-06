const removeItemcart = (product, cart, setCart) => {
  let newArr = cart.filter((cartItem) => cartItem.id !== product.id);
  setCart([...newArr]);
};

export default removeItemcart;
