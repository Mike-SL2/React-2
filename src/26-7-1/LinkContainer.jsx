import imgVar from './img/1st-reactApp-img.png'; 
const reactDocLink = "https://reactjs.org", goToLink = `Go to ${reactDocLink}`;
export default function LinkCon () {    
    return (
        <a
          className="App-link"
          href={reactDocLink}
          target="_blank"
          rel="noopener noreferrer"
          title={goToLink}
        >
                <img src={imgVar} alt={process.env.REACT_APP_VAR1} style={{width: "100%", height: "100%"}}/>  
        </a>
    );
}