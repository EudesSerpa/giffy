import { useReducer } from 'react';

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_language',
    REMOVE_FILTERS: 'remove_filters',
};

const REDUCER = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }

        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }

        case ACTIONS.UPDATE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }

        case ACTIONS.REMOVE_FILTERS:
            return {
                ...state,
                keyword: '',
                language: 'en',
                rating: 'g'
            }

        default:
            return state;
    }
}


export default function useForm ({initialKeyword = '', initialLanguage = 'en', initialRating = 'g'} = {}) {
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: initialKeyword,
        language: initialLanguage,
        rating: initialRating,
        times: 0,
    });

    const { keyword, language, rating, times } = state;


    const updateKeyword = keyword => {
        dispatch({
            type: ACTIONS.UPDATE_KEYWORD,
            payload: keyword
        });
    }

    const updateRating = rating => {
        dispatch({
            type: ACTIONS.UPDATE_RATING,
            payload: rating
        });
    }

    const updateLanguage = language => {
        dispatch({
            type: ACTIONS.UPDATE_LANGUAGE,
            payload: language
        });
    }

    const removeFilters = () => {
        dispatch({
            type: ACTIONS.REMOVE_FILTERS,
        });
    }


    return {
        keyword,
        language,
        rating,
        times,
        updateKeyword,
        updateRating,
        updateLanguage,
        removeFilters,
    };
}