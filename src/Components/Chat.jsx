import React, { useContext, useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import AuthContext from "../Auth/AuthContext";

const Chat = props => {
    const auth = useContext(AuthContext);
    const {msgs, setMsgs, socket} = props;
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        socket.on('sendMsg', data => {
            setMsgs((msgs) => [...msgs, data])
        })
        return () => socket.off('sendMsg')
    }, [])
    
    const onSubmitHandler = e => {
        e.preventDefault();
        socket.emit('chat', {
            sender: auth.user._id,
            name: auth.user.firstName,
            text: msg
        });
        setMsg('')
    }
    
    return (
        <>
            <div className="row justify-content-center my-3">
                <div className="col col-md-6 col-xl-4">
                    <form onSubmit={onSubmitHandler}>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="put yer message 'ere" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                            <Button variant="outline-info" id="button-addon2">Send</Button>
                        </InputGroup>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-6 col-xl-4">
                    {msgs.map((message, idx) => <p key={idx} className={message.sender === auth.user._id 
                        ? "text-end" : "text-start"}><span className="text-muted">{message.name}
                        :</span> <br />{message.text}</p>)}
                </div>
            </div>
        </>
    )
}

export default Chat;