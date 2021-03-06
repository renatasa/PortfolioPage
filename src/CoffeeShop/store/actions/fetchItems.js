import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchItemsStart = () => {
  return {
    type: actionTypes.FETCH_ITEMS_START,
  };
};

export const fetchItemsSuccess = (items) => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items: items,
  };
};

export const fetchItemsFail = (error) => {
  return {
    type: actionTypes.FETCH_ITEMS_FAIL,
    error: error,
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsStart());
    axios
      .get(process.env.REACT_APP_API_GET_ITEMS)
      .then((response) => {
        dispatch(fetchItemsSuccess(response.data.items));
      })
      .catch((error) => {
        dispatch(fetchItemsFail(error.message));
      });
  };
};

export const addItem = (index) => {
  return {
    type: actionTypes.ADD_ITEM,
    index: index,
  };
};

export const removeItem = (index) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    index: index,
  };
};

export const submitOrderStart = () => {
  return {
    type: actionTypes.SUBMIT_ORDER_START,
  };
};

export const submitOrderSuccess = () => {
  return {
    type: actionTypes.SUBMIT_ORDER_SUCCESS,
  };
};

export const submitOrderFail = (error) => {
  return {
    type: actionTypes.SUBMIT_ORDER_FAIL,
    error: error,
  };
};

export const submitOrderSuccessFalse = () => {
  return {
    type: actionTypes.SUBMIT_ORDER_SUCCESS_FALSE,
  };
};

export const showShoppingSummaryModalAction = () => {
  return {
    type: actionTypes.SHOW_SHOPPING_SUMMARY_MODAL_ACTION,
  };
};

export const closeShoppingSummaryModalAction = () => {
  return {
    type: actionTypes.CLOSE_SHOPPING_SUMMARY_MODAL_ACTION,
  };
};

export const submitOrder = (items, totalPrice) => {
  return (dispatch) => {
    dispatch(submitOrderStart());

    let orderedItems = [];
    orderedItems = items.filter((item) => item.count > 0);

    const order = {
      items: orderedItems,
      totalPrice: totalPrice,
    };

    axios
      .post(process.env.REACT_APP_API_POST_ORDERS, order)
      .then((response) => {
        dispatch(submitOrderSuccess());
        setTimeout(() => {
          dispatch(closeShoppingSummaryModalAction());
        }, 1800);
        setTimeout(() => {
          dispatch(submitOrderSuccessFalse());
        }, 1800);
      })
      .catch((error) => {
        dispatch(submitOrderFail(error.message));
      });
  };
};
