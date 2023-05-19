import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { emailService } from '../services/email-service';
import { loadEmails, setEmail } from '../store/actions/emailActions';

export function EmailDetails(props) {
    console.log('deatils');
    const [email, setEmail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadEmail()
    }, [params.id])
    async function loadEmail() {
        try {
            console.log('params', params)
            const email = await emailService.getById(params.id)
            console.log('email', email)
            setEmail(email)
        } catch (error) {
            console.log('error', error)
        }
    }

    function onBack() {
        navigate('/')
    }

    if (!email) return <div>Loading...</div>
    return (
        <section className='email-details'>
            <span>{email.subject}</span>
            <button onClick={onBack}>Back</button>
        </section>
    )
}
