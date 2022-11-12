import React from 'react';
import './Inputarea.css'
function Inputarea(){
    const [text,settext]=React.useState("")
    
    const handleTextChange=event=>{
        settext(event.target.value)
        console.log(event.target.value)
    }

    function getData(e){
        e.preventDefault()
    }


    return(
        <div className='Inputarea'>
           <textarea className='textregion'  name="textarea" rows="15" cols="95" 
           placeholder='Enter your text' value={text} autoComplete="off" onChange={handleTextChange} ></textarea>
           <br/> <br />
           <button className='submit' type='submit' style={{height:"40px",width:"90px"}} onClick={getData}>Submit</button>
        </div>
    )
}

export default Inputarea;

