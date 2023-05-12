import { AppNav } from "../cmps/AppNav"
import { EmailList } from "../cmps/EmailList"
export const Home = () => {
    return (
        <section className="home-page">
            <AppNav></AppNav>
            <EmailList />
        </section>
    )
}