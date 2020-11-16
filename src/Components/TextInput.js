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
            // remove words 3 letters or less but preserve >=4 letter contractions
            newText = newText.replaceAll(/\b\w{3}'\w/gi, 'four')
            // ...it's ugly but it works...
            newText = newText.replaceAll(/\b\w{1,3}\b/gi, '');
        }
        // replace ellipsis with spaces
        newText = newText.replaceAll(/\.{3}|…/gi, ' ')
        // replace newlines with spaces
        newText = newText.replaceAll(/\n|\r/gi, ' ')
        // remove special characters
        newText = newText.replaceAll(/[^a-zA-Z\d\s:]/gi, '');
        
        // return number of elements in array with empty elements removed
        setCount(newText.split(' ').filter((e) => {
            return e !== '';
        }).length);
    }, [params, text])

    return(
        <div className='TextInput'>
            <p className='mb-1'><b>Count:</b> {count}</p>
            <textarea 
                className='textarea' 
                placeholder='Paste your text here'
                onChange={handleChange}
                rows={10}
            />
        </div>
    )
}