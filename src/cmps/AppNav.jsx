// import { utilService } from "../services/util-aervice"

const nav = [
    { name: 'Inbox', img: 'https://res.cloudinary.com/dynulj6f2/image/upload/v1683917853/inbox_fill_baseline_p900_20dp_hktfhm.png' },
    { name: 'Starred', img: 'https://res.cloudinary.com/dynulj6f2/image/upload/v1683917811/star_baseline_nv700_20dp_hz4gc1.png' },
    { name: 'Important', img: 'https://res.cloudinary.com/dynulj6f2/image/upload/v1683917804/label_important_baseline_nv700_20dp_ckiiyr.png' },
    { name: 'Sent', img: 'https://res.cloudinary.com/dynulj6f2/image/upload/v1683917797/send_baseline_nv700_20dp_qorq3g.png' },
    { name: 'Drafts', img: 'https://res.cloudinary.com/dynulj6f2/image/upload/v1683917789/draft_baseline_nv700_20dp_ekjz4q.png' }
]
export const AppNav = () => {
    return (
        <section className='app-nav'>
            {nav.map(link =>
                <div key={link.name} className="app-nav-item">
                    <img src={link.img} alt="" />
                    <span>{link.name}</span>
                </div>
            )}
        </section>

    )
}
