import React from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { useNavigate } from "react-router-dom";

import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    let navigate=useNavigate();
    const reviewFields = _.map(formFields, ({name,label})=>{
        return (
          <div key={name}>
              <label>{label}</label>
              <div>
                  {formValues[name]}
              </div>
          </div>

        )
    })
  return (
    <div style={{backgroundColor:'whitesmoke', height:'270px'}} className='container'>

        <h5 style={{textAlign:'center', marginTop:'70px', color:'DodgerBlue'}}>Please confirm your entries</h5>
        <div style={{textAlign:'center'}}>
        {reviewFields}
        </div>
        <button
         className='yellow darken-3 white-text btn-flat'
         onClick={onCancel}
         style={{marginLeft:'20px', marginTop:'10px'}}
        >
            Back
        </button>
        <button 
        className='green btn-flat right'
       
        onClick={()=>navigate('/surveys')}
        style={{marginRight:'20px', marginTop:'10px'}}
        >
            Send Survey
            <i className='material-icons right'>email</i>
        </button>
    </div>
  )
}
function mapStateToProps(state){
    
   return  {
      formValues:state.form.surveyForm.values
   }; 
}

export default connect(mapStateToProps,actions)((SurveyFormReview));