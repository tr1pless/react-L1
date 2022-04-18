import React from 'react'
import { Button } from './Button'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import  userEvent from '@testing-library/user-event'

describe('button', () => {

    it('render component', () => {
        render(<Button />)
    })

    it('render with snapshot', () => {
        const {asFragment} = render(<Button />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('render component with text', () => {
        render(<Button />);
        expect(screen.getByText(/click/)).toBeInTheDocument()
    })
    
    it('render multiply components', () => {
        render(<>
        <Button />
        <Button />
        </>)

        expect(screen.queryAllByRole('button').length).toBe(2)
    });

    it('button is disabled', () => {
        render(<Button disabled/>);

        expect(screen.getByText('click')).toBeDisabled()
    })
// 
    // it('button backgroundColor is red', () => {
        // render (<Button />)
// 
        // expect(screen.getByText('click')).toHaveStyle({backgroundColor: 'red'})
    // })

    // it('button click with userEvent', () => {
        // const mockHandler = jest.fn()

        // render (<Button  onButtonClick={mockHandler}/>)

        // userEvent.click(screen.getByText('click'))

        // expect(mockHandler).toBeCalledTime(0)
    // })

    it('button async click', async () => {
        const mockHandler = jest.fn()
        render(<Button onButtonClick={() => setTimeout(mockHandler, 500)}/>)

        userEvent.click(screen.getByText('click'))

        await waitFor(() => expect(mockHandler).toHaveBeenCalledTime(1))
    })
})