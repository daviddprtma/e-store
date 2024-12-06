const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};
export const CartReducer = (state, action) => {
  // debugger;
  let index = -1;
  if (action.payload)
    index = state.cartItems.findIndex((item) => item.id === action.payload.id);

  let newItem = [...state.cartItems];

  switch (action.type) {
    case "ADD":
    case "INCQTY":
      if (index > -1) {
        newItem[index].quantity++;
        // state.cartItems[index].quantity++;
      } else {
        // state.cartItems.push({ ...action.payload, quantity: 1 });
        newItem.push({ ...action.payload, quantity: 1 });
      }
      break;

    case "REMOVE":
      if (index > -1) {
        // state.cartItems.splice(index, 1);
        newItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }

      break;

    case "DECQTY":
      if (index > -1) {
        if (newItem[index].quantity > 1) {
          newItem[index].quantity--;
          // state.cartItems[index].quantity--;
        } else {
          state.cartItems.splice(index, 1);
        }
      }
      break;

    case "CLEAR":
      newItem = [];
      break;
    default:
  }
  state.cartItems = newItem;
  Storage(newItem);
  return state;
};
