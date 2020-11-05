import React, { useState } from 'react';
import styled from 'styled-components';
import { Message } from '../../model/Message';
import Drawer from '../drawer/Popup';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    font-family: ForcedSquare;
    font-size: 1.2em;
    padding: 2em;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 2px solid black;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ActionsContainer = styled.div`
    display: flex;
`;

const SourceDestination = styled.span`
    margin-bottom: 0.5em;
    font-weight: bold;
`;

const Public = styled.span`
    text-decoration: underline;
    margin-bottom: 0.5em;
`;

const Private = styled(Public)``;

const Button = styled.button`
    font-family: ForcedSquare;
    border-radius: 0;
    width: 100px;
    height: 40px;
    border: 2px solid black;
    box-shadow: 5px 5px black;
    font-size: 1em;
    &:hover {
        cursor: pointer;
        box-shadow: -5px -5px black;
    }
    margin: 0em 1em;
`;

const UpdateButton = styled(Button)`
    background-color: lightblue;
`;

const DeleteButton = styled(Button)`
    background-color: indianred;
`;

function MessagesList(props: { messages: Message[]; fetchData: any }) {
    const [isEditing, setIsEditing] = useState(false);
    const [messageEdited, setMessageEdited] = useState({} as Message);

    const deleteMessage = (id: number) => {
        fetch(`http://localhost:3000/api/messages/${id}`, { method: 'DELETE' }).then((res) => props.fetchData());
    };

    const edit = (m: Message) => {
        setMessageEdited(m);
        setIsEditing(true);
    };

    const close = () => {
        setIsEditing(false);
        props.fetchData();
    };

    return (
        <Root>
            <Drawer message={messageEdited} show={isEditing} onClose={close} />
            {props.messages.map((m) => {
                return (
                    <MessageContainer key={m.id}>
                        <ContentContainer>
                            <SourceDestination>
                                From: {m.author} - To: {m.recipient}.
                            </SourceDestination>
                            {m.private ? <Private>Private</Private> : <Public>Public</Public>}
                            <span>{m.content}</span>
                        </ContentContainer>
                        <ActionsContainer>
                            <UpdateButton onClick={() => edit(m)}>Update</UpdateButton>
                            <DeleteButton onClick={() => deleteMessage(m.id)}>Delete</DeleteButton>
                        </ActionsContainer>
                    </MessageContainer>
                );
            })}
        </Root>
    );
}

export default MessagesList;
