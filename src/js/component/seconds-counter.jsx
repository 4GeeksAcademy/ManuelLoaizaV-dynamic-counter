import React from 'react';
import Card from './card';

export default function SecondsCounter({ displayedSeconds }) {
    return (
        <div className='bg-black container-fluid'>
            <div className='row gx-2 gy-2 d-flex align-items-center justify-content-center py-5'>
                <Card />
                {generateCards(displayedSeconds)}
            </div>
        </div>        
    );
};

const generateCards = function generateCardsFromDigitsOfGivenNumber(num) {
    const digits = [];

    if (num === 0) {
        return (<Card content={0} />);
    }

    if (num < 0) {
        digits.push(<Card content={'-'} />);
        num = Math.abs(num);
    }

    while (num > 0) {
        const lastDigit = num % 10;
        digits.push(<Card content={lastDigit} />);
        num = Math.floor(num / 10);
    }

    return digits.reverse();
};