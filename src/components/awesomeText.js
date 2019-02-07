import React from 'react';
import './awesomeText.css';

class AwesomeText extends React.Component{
    constructor(props)
    {
        super(props);
        this.splitTextToWords = this.splitTextToWords.bind(this);
    }

    splitTextToWords(text) {
        const words = text.split(' ');
        return words;
    };

    render() {
        const words = this.splitTextToWords(this.props.text);
        return(
            <div className="text">
            {
                words.map((word, wordIndex) => {
                    return word.split('').map((letter, letterIndex)=> {
                        if(letterIndex == 0) {
                            return <span>{letter}</span>;
                        }
                        else {
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