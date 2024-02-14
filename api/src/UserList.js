import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Card } from 'react-bootstrap';

const UserList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                setError(error);
                console.log(error);
            });
    }, []);

    return (
        <div className="user-list-container">
            <h1>List of Users</h1>
            
            {data.map(user => (
                <Card key={user.id} className="user-card">
                    
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            Email: {user.email}
                        </Card.Text>
                        <Card.Text>
                            Phone: {user.phone}
                        </Card.Text>
                        
                    </Card.Body>

                </Card>
                
            ))}</div>
    );
};

export default UserList;
