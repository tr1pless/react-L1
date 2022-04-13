import React, { useState } from 'react';
import '../index.css';
import { Button } from './Button';
import { Input } from './Input';

export const Main = () => {
    const [value, getValue] = useState('')
    const [result, getResult] = useState('')
    const [text, getText] = useState(``)

    const lookForChanges = (e) => {
        getValue(e.target.value)
    }

    const clickFound = () => {
        getResult([value])
        checkResult()
    }


    const checkResult = () => {
        if (+value !== 4) {
            getText(`Answer "${value}" is wrong`)
        } else {
            getText(`Answer "${value}" is correct! Well Done!`)
        }
    }


    return <>
        <div className="math">
            <h2 className="title">2+2= ?</h2>
            <p className='text'>{text}</p>
            <div className="input-wrp"><p className='input-text'>Answer Here:</p><Input className='input' change={lookForChanges} value={value} /></div>
            <Button className='btn' click={clickFound} />
        </div>
    </>
}