import React, { useContext, useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Row, Col } from "react-bootstrap";
import AuthContext from "../Auth/AuthContext";

const Chat = props => {
    const auth = useContext(AuthContext);
    const {msgs, setMsgs, socket} = props;
    const [msg, setMsg] = useState('');
    
    const msgBox = {
        boxSizing:"border-box",
        maxHeight: "500px",
        overflow: "auto"
    }

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
            <Row className="my-3">
                <Col>
                    <form onSubmit={onSubmitHandler}>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Aa" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                            <Button variant="outline-info" id="button-addon2">Send</Button>
                        </InputGroup>
                    </form>
                </Col>
            </Row>
            <Row style={msgBox} className="justify-content-center">
                <div>
                        {msgs.map((message, idx) => <p key={idx} className={message.sender === auth.user._id 
                            ? "text-end" : "text-start"}><span className="text-muted">{message.name}
                            :</span> <br />{message.text}</p>)}
                </div>
            </Row>
        </>
    )
}

export default Chat;