import React from 'react'
import { Link } from 'react-router-dom'

export function EmailPreview({ email }) {
    return (
        <section className='' style={{ backgroundColor: email.isRead ? '#777' : '#fff' }}>
            <Link to={`/email/${email.id}`} className="email-preivew">
                <span>*</span>
                <span>*</span>
                <p>{email.to}</p>
                <p>{email.subject}</p>
                <p>{email.body}</p>
                <span>{email.sentAt}</span>

            </Link>
        </section>
    )
}
