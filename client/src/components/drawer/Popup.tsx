import React from 'react';
import { Message } from '../../model/Message';
import UpdateMessage from '../update/UpdateMessage';
import { UpdateMessageContainer, Content, Mask, Root } from './PopupStyle';

function Drawer(props: { message: Message; show: boolean; onClose: () => void }) {
    const update = (author: string, recipient: string, content: string, privacy: boolean) => {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        fetch(`http://${window.location.hostname}:3000/api/messages/${props.message.id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify({ message: { author, recipient, content, private: privacy } }),
        }).then(() => props.onClose());
    };

    return (
        <Root className={!!props.show ? 'show' : ''}>
            <Content className={!!props.show ? 'show' : ''}>
                <UpdateMessageContainer>
                    <UpdateMessage
                        key={props.message.id}
                        author={props.message.author}
                        recipient={props.message.recipient}
                        content={props.message.content}
                        privacy={props.message.private}
                        addMessage={update}
                        onClose={props.onClose}
                    />
                </UpdateMessageContainer>
            </Content>
            <Mask className={!!props.show ? 'show' : ''} />
        </Root>
    );
}

export default Drawer;
