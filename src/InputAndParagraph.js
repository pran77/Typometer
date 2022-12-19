import React, { useRef } from "react";
import "./App.css";
import { useState ,useEffect} from "react";
import "./index.css";

function Word(props) {
  const { text, active, correct, isGenerated } = props;

  // const rerender=useRef(0)
  // useEffect(()=>{
  //   rerender.current+=1
  // })
  // console.log(correct);
  if(isGenerated) {

    if (active) {
      return <span className="active">{text}</span>;
    }

    return <span>{text} </span>;

  } else {

    if (correct === true) {
      return <span className="correct">{text} </span>;
    }

    if (correct === false) {
      return <span className="incorrect">{text} </span>;
    }

    if (active) {
      return <span className="active">{text} </span>;
    }

    return <span>{text} </span>;

  }
};

function Timer(props){
  const [timeElasped,settimeElasped]=useState(0);
  
  useEffect(()=>{
    if(props.startCounting){
      setInterval(()=>{
       settimeElasped(oldtime=>oldtime+1);
      },1000);
    }
    else{
      settimeElasped(0);
    }
  },[props.startCounting]);

  return <h3 align="left">Speed: {timeElasped}</h3>
}
// Word=React.memo(Word);

function InputAndParagraph() {
  const [para, setPara] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctwordarray, setcorrectwordarray] = useState([]);
  const [highlightedWordArray, setHighlightedWordArray] = useState([]);
  const [startCounting,setStartCounting]=useState(false);
  // const [timeElasped,settimeElasped]=useState(0);

  // function Timer(props){
  //   // const [timeElasped,settimeElasped]=useState(0);
  
  //   useEffect(()=>{
  //     if(props.startCounting){
  //       setInterval(()=>{
  //        settimeElasped(oldtime=>oldtime+1);
  //       },1000);
  //     }
  //   },[props.startCounting]);
  
  //   return <h3 align="left">Speed: {timeElasped}</h3>
  // }

  function processInput(value) {
    if(!startCounting){
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      //console.log('index before = ', activeWordIndex);
      setActiveWordIndex((index) => index + 1);
      //console.log('index after = ', activeWordIndex);

      //check correct word
      setcorrectwordarray(data => {
        const word = value.trim();
        var colorArray = highlightedWordArray;
        colorArray.push(data);
        setHighlightedWordArray(colorArray)
        const compareWords = word.split(' ');
        highlightedWordArray[activeWordIndex] = compareWords[compareWords.length - 1] === words[activeWordIndex];
        // console.log("new result after = ", highlightedWordArray);
        return highlightedWordArray;
      });
    }
  }
  //   } else if (value.endsWith(', ')) {
  //     setActiveWordIndex((index) => index + 1);
  //     setUserInput('');
      
  //   } else if (value.endsWith('. ')) {
  //     setActiveWordIndex((index) => index + 1);
  //     setUserInput('');
  //   } else {
  //     setUserInput('');
  //   }
  // }

  // Generate Paragraphs
  const para1 = `An aim is a goal or objective to achieve in life. 
In order to succeed in life, one must have a goal. My aim in life is to be a teacher.Teaching is a noble and responsible profession. 
I have come to know that the ever-increasing misery and distress, are due to the ignorance and illiteracy of the people of our country. So I have  to spread education among the masses as much as 
possible within my humble power`;

  const para2 = `Human life is a mixture of weal and woe, smiles and tears. However, once what had seemed to be a memorable day turned out to be the saddest day of my life. We had planned for a picnic with all our classmates after the 
examination on the bank of the river Ganga. We started early in 
the morning and reached at 10 am. After the cooking was completed, we wished to take a bath in the Ganga`;

  const paras = [para1, para2];

  function randomNumberGenerator(min, max) {
    let x = Math.floor(Math.random() * max + min);
    return x;
  }

  function randomParagraph() {
    setPara(paras[randomNumberGenerator(0, 2)]);
    setActiveWordIndex(0);
    setHighlightedWordArray([]);
    // setidx(props.idx=0)
    // console.log(para);
    // const words = para.split(' ');
    setStartCounting(false);
    const textarea = document.getElementById('isEmpty');
    textarea.value = '';
  }

  const words = para.split(" ");
  return (
    <div className="para">
      <h1>Typometer</h1>
      <Timer 
      startCounting={startCounting}
      />
      <button onClick={randomParagraph}>Generate Paragraph</button>
      <p>
        {words.map((word, index) => {
          // console.log(correctwordarray[index]);
          return (
            <Word
              text = {word}
              active = {index === activeWordIndex}
              correct = {correctwordarray[index]}
              isGenerated = {activeWordIndex === 0 ? true : false}  
            />
          );
        })};
      </p>

      <br /> <br />

      <textarea
        id="isEmpty"
        className="textregion"
        name="textarea"
        rows="15"
        cols="95"
        placeholder="Enter your text"
        autoComplete="off"
        onChange={(e) => processInput(e.target.value)}
      ></textarea>
    </div>
  );
}

export default InputAndParagraph;
