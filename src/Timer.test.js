import React from 'react';
import {render} from '@testing-library/react';
import Timer from "./Timer";

test('renders learn react link', () => {
    const {getByText} = render(<Timer minutes={'minutes'} seconds={'seconds'}/>);
    const linkElement = getByText(/minutes:seconds/i);
    expect(linkElement).toBeInTheDocument();
});
