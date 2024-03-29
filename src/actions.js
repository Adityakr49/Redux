export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const GET_AMOUNT = "GET_AMOUNT";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
//action creator function can be used to decrease complexity as the application grows
export const removeItem = id => {
  return { type: REMOVE, payload: { id } };
};
