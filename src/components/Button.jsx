import React, { Component } from 'react';
import '../App.css'

export const Button = (props) => {
    return <button className='btn' onClick={props.click}>Lets Try</ button>
}