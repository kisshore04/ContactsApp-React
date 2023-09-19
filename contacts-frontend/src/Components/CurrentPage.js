import axios from 'axios';
import React, { useEffect, useState } from 'react'


function CurrentPage() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        showContacts();
    }, [])


    const showContacts = async () => {
        let token = sessionStorage.getItem("authToken")
        try {
            if (!token) {
                return (
                    <h1> User is not authenticated </h1 >
                );
            }
            const listedContacts = await axios.get('http://localhost:5001/api/contacts', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUserData(listedContacts)
            console.log(listedContacts)
        }
        catch (error) {
            console.error("Server not responding!", error)
        }
    }
    return (
        <div>
            {userData.map((contact) => {
                return (
                    <div key={contact.email}>
                        <div>{contact.name}</div>
                        <div>{contact.phone}</div>
                    </div>
                )
            })}


        </div>

    )
}

export default CurrentPage