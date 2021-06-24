// Connects main componeent to the Redu store,
// so that the main component obtains its state information from Redux Store for our react application

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};
