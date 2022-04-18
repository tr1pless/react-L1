import React from 'react'
import { Form } from './Form'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'


describe('render with snapshot', (props) => {
    it('need to render form with snapshot', () => {
      const { asFragment } = render(<Form {...props} />)
      expect(asFragment()).toMatchSnapshot()
    })
  }) 