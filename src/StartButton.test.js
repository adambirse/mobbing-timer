import React from 'react';
import {render} from '@testing-library/react';
import StartButton from "./StartButton";

test('renders learn react link', () => {
    const {getByText} = render(<StartButton/>);
    const linkElement = getByText(/Start/i);
    expect(linkElement).toBeInTheDocument();
});
