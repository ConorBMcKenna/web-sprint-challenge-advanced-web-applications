// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from "./Spinner"

const spinner = ()=>screen.queryByText("Please wait...")


describe("Spinner", ()=>{
  test("on state", ()=>{
    render(<Spinner on={true} />)
    expect(spinner()).toBeTruthy()
  })
  test("off state", ()=>{
    render(<Spinner on={false} />)
    expect(spinner()).toBeFalsy()
  })
})