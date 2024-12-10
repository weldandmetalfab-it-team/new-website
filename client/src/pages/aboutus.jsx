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
        { name: 'Mike', bio: 'Mike has been working in the welding and metal fab industry for over 10 years. He is passionate about creating quality metal products and enjoys working with his hands.', img: team1 },
        { name: 'Michael Smith', bio: 'Michael has been working in the welding and metal fabrication industry for over 10 years. He is skilled in various welding techniques and is known for his attention to detail and precision in his work.', img: team2 },
        { name: 'Mark Smith', bio: 'Mark Smith is a skilled welder and metal fabricator with over 10 years of experience in the industry. He takes pride in his work and enjoys creating custom metal pieces for various clients.', img: team3 },
        { name: 'John Doe', bio: 'John Doe has been working in the welding and metal fabrication industry for over a decade. He is passionate about creating quality products and takes pride in his work. In his free time, he enjoys working on personal welding projects and spending time with his family.', img: team4 },
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
                            professionals utilizes the latest technology and equipment to ensure precise and efficient fabrication services. We excel in prototyping.consultation and complete research analysis of product manuacturing. which minimizes loss of the product. Our target customer is everyone including start-ups, Corporates, industries, school students, fabrication of projects of students and Small scale prototype if required for clients. Whether it's steel, aluminum, or stainless steel, we have the expertise to handle all your fabrication needs with precision and professionalism. We welcome B-to-B too. We also provide you the R&D files regarding the manufacturing process that help you during mass production of the same parts.
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
