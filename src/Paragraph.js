import React from 'react';
import { useState } from 'react';

const Paragraph = () => {

    const [para, setPara] = useState("");
    const [length, setLength] = useState(20);
    const [index, setIndex] = useState(0);

    function randomNumberGenerator(min, max) {
        let x = Math.floor((Math.random() * max) + min);
        return x;
    }

    function intToChar(int) {
        const code = 'a'.charCodeAt(0);
        return String.fromCharCode(code + int);
    }

    function randomTextGenerator(len) {
        var text = "";
        var cnt = 0;
        while(cnt < len) {
            const wordLen = randomNumberGenerator(2, 7);
            cnt += wordLen;
            for (var i = 0; i < wordLen; i++) {
                text += intToChar(randomNumberGenerator(0, 26));
            }
            text += " ";
        }
        return text;
    }

    const handleInput = event => {
        setLength(event.target.value);

        console.log('value is:', event.target.value);
    }

    function randomParagraph() {
        setPara(randomTextGenerator(length));
    }

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
            <ul>
                <li>Enetr number of approx characters you want in the paragraph</li>
            </ul>
            <input
                type="number"
                id="length"
                name="length"
                onChange={handleInput}
                value={length}
            />
            <br></br>
            <button onClick={randomParagraph}>Generate Paragraph</button>
            <p>{para}</p>
        </div>
    )
}

export default Paragraph;