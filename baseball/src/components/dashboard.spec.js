import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import DashBoard from './dashboard';


describe('<dashboard />',()=>{
    describe('add strike', ()=>{
        const { getByTestId, getByText  } = render(<DashBoard />);
        const strike = getByTestId('strike')
        const selected = getByTestId('strikes')
        const selectedBalls = getByTestId ('balls');
        const button = getByText('Strike')
        it('renders strike button',()=>{
            expect(strike).toHaveTextContent(/strike/i)
        })
        it('should add the strike',()=>{
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/strikes: 1/i)
        })
        it('should add the second', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/strikes: 2/i)
        })
        it('should strikeout', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/strikes: 0/i)
            expect (selectedBalls).toHaveTextContent (/Balls: 0/i);

        })
    describe('add ball', () => {
        const { getByTestId, getByText } = render(<DashBoard />);
        const ball = getByTestId('ball')
        const selected = getByTestId('balls')
        const selectedStrikes = getByTestId ('strikes');
        const button = getByText('Ball')
        it('renders ball button', () => {
            expect(ball).toHaveTextContent(/ball/i)
        })
        it('should add a ball', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Balls: 1/i)
        })
        it('should add second ball', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Balls: 2/i)
        })
        it('should add third ball', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Balls: 3/i)
        })
        it('should walk', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Balls: 0/i)
            expect (selectedStrikes).toHaveTextContent (/Strikes: 0/i);
        })
    })
    describe('add foul', () => {
        const { getByTestId, getByText } = render(<DashBoard />);
        const foul = getByTestId('foul')
        const selected = getByTestId('strikes')
        const button = getByText('Foul')
        it('renders foul button', () => {
            expect(foul).toHaveTextContent(/foul/i)
        })
        it('should add a strike', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Strikes: 1/i)
        })
        it('should add a second', () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Strikes: 2/i)
        })
        it("foul should not raise", () => {
            fireEvent.click(button);
            expect(selected).toHaveTextContent(/Strikes: 2/i)
        })
    })
    describe('register hit', () => {
        const { getByTestId, debug } = render(<DashBoard />);
        const hit = getByTestId('hit')
        const selectedStrikes = getByTestId('strikes')
        const selectedBalls = getByTestId ('balls');
        const button = getByText('Hit')
        it('renders hit button', () => {
            expect(hit).toHaveTextContent(/hit/i)
        })
        it ("reset balls and strikes", () => {
            fireEvent.click (button);
            expect (selectedStrikes).toHaveTextContent (/Strikes: 0/i);
            expect(selectedBalls).toHaveTextContent(/Balls: 0/i);
        });

    })

})
})