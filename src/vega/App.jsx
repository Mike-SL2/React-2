import './App.css'; import {useState} from "react";
import appl from './img/appl.png';
import carrt from './img/carrt.png';
import strwbery from './img/strwbery.png';
function Avatar (prop1) {
  const {item, size, onClick} = prop1;
  return (
    <div style={{width:size}} className ="avatarWrap">      
    <img
      className ="avatar"
      style={{opacity:item.hidOpacity}}      
      src={item.imageURL}
      alt={item.fason}
      width={size} height={size} 
      onClick={onClick}
    /> 
    <h2 style={{textAlign: "center"}}>Type {item.fason}</h2>
    </div> 
  );
}
export default function Profile() {
  const minIdxLim = 0,
  [index, setIndex] = useState(minIdxLim),
  hidOpacity ='1', imageSize =412, 
  gArray = [
      {img:appl,name:"APPLE"},
      {img:carrt,name:"CARROT"},
      {img:strwbery,name:"STRAWBERRY"}],    
  maxIdxLim = gArray.length-1,
  onClkPrevBtn =() => {
    if (index>minIdxLim) {setIndex(index-1);}
  },
  onClkNextBtn =() => {
    if (index<maxIdxLim) {setIndex(index+1);}; 
  },
   testClickAvatar =(ev)=>{
    const el = ev.target, elBrdWidth = '3px solid ',  clr1 = 'green', clr2 = 'red'; 
    if (el.style.opacity!==hidOpacity) {el.style.border=elBrdWidth+clr2;el.style.opacity=hidOpacity;
    } else {el.style.border=elBrdWidth+clr1;el.style.opacity='0.2';}
  };
  return(     
    <div className ="comContainer"> 
    <div className ="imgContainer">      
      <Avatar 
        item={{imageURL:gArray[index].img, fason:gArray[index].name,hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    />  
     <div className ="navBtnContainer">        
        <button className="navBtn prevBtn" onClick={onClkPrevBtn}>PREV</button>
        <button className="navBtn nextBtn" onClick={onClkNextBtn}>NEXT</button>
     </div>   
    </div>
    </div>
  );

}