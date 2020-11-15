import React from 'react';

export default function Checkboxes({params, onChange}) {

    const handleChange = (event) => {
        onChange(event.target.name, event.target.checked);
    }

    return(
        <div className='Checkboxes'>
            <div className='field is-horizontal'>
                <label className='checkbox'>
                    <input 
                        name='parentheses'
                        type='checkbox'
                        onChange={handleChange}
                        defaultChecked={params.parentheses}
                        className='mr-2'
                    />
                    Exclude words in parentheses
                </label>
            </div>
            <div className='field is-horizontal'>
                <label className='checkbox'>
                    <input 
                        name='quotes'
                        type='checkbox'
                        onChange={handleChange}
                        defaultChecked={params.quotes}
                        className='mr-2'
                    />
                    Exclude words in quotes
                </label>
            </div>
            <div className='field is-horizontal'>
                <label className='checkbox'>
                    <input 
                        name='smallWords'
                        type='checkbox'
                        onChange={handleChange}
                        defaultChecked={params.smallWords}
                        className='mr-2'
                    />
                    Exclude words 3 letters or less
                </label>
            </div>
        </div>
    )
}