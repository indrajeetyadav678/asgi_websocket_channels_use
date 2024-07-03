import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Chatbox = () => {
    const data = useSelector(state => state.mylogdata?.user_data);
    console.log("User data:", data);

    const [username, setUsername] = useState("null");
    const dispatch = useDispatch();
    const [input, setInput] = useState({});
    const [val, setVal] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const user_id = data[0]["user_id"];
            setUsername(user_id);
            setInput(prevInput => ({ ...prevInput, user_id }));
            console.log("Username set:", user_id);
        }
    }, []);

    const inputhandle = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({ ...prevInput, [name]: value }));
    };

    const load = () => {
        const url = "http://127.0.0.1:8000/chat/";
        axios.get(url).then(res => {
            setVal(res.data);
        });
    };

    const submithandle = () => {
        const url = "http://127.0.0.1:8000/chat/";
        axios.post(url, input).then(res => {
            alert("Message Successfully Sent");
        });
    };

    useEffect(() => {
        load();

        const ws = new WebSocket('ws://127.0.0.1:8000/ws/chat/');
        // ws.load()

        ws.onopen = () => {
            load()
            console.log('WebSocket connection established');
        };

        ws.onmessage = (event) => {
            console.log(event)
            const newMessage = JSON.parse(event.data);
            setVal(prevVal => [...prevVal, newMessage]);
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = (event) => {
            console.log('WebSocket connection closed:', event);
        };

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, []);

    let anser = val.map(key => {
        return (
            <div className="chatmsgdata">{key.msg}</div>
        );
    })

    return (
        <>
            <h3 style={{ textAlign: "center", fontSize: "30px" }}>Chat</h3><br />
            <div className='chatcontainer'>
                {anser}

            </div>
            <div className='msg_input_container'>
                <div className='register_wrapperchat'>
                    <input
                        type="text"
                        className='input_fieldchat'
                        name="user_id"
                        value={username}
                        placeholder='Enter User_Id'
                        // readOnly
                        hidden
                    /><br /><br />
                    <input
                        type="text"
                        className='input_fieldchat'
                        name="msg"
                        value={input.msg || ""}
                        placeholder='Enter Message'
                        onChange={inputhandle}
                    />
                    <button type='submit' className='msgsend' onClick={submithandle}>Send</button>
                </div>
            </div>
        </>
    );
};

export default Chatbox;
