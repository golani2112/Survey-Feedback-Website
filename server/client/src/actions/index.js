import axios from 'axios';
import { values } from 'lodash';
import { FETCH_USER } from './types';

export const fetchUser=()=>
     async dispatch =>{
   const res=await axios.get('/api/current_user'); 
        dispatch({ type: FETCH_USER, payload:res.data })
    };

export const handleToken= (token)=>async dispatch=>{
     const res= await axios.post('/api/stripe',token);
     dispatch({type:FETCH_USER, payload:res.data});

};

export const submitSurvey = () => async dispatch=> {
     
     const res= await axios.post('/api/surveys', values);
     
     dispatch({ type: FETCH_USER, payload:res.data });
}