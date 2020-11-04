import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import MessagesList from './components/list/MessagesList';
import NewMessage from './components/new/NewMessage';
import TopBar from './components/topbar/TopBar';
import { Message } from './model/Message';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 3;
`;

function App() {
    const [messages, setMessages] = useState([] as Message[]);
    const [newMsgKey, setNewMsgKey] = useState(Math.random());

    const fetchData = () => {
        fetch(`http://${window.location.hostname}:3000/api/messages`)
            .then((res) => res.json())
            .then((messages) => {
                setMessages(messages);
            });
    };

    const postMessage = (author: string, recipient: string, content: string, isPrivate: boolean): void => {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        fetch(`http://${window.location.hostname}:3000/api/messages`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ message: { author, recipient, content, private: isPrivate } }),
        }).then(() => {
            fetchData();
            // Rekeying the NewMessage component reset its value
            setNewMsgKey(Math.random());
        });
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Root>
            <TopBar />
            <NewMessage key={newMsgKey} addMessage={postMessage} />
            <MessagesList messages={messages} fetchData={fetchData} />
        </Root>
    );
}

export default App;
