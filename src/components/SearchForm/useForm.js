import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
  UPDATE_LANGUAGE: "update_language",
  REMOVE_FILTERS: "remove_filters",
};

const ACTIONS_REDUCER = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
  [ACTIONS.UPDATE_LANGUAGE]: (state, action) => ({
    ...state,
    language: action.payload,
  }),
  [ACTIONS.REMOVE_FILTERS]: (state) => ({
    ...state,
    keyword: "",
    language: "en",
    rating: "g",
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCER[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({
  initialKeyword = "",
  initialLanguage = "en",
  initialRating = "g",
} = {}) {
  const [{ keyword, language, rating }, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    language: initialLanguage,
    rating: initialRating,
  });

  const setKeyword = (keyword) => {
    dispatch({
      type: ACTIONS.UPDATE_KEYWORD,
      payload: keyword,
    });
  };

  const setRating = (rating) => {
    dispatch({
      type: ACTIONS.UPDATE_RATING,
      payload: rating,
    });
  };

  const setLanguage = (language) => {
    dispatch({
      type: ACTIONS.UPDATE_LANGUAGE,
      payload: language,
    });
  };

  const removeFilters = () => {
    dispatch({
      type: ACTIONS.REMOVE_FILTERS,
    });
  };

  return {
    keyword,
    language,
    rating,
    setKeyword,
    setRating,
    setLanguage,
    removeFilters,
  };
}
