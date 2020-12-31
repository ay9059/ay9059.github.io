import React,{useState} from 'react'; 



const Btn = (props) => {

    const [v,setv] = useState("");
    const c = () => {
        setv(props.name);
        let result = "";


    

      for(var i=0; i<v.length; i++){
            console.log(v.length)
            let num = Math.random();
            console.log(v.charAt(i));
            (num % 2 === 0) ? result+=v.charAt(i).toUpperCase() : result+=v.charAt(i).toLowerCase();
        }
       
        
        console.log(result.toUpperCase());
        
       
    }



    return(
        <div>
        <button onClick={c}>Flip it</button>
        <p>{v}</p>
        </div>
        
    );
}

export default Btn;