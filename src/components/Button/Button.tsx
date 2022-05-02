import React, { FC } from 'react';
import './Button.scss'
import ButtonUI from '@mui/material/Button';

interface ButtonProps {
onButtonClick: () => void;
}

export const Button: FC<ButtonProps> = ({onButtonClick}) => (
        <ButtonUI 
        variant="contained"
        type='submit' 
        onClick={onButtonClick}
        > click 
        </ButtonUI>
    )
