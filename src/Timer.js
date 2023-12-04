import {useState, useEffect} from 'react';

function Timer(){
    const [minutes, setMinutes] = useState(0);
    const [sec, setSec] = useState(0);
    const [started, setStarted] = useState(false);



    useEffect(() =>{
        let interval ;
        if (started && minutes > 0 && sec > 0){
            //decrease time.
            interval = setInterval(()=>{
                setSec(sec-1);
            }, 1000);

        }else if( minutes <= 0 && sec <= 0 ){
            // stop secr
            clearInterval(interval);
            setStarted(false);

        }else if(sec <= 0){
            setMinutes(minutes -1);
            setSec(59);

        }
        return () => clearInterval(interval);

    },[sec, started])

    function startHandler(){
        setStarted(true);
       
    }

    function stopHandler(){ 
        setStarted(false);
        
    }
    function resetHandler(){
        setSec(0);
        setMinutes(0);
        setStarted(false);
    }

    return(<div>
        <h1>{minutes} : {sec}</h1>

        <input type="text" onChange={(e) => setMinutes(Number(e.target.value))}></input>
        <input type="text" onChange={(e)=> setSec(Number(e.target.value))}></input>

        <button onClick={startHandler}>Start Timer</button>
        <button onClick={stopHandler}>Stop Timer </button>
        <button onClick={resetHandler}> Reset Button</button>
    </div>)
}

export default Timer;