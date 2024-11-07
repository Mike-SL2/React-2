
import LinkCont from './LinkContainer.jsx'; 
export default function imgCon () {
    return ( 
    <div style={{display: "inline-block", margin:"20px"}}>
        <LinkCont/>      
        <br/>
        <div style={{textAlign: "center"}}>{process.env.REACT_APP_VAR1}</div>
    </div>
    );
  };