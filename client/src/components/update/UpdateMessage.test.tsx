import { render, screen } from '@testing-library/react';
import React from 'react';
import UpdateMessage from './UpdateMessage';

test('should close update message component when close button is pressed', () => {
    const mockAddMessage = jest.fn();
    const mockOnClose = jest.fn();
    render(
        <UpdateMessage
            author={'Yoda'}
            recipient={'Obi-Want'}
            content={'Evil, the dark side, is.'}
            privacy={true}
            addMessage={mockAddMessage}
            onClose={mockOnClose}
        />,
    );

    const closeBtn = screen.getByTestId('update-closebtn');
    closeBtn.click();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockAddMessage).toHaveBeenCalledTimes(0);
});

test('should update message when update button is pressed', () => {
    const mockAddMessage = jest.fn();
    const mockOnClose = jest.fn();
    render(
        <UpdateMessage
            author={'Yoda'}
            recipient={'Obi-Wan'}
            content={'Evil, the dark side, is.'}
            privacy={true}
            addMessage={mockAddMessage}
            onClose={mockOnClose}
        />,
    );

    const submitBtn = screen.getByTestId('update-submitbtn');
    submitBtn.click();

    expect(mockAddMessage).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(0);
});

test('should update message privacy', () => {
    const mockAddMessage = jest.fn();
    const mockOnClose = jest.fn();
    render(
        <UpdateMessage
            author={'Yoda'}
            recipient={'Obi-Wan'}
            content={'Evil, the dark side, is.'}
            privacy={true}
            addMessage={mockAddMessage}
            onClose={mockOnClose}
        />,
    );

    const publicBtn = screen.getByTestId('update-publicbtn');
    const submitBtn = screen.getByTestId('update-submitbtn');

    publicBtn.click();
    submitBtn.click();

    expect(mockAddMessage).toHaveBeenCalledTimes(1);
    expect(mockAddMessage).toHaveBeenCalledWith('Yoda', 'Obi-Wan', 'Evil, the dark side, is.', false);
    expect(mockOnClose).toHaveBeenCalledTimes(0);
});
