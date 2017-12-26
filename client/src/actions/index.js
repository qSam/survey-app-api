import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () =>
  async function(dispatch) {
    const res = await axios.get('/api/currentuser');
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };

export const handleStripeToken = () =>
  async function(dispatch) {
    const res = await axios.post('/api/stripe', token);
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };
