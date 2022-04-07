import React, { Component } from 'react';
import '../App.css'

export const Input = (props) => {
    return <input type="text" value={props.value} onChange={props.change}></input>;
}