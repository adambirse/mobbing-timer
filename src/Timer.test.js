import React from 'react';
import {render} from '@testing-library/react';
import Timer from "./Timer";

test('renders learn react link', () => {
    const {getByText} = render(<Timer/>);
    const linkElement = getByText(/10 seconds left/i);
    expect(linkElement).toBeInTheDocument();
});
