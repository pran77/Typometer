import React from 'react';
import './Inputarea.css'
import Paragraph from './Paragraph';
function Inputarea(props){
    const [userInput, setUserInput]=React.useState('')
    const [activeWordIndex, setActiveWordIndex] = React.useState(0)
    const [correctwordarray,setcorrectwordarray]=React.useState([])
    
    // const handleTextChange=event=>{
    //     settext(event.target.value)
    //     //console.log(event.target.value)
    // }

    function getData(e){
        //e.preventDefault()
    }

    function processInput(value){
        if(value.endsWith(' ')) {
            setActiveWordIndex(index => index + 1);
            setUserInput('');

            // check correct word
            // setcorrectwordarray(data=> {
            //     const word=value.trim();
            //     const newresult=[...data]
            //     newresult[activeWordIndex] = word === props.wordsarr[activeWordIndex];
            //     return newresult;
            // });
            
        }
        else if(value.endsWith(', ')){
            setActiveWordIndex(index => index + 1);
            setUserInput('');
        }
        else if(value.endsWith('. ')){
            
            setActiveWordIndex(index => index + 1);
            setUserInput('');
        }
        else{
            setUserInput('');
        }
    }


    return(
        <div className='Inputarea'>
            <Paragraph index={activeWordIndex}  />
           <textarea className='textregion'  name="textarea" rows="15" cols="95" 
        placeholder='Enter your text'  autoComplete="off" onChange={(e)=>processInput(e.target.value)} ></textarea>
       
           <br/> <br />
           <button className='submit' type='submit' style={{height:"40px",width:"90px"}} onClick={getData}>Submit</button>
        </div>
    )
}

export default Inputarea;

