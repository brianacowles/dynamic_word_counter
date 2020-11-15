import React, { useEffect, useState } from 'react';

export default function TextInput({params}) {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        let newText = text;
        if(params.parentheses) {
            // remove text in parentheses
            newText = newText.replaceAll(/\(.*\)/gi, '');
        }
        if(params.quotes) {
            // remove text in quotes
            newText = newText.replaceAll(/".*"/gi, '');
        }
        if(params.smallWords) {
            // remove words 3 letters or less
            newText = newText.replaceAll(/\b\w{1,3}\b/gi, '');
        }
        // replace ellipsis with spaces
        newText = newText.replaceAll(/\.{3}|…/gi, ' ')
        // replace newlines with spaces
        newText = newText.replaceAll(/\n|\r/gi, ' ')
        // remove special characters
        newText = newText.replaceAll(/[^a-zA-Z\d\s:]/gi, '');
        // remove extra spaces and trailing spaces
        newText = newText.replaceAll(/\s\s+/gi, ' ')
        newText = newText.replaceAll(/\s$/gi, '')

        if(newText.length !== 0)
            setCount(newText.split(' ').length);
    }, [params, text])

    return(
        <div className='TextInput'>
            <textarea 
                className='textarea' 
                placeholder='Paste your text here'
                onChange={handleChange}
            />
            <h3>Count: {count}</h3>
        </div>
    )
}