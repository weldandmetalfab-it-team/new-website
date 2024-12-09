import './aboutus.css';
import image from '../assets/Welding-Fabrication.webp';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';

function TeamCard({ name, bio, img }) {
    return (
        <div className="profile col-12 col-sm-6 col-lg-3">
            <img src={img} alt={`${name} profile`} className="profile-image img-fluid" />
            <div className="info">
                <h2 className="name">{name}</h2>
                <p className="bio">{bio}</p>
                <div className="team_icon">
                    <i className="bi bi-instagram" aria-label="Instagram"></i>
                    <i className="bi bi-messenger" aria-label="Messenger"></i>
                    <i className="bi bi-twitter" aria-label="Twitter"></i>
                </div>
            </div>
        </div>
    );
}


export default function About() {
    const teamMembers = [
        { name: 'Mike', bio: '15 years of experience in welding and fabrication.', img: team1 },
        { name: 'Tom Smith', bio: '10+ years of skilled welding expertise.', img: team2 },
        { name: 'Mark Smith', bio: 'Passionate about high-quality metalwork.', img: team3 },
        { name: 'John Doe', bio: 'Experienced in various welding techniques.', img: team4 },
    ];
    

    return (
        <div className="container-fluid">
            <section className="about">
                <div className="about_container_head text-center ">
                    <h1 className="head">About Us</h1>
                    <p className="head-content">Let’s Build Something Great Together</p>
                </div>
                <div className="about-card d-flex flex-column flex-md-row p-5">
                    <div className="ab-card p-3">
                        <p className="card-text">
                            <span className="company-name">Weld and Metal Fabrication Pvt. Ltd</span> in Chennai provides 
                            top-quality metal fabrication and process documentation services for industrial and non-commercial clients. 
                            We offer Non MOQ (NO Minimum Order Quantity Metals and Metal Products) service which enables our esteemed 
                            customers to use resources as little as needed and save significantly on their investment. 
                            "Why wander everywhere when WELD & METAL FAB can actually do the job for you?" We acquire materials for you, 
                            resize according to your needs, fabricate and deliver them to your doorstep. Our experienced team of 
                            professionals utilizes the latest technology and equipment to ensure precise and efficient fabrication services.
                        </p>
                    </div>
                    <img src={image} alt="Fabrication work" className="image img-fluid d-none d-md-block" />
                </div>
            </section>

            <section className="team">
                <header className="team-head-content text-center">
                    <h1 className="team-head">Our<span> Team</span></h1>
                    <p className="team-head-content">Meet the people behind the magic</p>
                </header>
                <div className="team-card row gx-4 gy-4">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </section>
        </div>
    );
}
