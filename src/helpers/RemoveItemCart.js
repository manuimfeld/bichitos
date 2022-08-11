const RemoveItemcart = (cart, setCart, alimento) => {
  let newArr = cart.filter((cartItem) => cartItem.item.id !== alimento.id);
  setCart([...newArr]);
};

export default RemoveItemcart;
