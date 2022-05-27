import React, {useState, useEffect, useContext} from "react";
import io from 'socket.io-client';
import Chat from "../Components/Chat";
import AuthContext from "../Auth/AuthContext";
import { Col, Row } from "react-bootstrap";

const Messenger = props => {
    const [users, setUsers] = useState([]);
    const [socket] = useState(() => io(':8000'));
    const [msgs, setMsgs] = useState([]);
    const auth = useContext(AuthContext);
    useEffect( () => {
        socket.emit('User', {
            _id: auth.user._id,
            name: `${auth.user.firstName} ${auth.user.lastName}`
        });
        socket.on('welcome', data => {
            console.log(data.message);
            console.log(data.onlineUsers);
            setUsers(data.onlineUsers)
        });
        socket.on('newMsg', newMsg => setMsgs(m => {
            return [...m, newMsg];
        })
        );
        return () => socket.disconnect(true);
    }, [])

    return (
        <>
            <Row className="justify-content-center">
                <Col md='4' className="text-start">
                    <div className="lead">Users Online</div>
                    <ul className="list-unstyled">
                        {users.length > 0 ? users.map((el, idx) => <li key={idx}>{el.name}</li>)
                            : <li>No Users Online</li>
                        }
                    </ul>
                </Col>
                <Col md='6'>
                    <Chat msgs={msgs} setMsgs={setMsgs} socket={socket} />
                </Col>
            </Row>
        </>
    )
}

export default Messenger;