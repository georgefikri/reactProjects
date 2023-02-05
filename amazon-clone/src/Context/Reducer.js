export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return {
        ...state,
        // include/ keep whatever we'd in the current basket and append to it the new item
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // Logic for removing item from basket
      // using filter
      /* return {
            ...state,
            basket: state.basket.filter((item) => item.id !== action.id),
        }; */
      // using findIndex and splice
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
