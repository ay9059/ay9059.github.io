import React,{useState} from 'react';
import Btn from './Btn.js'

const Bar = () => {

    const [inputText, setInputText] = useState("");

    const change = (e) => {

        var result = "";
        for(var i=0; i<e.target.value.length; i++){
            if(i!=0){
                let num = Math.floor(Math.random() * 11); 
                console.log(num % 2);
                (num % 2 == 0) ? result+=e.target.value.charAt(i).toLowerCase() : result+=e.target.value.charAt(i).toUpperCase();
            }else{
                result+=e.target.value.charAt(i).toLowerCase();
            }
        }
        changeText(result);
    };

    const changeText = (t) => {
        setInputText(t);
    }

    return(
        <div>
        <h1 className="Result">Memeify my text {inputText} </h1>
        <input onChange={change} className="inputbar"></input>
        <Btn name={inputText}/>
        </div>
    )
}

export default Bar;