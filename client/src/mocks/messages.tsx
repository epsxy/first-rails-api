import { Message } from "../model/Message";

export const mockMessages: Message[] = [
    {
        "id": 1,
        "author": "Yoda",
        "content": "The force is strong in this one.",
        "private": false,
        "recipient": "Obi-Wan Kenobi",
    },
    {
        "id": 2,
        "author": "Obi-Wan Kenobi",
        "content": "Be mindful of your thoughts, Anakin, they betray you.",
        "private": true,
        "recipient": "Anakin Skywalker",
    }
]