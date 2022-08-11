const AddItemCart = (item, cart, setCart) => {
  let newArr = cart.filter((cartItem) => cartItem.item.id !== item.id);
  let cartItem = cart.find((itemFilter) => itemFilter.item.id === item.id);

  if (cartItem) {
    let newCartItem = {
      ...cartItem,
      cantidad: cartItem.cantidad + 1,
    };
    setCart([...newArr, newCartItem]);
  } else {
    setCart([...cart, { item, cantidad: 1 }]);
  }
};

export default AddItemCart;
