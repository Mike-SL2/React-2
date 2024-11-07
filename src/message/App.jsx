import Msg from './message.jsx';
export default function msgDisp () {
    return (
        <div>
            <Msg txt="Hello, Wasya!"/>
            <Msg txt="This is a component named 'App.jsx' from 'message' directory,"/>
            <Msg txt="it uses another component named"/>
            <Msg txt="'message.jsx',"/>
            <Msg txt="which can display centered text in H1 style."/>
        </div>
            
    );
};
