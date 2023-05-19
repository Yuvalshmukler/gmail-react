import { AppNav } from "../cmps/AppNav"
import { Component, useCallback, useEffect, useMemo, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { EmailList } from "../cmps/EmailList"
import { loadEmails } from "../store/actions/emailActions"

export const Home = () => {
    const emails = useSelector((storeState) => storeState.emailModule.emails)
    const dispatch = useDispatch()
    console.log('emails',emails)
    useEffect(() => {
        dispatch(loadEmails())
    }, [])

    return (
        <section className="home-page">
            <AppNav />
            <EmailList emails={emails} />
        </section>
    )
}