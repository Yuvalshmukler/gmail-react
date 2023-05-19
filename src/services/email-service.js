import { storageService } from './storage.service.js'

export const emailService = {
    getEmails,
    query,
    getById
}
const STORAGE_KEY = 'emails'
const gDefaulteEmails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e104',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e105',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }
]

var gEmails = _loadEmails()

function query() {
    return [
        {
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e102',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e103',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e104',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e105',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        }
    ]
}
function getEmails() {
    return [
        {
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e102',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e103',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e104',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e105',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        }
    ]
}
function getById(id) {
    const email = gEmails.find(email => email.id === id)
    console.log(email);
    return Promise.resolve({ ...email })
}
function _loadEmails() {
    let emails = storageService.load(STORAGE_KEY)
    if (!emails || !emails.length) emails = gDefaulteEmails
    storageService.store(STORAGE_KEY, emails)
    return emails
}
