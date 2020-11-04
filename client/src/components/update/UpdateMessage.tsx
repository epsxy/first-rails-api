import React, { useState } from 'react';
import { Input, Root, SourceDestinationContainer, SubmitButton, TextArea, ToggleButton } from '../new/NewMessageStyle';
import { ButtonsContainer, CloseButton } from './UpdateMessageStyle';

function UpdateMessage(props: {
    author: string;
    recipient: string;
    content: string;
    privacy: boolean;
    addMessage: (a: string, r: string, c: string, privacy: boolean) => void;
    onClose: () => void;
}) {
    const [author, setAuthor] = useState(props.author);
    const [recipient, setRecipient] = useState(props.recipient);
    const [isPrivate, setIsPrivate] = useState(props.privacy);
    const [content, setContent] = useState(props.content);

    const isEnabled = () => {
        return (!!author || !!props.author) && (!!recipient || props.recipient) && (!!content || props.content);
    };

    const udateMessage = (): void => {
        if (isEnabled()) {
            props.addMessage(author || props.author, recipient || props.recipient, content || props.content, isPrivate);
        }
    };

    return (
        <Root>
            <SourceDestinationContainer>
                <Input
                    placeholder="Author"
                    defaultValue={author}
                    onChange={(event: any) => setAuthor(event.target.value)}
                />
                <Input
                    placeholder="Recipient"
                    defaultValue={recipient}
                    onChange={(event: any) => setRecipient(event.target.value)}
                />
                <ToggleButton
                    data-testid="update-publicbtn"
                    className={isPrivate ? 'disabled' : 'enabled'}
                    onClick={() => setIsPrivate(false)}
                >
                    Public
                </ToggleButton>
                <ToggleButton className={isPrivate ? 'enabled' : 'disabled'} onClick={() => setIsPrivate(true)}>
                    Private
                </ToggleButton>
            </SourceDestinationContainer>
            <TextArea
                placeholder="Message content here ..."
                defaultValue={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <ButtonsContainer>
                <SubmitButton
                    data-testid="update-submitbtn"
                    className={isEnabled() ? 'enabled' : 'disabled'}
                    onClick={udateMessage}
                >
                    Update
                </SubmitButton>
                <CloseButton data-testid="update-closebtn" onClick={() => props.onClose()}>
                    Close
                </CloseButton>
            </ButtonsContainer>
        </Root>
    );
}

export default UpdateMessage;
