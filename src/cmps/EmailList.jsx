import { EmailPreview } from "./EmailPreivew"

export const EmailList = ({emails}) => {
    console.log('emails',emails)
    return (
        <section className="email-list">
            {emails.map(email => <EmailPreview key={email.id} email={email}/>)}
        </section>
    )
}


// export const AppFooter = () => {
//     return (
//       <section className='app-footer-container'>
//         <div className='app-footer container'>Copyrights &copy; from 2023 by Yuval Shmukler</div>
//       </section>
//     )
//   }
  