import './aboutus.css';
import image from '../assets/Welding-Fabrication.webp';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';
import review1 from '../assets/review_1.png';
import review2 from '../assets/review_2.png';
import review3 from '../assets/review_3.png';
import review4 from '../assets/review_4.png';

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
function ReviewCard({ img, name, stars, text }) {
    return (
        <div className="review_card">
            <div className="review_profile">
                <img src={img} alt={`${name} review`} />
            </div>
            <div className="review_text">
                <h2 className="name">{name}</h2>
                <div className="review_icon">
                    {stars.map((star, index) => (
                        <i
                            key={index}
                            className={`bi ${
                                star === "full" ? "bi-star-fill" :
                                star === "half" ? "bi-star-half" : 
                                "bi-star"
                            }`}
                        ></i>
                    ))}
                </div>
                <div className="review_social">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-linkedin"></i>
                </div>
                <p>{text}</p>
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
    const reviews = [
        {
            img: review1,
            name: "Emily R.",
            stars: ["full", "full", "full", "full", "half"],
            text: "I absolutely love this store! The variety of craft supplies is amazing...",
        },
        {
            img: review2,
            name: "James T.",
            stars: ["full", "full", "full", "full", "half"],
            text: "Fantastic experience! I ordered some specialty paints for my model-building hobby...",
        },
        {
            img: review3,
            name: "Sophie L.",
            stars: ["full", "full", "full", "full", "half"],
            text: "I've been a loyal customer for a while now, and I’m always impressed with the service...",
        },
        {
            img: review4,
            name: "Michael B.",
            stars: ["full", "full", "full", "full", "half"],
            text: "Great selection of supplies at reasonable prices! I found everything I needed...",
        },
    ];

    return (
        <div className="container-fluid">
            <section className="about">
                <header className="about_container_head text-center">
                    <h1 className="head">About Us</h1>
                    <p className="head-content">Let’s Build Something Great Together</p>
                </header>
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
                    <h1 className="team-head">Our <span>Team</span></h1>
                    <p className="team-head-content">Meet the people behind the magic</p>
                </header>
                <div className="team-card row gx-4 gy-4">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </section>
            <section className="review" id="Review">
                <header className="review-head-content text-center">
                    <h1>Customer <span>Review</span></h1>
                </header>
                <div className="review_box">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </section>
        </div>
    );
}
