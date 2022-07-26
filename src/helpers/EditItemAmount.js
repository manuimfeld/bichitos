const editItemAmount = (e, cart, setCart, index) => {
  let cartArr = [...cart];
  let text = e.currentTarget.textContent;
  console.log(text);

  if (text === "-" && cartArr[index].cantidad > 1) {
    cartArr[index].cantidad -= 1;
    setCart(cartArr);
  } else if (text === "+" && cartArr[index].cantidad >= 1) {
    cartArr[index].cantidad += 1;
    setCart(cartArr);
  }
};

export default editItemAmount;
