import React from 'react';
import { useState } from 'react';
import Inputarea from './Inputarea';
import './App.css';

function Word(props){
    const {text, active, correct}= props

    if(correct===true){
        return <span className='correct'>{text} </span>
    }

    if(correct===false){
        return <span className='incorrect'>{text} </span>
    }

    if(active){
        return <span className='active'>{text} </span>
    }

    return <span>{text} </span>
}
const Paragraph = (props) => {

    const [para, setPara] = useState("");
    const [idx,setidx] = useState(0)
    // const words = ['Dev', 'Praveen']

    // var words;
    //const cloud = useRef(words);

    const para1 = `An aim is a goal or objective to achieve in life.
    In order to succeed in life, one must have a goal. My aim in life is to be a teacher.Teaching is a noble and responsible profession. 
    I have come to know that the ever-increasing misery and distress, are due to the ignorance and illiteracy of the people of our country. So I have  to spread education among the masses as much as
    possible within my humble power.`;

    const para2 =  `Human life is a mixture of weal and woe, smiles and tears. However, once what had seemed to be a memorable day turned out to be the saddest day of my life. We had planned for a picnic with all our classmates after the 
    examination on the bank of the river Ganga. We started early in 
    the morning and reached at 10 am. After the cooking was completed, we wished to take a bath in the Ganga.`;

    const paras = [para1, para2];

    function randomNumberGenerator(min, max) {
        let x = Math.floor((Math.random() * max) + min);
        return x;
    }

    // function intToChar(int) {
    //     const code = 'a'.charCodeAt(0);
    //     return String.fromCharCode(code + int);
    // }

    // function randomTextGenerator(len) {
    //     var text = "";
    //     var cnt = 0;
    //     while (cnt < len) {
    //         const wordLen = randomNumberGenerator(2, 7);
    //         cnt += wordLen;
    //         for (var i = 0; i < wordLen; i++) {
    //             text += intToChar(randomNumberGenerator(0, 26));
    //         }
    //         text += " ";
    //     }
    //     return text;
    // }

    // const handleInput = event => {
    //     setLength(event.target.value);

    //     console.log('value is:', event.target.value);
    // }

    function randomParagraph() {
        setPara(paras[randomNumberGenerator(0, 2)]);
        // setidx(props.idx=0)
        // console.log(para);
        // const words = para.split(' ');
    }
    const words = para.split(' ');

    function HighlightWord() {
        return(
            <p>
                {words.map((word,index)=>{
                    return <Word 
                    text={word}
                    active={index===props.index}
                    correct={null}
                    />
                })}
            </p>
        )};
    
    // async function highlightIndex() {
    //     setPara(para);
    //     console.log(para);
    //     const charArray = para.split('');
    //     setIndex(10);
    //     var text1 = "";
    //     var highlighted = "";
    //     var text2 = "";
    //     // charArray[index] = 'Z';
    //     console.log(charArray.length);
    //     // var text = "";
    //     for(var i=0; i<index; i++) {
    //         text1 += charArray[i]; 
    //     }
    //     highlighted += charArray[index];
    //     for(var j=index+1; j<charArray.length; j++) {
    //         text2 += charArray[j]; 
    //     }
    //     await setPara(text1);
    // }

    return (
        <div className="para">
            {/* <ul>
                <li>Enter number of approx characters you want in the paragraph</li>
            </ul>
            <input
                type="number"
                id="length"
                name="length"
                onChange={handleInput}
                value={length}
            />
            <br></br> */}
            
            <button onClick={randomParagraph} >Generate Paragraph</button>
            {/* <Inputarea wordsarr={words} /> */}
            <div>{HighlightWord()}</div>

        </div>
    )};
export default Paragraph;













































