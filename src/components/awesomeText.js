import React from 'react';
import './awesomeText.css';

class AwesomeText extends React.Component{
    constructor(props)
    {
        super(props);
        this.splitTextToWords = this.splitTextToWords.bind(this);
    }

    splitTextToWords(text) {
        console.log(text);
        const words = text.split(' ');
        return words;
    };

    render() {
        const words = this.splitTextToWords(this.props.text);
        return(
            <div className="text">
            {
                words.map((word, wordIndex) => {
                    console.log(word, wordIndex);
                    return word.split('').map((letter, letterIndex)=> {
                        if(letterIndex == 0) {
                            console.log(letter, letterIndex);
                            return <span>{letter}</span>;
                        }
                        else {
                            console.log(letter, letterIndex);
                            return <span key={`${wordIndex} ${letterIndex}`} className="hidden">{letter}</span>;
                        }
                    });
                })
            }   
            </div>
        );
    }
}

AwesomeText.defaultProps = {
    text: "Default Text"
};

export default AwesomeText;