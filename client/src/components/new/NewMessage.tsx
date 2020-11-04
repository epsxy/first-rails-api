import React, { useState } from 'react';
import { Input, Root, SourceDestinationContainer, SubmitButton, TextArea, ToggleButton } from './NewMessageStyle';

function NewMessage(props: { addMessage: (a: string, r: string, c: string, privacy: boolean) => void }) {
    const [author, setAuthor] = useState('');
    const [recipient, setRecipient] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [content, setContent] = useState('');

    const isEnabled = () => {
        return !!author && !!recipient && !!content;
    };

    const addMessage = (): void => {
        if (isEnabled()) {
            props.addMessage(author, recipient, content, isPrivate);
        }
    };

    return (
        <Root>
            <SourceDestinationContainer>
                <Input placeholder="Author" value={author} onChange={(event) => setAuthor(event.target.value)} />
                <Input
                    placeholder="Recipient"
                    value={recipient}
                    onChange={(event) => setRecipient(event.target.value)}
                />
                <ToggleButton className={isPrivate ? 'disabled' : 'enabled'} onClick={() => setIsPrivate(false)}>
                    Public
                </ToggleButton>
                <ToggleButton className={isPrivate ? 'enabled' : 'disabled'} onClick={() => setIsPrivate(true)}>
                    Private
                </ToggleButton>
            </SourceDestinationContainer>
            <TextArea
                placeholder="Message content here ..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <SubmitButton className={isEnabled() ? 'enabled' : 'disabled'} onClick={addMessage}>
                Add
            </SubmitButton>
        </Root>
    );
}

export default NewMessage;
