import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

describe("Hero Component", () => {
    test('renders hero image', () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');
    });
    test('renders hero Signup button', () => {
        render(<Hero/>);
        const signUpBtn = screen.getByRole("button",{name:"Signup for free"});
        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toHaveClass('p-2 btn btn-primary fs-5 mb-5');
    });
})