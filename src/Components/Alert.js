import React from 'react'

function Alert(props) {

const capitalize=(word)=>{

  // // let lower = typeof word === 'string' ? arr[0].toLowerCase();
  // const lower= word.toLowerCase();
  // return lower.charAt(0).toUpperCase()+ lower.slice(1);
  return word ;
}

  return (
        
<div style={{height:'50px'}}>


{
props.alert&&
<div classNameName={`alert alert-warning ${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}   
</div>
  
}

</div>
    
  )
}

export default Alert