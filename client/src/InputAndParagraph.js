import React from "react";
import "./styles/App.css";
import { useState, useEffect} from "react";
import "./styles/index.css";
import "./styles/InputandParagraph.css";

function Word(props) {
  const { text, active, correct, isGenerated } = props;

  if(isGenerated) {

    if (active) {
      return <span className="active">{text} </span>;
    }

    return <span>{text} </span>;

  } else {

    if (correct === 1) {
      return <span className="correct">{text} </span>;
    }

    if (correct === 2) {
      return <span className="incorrect">{text} </span>;
    }

    if (active) {
      return <span className="active">{text} </span>;
    }

    return <span>{text} </span>;

  }
};

function Timer(props){
  const {startCounting, currentTime, setTime} = props;
  useEffect(()=>{
    if(startCounting) {
      setTimeout(()=>{
       setTime(currentTime+1);
      },1000);
    } else {
      setTime(0);
    }
  });

  return <h3 className="timer" align="left">Timer: {parseInt(currentTime / 60)}:{currentTime % 60} </h3>
}
// Word=React.memo(Word);

function InputAndParagraph() {
  const [para, setPara] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  //const [correctwordarray, setcorrectwordarray] = useState([]);
  const [highlightedWordArray, setHighlightedWordArray] = useState([]);
  const [startCounting, setStartCounting] =  useState(false);
  const [timeElasped, setTimeElasped] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [backspaceFlag, setBackspaceFlag] = useState(false);
  const [inputBeforeBackspace, setInputBeforeBackspace] = useState("");
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [inCorrectWordCount, setInCorrectWordCount] = useState(0);
  const [incorrectWordCountWhileTyping, setInCorrectWordCountWhileTyping] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLastWordTyped, setIsLastWordTyped] = useState(false);

  function processInput(value) {
    if(!startCounting){
      setStartCounting(true);
    }

    var input = document.getElementById('isEmpty');
    var colorArray;
    var paraLength = words.length;
    setBackspaceFlag(false);

    input.onkeydown = function(event) {
        var key = event.keyCode || event.charCode;
        if(key === 8 || key === 46) {
          console.log("Backspace pressed");
          setBackspaceFlag(true);
        } 
    };
    
    if(!backspaceFlag) {
      setInputBeforeBackspace(value);
      //console.log(inputBeforeBackspace);
    }

    if ((inputBeforeBackspace.endsWith(' ') || value.endsWith(' ')) && backspaceFlag) {

      if(inputBeforeBackspace.endsWith('  ')) {
        setActiveWordIndex((index) => index - 1);
        setInputBeforeBackspace(value);
        colorArray = highlightedWordArray;
        console.log("length = "+ colorArray.length);
        colorArray[activeWordIndex - 1] = 0;
        setHighlightedWordArray(colorArray)
        return;
      }

      if(value.endsWith(' ')) {
        setInputBeforeBackspace(value);
        return;
      }

      setActiveWordIndex((index) => index - 1);
      console.log(activeWordIndex);
      console.log(highlightedWordArray);
      setInputBeforeBackspace(value);
      setBackspaceFlag(false);

      colorArray = highlightedWordArray;
      console.log("length = "+colorArray.length);
      colorArray[activeWordIndex - 1] = 0;
      setHighlightedWordArray(colorArray)

    } else if (value.endsWith(' ')) {

      setActiveWordIndex((index) => index + 1);
      console.log(activeWordIndex);
      console.log(highlightedWordArray);

      const word = value.trim();
      colorArray = highlightedWordArray;
      // console.log("length = "+colorArray.length);
      colorArray.push(0);
      //setHighlightedWordArray(colorArray)
      const compareWords = word.split(' ');
      if(compareWords[compareWords.length - 1] === words[activeWordIndex]) {
        colorArray[activeWordIndex] = 1;
      } else {
        colorArray[activeWordIndex] = 2;
        setInCorrectWordCountWhileTyping((count) => count + 1);
      }
      setHighlightedWordArray(colorArray);

    }

    // console.log("length of para = "+paraLength);
    // console.log("active index = "+activeWordIndex);
    // console.log(highlightedWordArray[activeWordIndex - 1]);
    if(paraLength === activeWordIndex + 1 && highlightedWordArray[activeWordIndex] === 1) {
      setTimeTaken(timeElasped);
      setStartCounting(false);
      setIsSubmitted(true);
      setIsLastWordTyped(true);
      setCorrectWordCount(0);
      setInCorrectWordCount(0);

      for (let num of highlightedWordArray) {
        if(num===1){
          setCorrectWordCount((count) => count + 1);
        }
        if(num===2){
          setInCorrectWordCount((count) => count + 1);
        }
      }

    }

  }

  // Generate Paragraphs
  const para1 = "An aim is a goal or objective to achieve in life In order to succeed in life one must have a goal My aim in life is to be a teacher Teaching is a noble and responsible profession You should be able to figure out quickly if this tool will be beneficial for your project or needs"

  const para2 = "Human life is a mixture of weal and woe smiles and tears However once what had seemed to be a memorable day turned out to be the saddest day of my life We had planned for a picnic with all our classmates after the examination on the bank of the river Ganga"

  const para3 = "There are a number of reasons you may need a block of text and when you do a random paragraph can be the perfect solution If you happen to be a web designer and you need some random text to show in your layout a random paragraph can be an excellent way"

  const para4 = "The best way to use these random paragraphs is to generate a few and see how they can help with whatever project you are currently pursuing You should be able to figure out quickly if this tool will be beneficial for your project or needs random paragraph excellent way"

  const paras = [para1, para2, para3, para4];

  function randomNumberGenerator(min, max) {
    let x = Math.floor(Math.random() * max + min);
    return x;
  }
  function randomParagraph() {
    setPara(paras[randomNumberGenerator(0, 4)]);
    setActiveWordIndex(0);
    setHighlightedWordArray([]);
    // setidx(props.idx=0)
    // console.log(para);
    // const words = para.split(' ');
    setCorrectWordCount(0);
    setInCorrectWordCount(0);
    setInCorrectWordCountWhileTyping(0);
    setStartCounting(false);
    setIsSubmitted(false);
    setIsLastWordTyped(false);
    const textarea = document.getElementById('isEmpty');
    textarea.value = '';
  }

  function Submit(){
    setTimeTaken(timeElasped);
    setStartCounting(false);
    setIsSubmitted(true);
    setCorrectWordCount(0);
    setInCorrectWordCount(0);

    for (let num of highlightedWordArray) {
      if(num===1){
        setCorrectWordCount((count) => count + 1);
      }
      if(num===2){
        setInCorrectWordCount((count) => count + 1);
      }

    }
    // console.log("correctWord = "+correctWordCount)
    // console.log("Time = "+timeElasped)
  }

  function DisplayMetrics(props) {
    if(props.checkSubmit || props.isLastWordTyped) {
      return (
        <div className="results" id="red-id">
          <h3 className="res-heading" align="center"> Speed : {Math.floor(((correctWordCount + inCorrectWordCount) / timeTaken)*60)} Wpm</h3>
          <h3 className="res-heading" align="center"> Time Taken : {parseInt(timeTaken / 60)}:{timeTaken % 60} </h3>
          <h3 className="res-heading" align="center"> Accuracy : {parseFloat((correctWordCount / (correctWordCount + incorrectWordCountWhileTyping))*100).toFixed(2)} </h3>
          <h3 className="res-heading" align="center"> Correct Word : {correctWordCount} </h3>
          <h3 className="res-heading" align="center"> Incorrect Word : {inCorrectWordCount} </h3>
        </div>
      )
    }
  }

  const words = para.split(" ");
  return (
    
    <div className="para">
      {/* <section className="waveDesign">
      <svg xmlns="http://www.w3.org/2000/svg" className="waves" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,304C640,309,800,299,960,261.3C1120,224,1280,160,1360,128L1440,96L1440,
      320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </section> */}
      <div className="heading"></div>
      <Timer 
      startCounting = {startCounting}
      currentTime = {timeElasped}
      setTime = {setTimeElasped}
      />
      <button className="butt" onClick={randomParagraph}>Get Paragraph</button>
      <p className="gen-para gen-para-lg gen-para-md gen-para-sm">
        {words.map((word, index) => {
          // console.log(correctwordarray[index]);
          return (
            <Word
              text = {word}
              active = {index === activeWordIndex}
              correct = {highlightedWordArray[index]}
              isGenerated = {activeWordIndex === 0 ? true : false}  
            />
          );
        })}
      </p>
      <br /> <br />

      <textarea
        id="isEmpty"
        className="textregion lg md sm"
        name="textarea"
        rows="15"
        cols="95"
        placeholder="Enter your text"
        autoComplete="off"
        onChange={(e) => processInput(e.target.value)}
      ></textarea><br></br><br></br>
      <button className="submit" onClick={Submit}><a href="#res-id">Submit</a></button>
      <DisplayMetrics 
      checkSubmit = {isSubmitted}
      isLastWord = {isLastWordTyped}
      />
      
    </div>
    
  );
}
export default InputAndParagraph;
