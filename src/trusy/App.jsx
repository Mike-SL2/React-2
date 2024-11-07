import './App.css';
import bikini from './img/bikini.png';
import boxer from './img/boxer.png';
import briefs from './img/briefs.png';
import hips from './img/hips.png';
import jock from './img/jock.png';
import string from './img/string.png';
import thong from './img/thong.png';
import velo from './img/velo.png';
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
  const hidOpacity ='0.2', imageSize =214, 
   testClickAvatar =(ev)=>{
    const el = ev.target, elBrdWidth = '3px solid ',  clr1 = 'green', clr2 = 'red'; 
    if (el.style.opacity===hidOpacity) {el.style.border=elBrdWidth+clr2;el.style.opacity='1';
    } else {el.style.border=elBrdWidth+clr1;el.style.opacity=hidOpacity;}
  };
  return(
    <div className ="comContainer">
      <h1>Трусишки</h1>
    <div className ="imgContainer">      
      <Avatar 
        item={{imageURL:bikini,fason:'bikini',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    />  
    <Avatar 
        item={{imageURL:boxer,fason:'boxer',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    />  
    <Avatar 
        item={{imageURL:briefs,fason:'briefs',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    /> 
    <Avatar 
        item={{imageURL:hips,fason:'hips',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    /> 
    </div>
    <div className ="imgContainer"> 
    <Avatar 
        item={{imageURL:jock,fason:'jock',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    /> 
    <Avatar 
        item={{imageURL:string,fason:'string',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    />
    <Avatar 
        item={{imageURL:thong,fason:'thong',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    /> 
    <Avatar 
        item={{imageURL:velo,fason:'velo',hidOpacity:hidOpacity}}
        size = {imageSize}
        onClick={testClickAvatar}
    />  
    </div>
    </div>
  );
}