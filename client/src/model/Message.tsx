export interface Message {
    id: number;
    author: string;
    recipient: string;
    private: boolean;
    content: string;
}