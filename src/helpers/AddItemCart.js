const AddproductCart = (product, cart, setCart) => {
  let newArr = cart.filter((cartproduct) => cartproduct.id !== product.id);
  let cartproduct = cart.find(
    (productFilter) => productFilter.id === product.id
  );

  if (cartproduct) {
    let newCartproduct = {
      ...cartproduct,
      cantidad: cartproduct.cantidad + 1,
    };
    setCart([...newArr, newCartproduct]);
  } else {
    setCart([...cart, { ...product, cantidad: 1 }]);
  }
};

export default AddproductCart;
