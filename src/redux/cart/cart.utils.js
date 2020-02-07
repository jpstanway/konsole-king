export const addItemToCart = (cartItems, cartItemToAdd, quantity) => {
  const cartItemExists = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantity
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const cartItemExists = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  // if only one item exists, remove it
  if (cartItemExists.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // if more than one exists, subtract from quantity
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      : cartItem
  );
};
