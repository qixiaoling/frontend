import React from 'react'
import ReactDOM from 'react-dom'
import HeroSection from "../../HeroSection";
import {cleanup} from "@testing-library/react";
import {render} from '@testing-library/react'
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer'
import {Button} from "../../Button";





afterEach(cleanup)

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<h1></h1>, div)
})

it("renders title correctly", ()=>{
    const {getByTestId}  = render(<Button></Button>);
    expect(getByTestId('test').value).toEqual("Grow with us")
})

it("match snapshot", ()=>{
    const tree = renderer.create(<Button></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})