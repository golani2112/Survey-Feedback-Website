import React from 'react';
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return(
  
  <div style={{height:'637px'}}>
      <h1 style={{color:'#000000', textAlign:'center', marginTop:'50px'}}>Dashboard</h1>
      <div style={{color:'#000000', textAlign:'center', marginTop:'50px'}}>
        <h4>Get an appropriate feedback for your service</h4>
        <h5 style={{marginTop:'50px'}}>We charge 1 credit/email only!!</h5>
      </div>
      <div className='fixed-action-btn'>
      <Link to="/surveys/new" className="btn-floating btn-large red" style={{marginRight:'700px', marginBottom:'250px'}}>
    <i className=" material-icons">add</i>
      </Link>
      </div>
    
  </div>)
};

export default Dashboard;
