export const Add = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};

export const Remove = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};
