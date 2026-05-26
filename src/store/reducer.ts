import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import {fetchOffers} from './api-actions';
import {Offer} from '../types/offer';

type State = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
};

const initialState: State = {
  city: 'Paris',
  offers: [],
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    });
});

export {reducer};
