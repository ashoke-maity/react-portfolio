import kumarsanujr from './assets/kumar sanu jr.jpg';
import christmas from './assets/sanskaran christmas.png';
import diwali from './assets/sanskaran diwali poster.png';
import gdsc_poster from './assets/robotics session.png';
import republic_day from'./assets/republic day poster final.png';
import gurunanak_jayanti from './assets/gurunanak poster.png';
import enthusia_poster from './assets/enthusia 11.o.png';
import nritakshya_poster from './assets/nritakshya.png';
import phoenix_poster from './assets/phoenix.png';
import aritram_poster from './assets/aritram.png';
import freshers_poster from './assets/freshers poster.png';
import mahalaya_poster from './assets/mahalaya poster.png';


import weekend_edit from './assets/weekend edit.m4v';
import weekend_edit_thumbnail from './assets/weekend edit thumbnail.png';
import spiderman_edit from './assets/spider man edit.m4v';
import spiderman_edit_thumbnail from './assets/spider man thumbnail.jpeg';
import esport_edit_thumbnail from './assets/Galaxy Esports PUBG tournament thumbnail.png';
import esport_edit from './assets/promo video for galaxy esports.m4v';
import college_freshers_edit from './assets/enthusia 10.o teaser.m4v';
import college_freshers_thumbnail from './assets/college freshers party thumbnail.png';
import college_fest_edit from './assets/date announcement for sahotsava 2023.mp4';
import college_fest_thumbnail from './assets/college annual cultural fest with dance, singing, street dance, Bollywood dance, drama.png';
import Gdsc_edit from './assets/Gdsc Orientation Trailer 1.m4v';
import Gdsc_edit_thumbnail from './assets/Google Developers Student Clubs orientation thumbnail.png';

function Portfolio() {    
    return (
        <section id="my-work">
            <div className="work-container">
                <h2 className="section-title">Portfolio</h2>

                {/* Graphic Design Work */}
                <div className="work-category">
                    <h3>Designs</h3>
                    <div className="work-grid1">
                        {/* Graphic Design Project 1 */}
                        <div className="work-item">
                            <img src={christmas} alt="Christmas Poster" />
                            <div className="work-info">
                                <h4>Christmas Poster</h4>
                                <p>I designed this Christmas poster for my college's cultural club, using Photoshop.
                                    The project involved photo manipulation techniques to create a festive and visually engaging design,
                                    combining various elements to bring out the holiday spirit.</p>
                            </div>
                        </div>
                        {/* Graphic Design Project 2 */}
                        <div className="work-item">
                            <img src={kumarsanujr} alt="Artist Poster" />
                            <div className="work-info">
                                <h4>Artist Poster</h4>
                                <p>I created this poster for Kumar Sanu Junior, who was invited to perform at our annual cultural fest.
                                    The design was crafted to capture the essence of the event and the artist,
                                    using Photoshop to enhance the overall visual appeal.</p>
                            </div>
                        </div>
                        {/* Graphic Design Project 3 */}
                        <div className="work-item">
                            <img src={diwali} alt="Diwali Poster" />
                            <div className="work-info">
                                <h4>Diwali Poster</h4>
                                <p>I designed this Diwali poster for our cultural club's Instagram post.
                                    Using vibrant colors and festive elements, I aimed to capture the spirit of the festival.
                                    The poster was created in Photoshop, utilizing photo manipulation techniques to bring the
                                    concept to life.</p>
                            </div>
                        </div>
                    </div>

                    <div className="work-grid2">
                        {/* Graphic Design Project 4 */}
                        <div className="work-item">
                            <img src={gdsc_poster} alt="GDSC Session Poster" />
                            <div className="work-info">
                                <h4>Google Developer Student Clubs Session Poster</h4>
                                <p>As a core member of the Video Editing and Graphic Designing teams for Google Developer Student Clubs (GDSC),
                                    I created this poster using Photoshop to announce a session. The design aimed to be visually
                                    appealing while conveying all essential information clearly, leveraging my skills in graphic design and layout.</p>
                            </div>
                        </div>
                        {/* Graphic Design Project 5 */}
                        <div className="work-item">
                            <img src={republic_day} alt="Republic Day Poster" />
                            <div className="work-info">
                                <h4>Republic Day Poster</h4>
                                <p>I designed this Republic Day poster for our college's cultural club Instagram page. Using Photoshop,
                                    I focused on incorporating patriotic elements and vibrant colors to capture the spirit of the occasion,
                                    ensuring the design was engaging and reflective of the event.</p>
                            </div>
                        </div>
                        {/* Graphic Design Project 6 */}
                        <div className="work-item">
                            <img src={gurunanak_jayanti} alt="Guru Nanak Jayanti Poster" />
                            <div className="work-info">
                                <h4>Guru Nanak Jayanti Poster</h4>
                                <p>I created this Guru Nanak Jayanti poster for our college's cultural club Instagram post.
                                    Using Photoshop, I incorporated traditional and symbolic elements to honor the occasion,
                                    delivering a visually appealing and respectful design to commemorate the celebration.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hidden Grid Initially */}
                <div className="work-grid3 hidden">
                    {/* Graphic Design Project 7 */}
                    <div className="work-item">
                        <img src={enthusia_poster} alt="Freshers Coming Soon Poster" />
                        <div className="work-info">
                            <h4>Freshers Coming Soon Poster</h4>
                            <p>I designed this 'Freshers Coming Soon' hype poster for our college's cultural club to build excitement for the
                                upcoming event. Using bold visuals and eye-catching colors in Photoshop,
                                I created a vibrant poster that captured the energetic and welcoming vibe of the college freshers.</p>
                        </div>
                    </div>
                    {/* Graphic Design Project 8 */}
                    <div className="work-item">
                        <img src={nritakshya_poster} alt="Classical Dance Audition Poster" />
                        <div className="work-info">
                            <h4>Classical Dance Audition Poster</h4>
                            <p>I created this Classical Dance Audition poster for our college's cultural club to promote auditions for the event.
                                The design highlights traditional elements, using a refined color palette and intricate visuals in
                                Photoshop to reflect the elegance and grace of classical dance.</p>
                        </div>
                    </div>
                    {/* Graphic Design Project 9 */}
                    <div className="work-item">
                        <img src={phoenix_poster} alt="Fashion Audition Poster" />
                        <div className="work-info">
                            <h4>Fashion Audition Poster</h4>
                            <p>I designed this Fashion Audition poster for our college's cultural club,
                                focusing on modern and stylish elements to capture the essence of fashion. Using Photoshop and Canva,
                                I combined bold typography with sleek visuals to create an eye-catching and trendy poster that
                                invites students to participate in the auditions.</p>
                        </div>
                    </div>
                </div>

                <div className="work-grid4 hidden">
                    {/* Graphic Design Project 10 */}
                    <div className="work-item">
                        <img src={aritram_poster} alt="Anchoring Audition Poster" />
                        <div className="work-info">
                            <h4>Anchoring Audition Poster</h4>
                            <p>I created this Anchoring Audition poster for our college's cultural club, using Canva. The engaging design
                                reflects the energy and excitement of anchoring. Through the use of bold colors and clear, impactful typography,
                                the poster was crafted to attract attention and encourage students to showcase their speaking talents.</p>
                        </div>
                    </div>
                    {/* Graphic Design Project 11 */}
                    <div className="work-item">
                        <img src={freshers_poster} alt="Fresher Date Announcement Poster" />
                        <div className="work-info">
                            <h4>Fresher Date Announcement Poster</h4>
                            <p>I designed the Fresher Date Announcement poster for our college to inform incoming students about the
                                exciting event. The poster features vibrant colors and engaging graphics to create an inviting atmosphere,
                                ensuring that new students feel welcomed and eager to participate in the festivities.</p>
                        </div>
                    </div>
                    {/* Graphic Design Project 12 */}
                    <div className="work-item">
                        <img src={mahalaya_poster} alt="Mahalaya Poster" />
                        <div className="work-info">
                            <h4>Mahalaya Poster</h4>
                            <p>I created the Mahalaya poster to celebrate the auspicious occasion,
                                which marks the beginning of the Durga Puja festivities.
                                The poster features traditional motifs and rich colors to evoke the cultural significance of the event,
                                aiming to resonate with the spirit of devotion and celebration in our community.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Editing Work */}
            <div className="work-categoryvideo">
                <h3>Video Edits</h3>
                <div className="work-grid6">
                    {/* Video Editing Project 1 */}
                    <div className="work-item">
                        <video controls poster={weekend_edit_thumbnail}>
                            <source src={weekend_edit} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="work-info">
                            <h4>The Weekend Short Edit</h4>
                            <p>As a huge fan of The Weeknd, I created this Instagram short edit to showcase his iconic moments.
                                The video blends vibrant transitions, dynamic cuts, and subtle effects that sync with the energy of the music.
                                This project reflects my passion for video editing and storytelling through visuals that
                                complement the artistry of The Weeknd.</p>
                        </div>
                    </div>
                    {/* Video Editing Project 2 */}
                    <div className="work-item">
                        <video controls poster={spiderman_edit_thumbnail}>
                            <source src={spiderman_edit} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="work-info">
                            <h4>Spider-Man Short Edit</h4>
                            <p>This video edit is inspired by my admiration for Spider-Man and the creativity of other editors.
                                Utilizing AMV (Anime Music Video) styles, I crafted this edit to highlight thrilling moments and character dynamics,
                                incorporating energetic music and seamless transitions that capture the essence of Spider-Man’s adventures.
                                This project demonstrates my ability to blend storytelling and visual artistry in video editing.</p>
                        </div>
                    </div>
                    {/* Video Editing Project 3 */}
                    <div className="work-item">
                        <video controls poster={esport_edit_thumbnail}>
                            <source src={esport_edit} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="work-info">
                            <h4>Esports Promotion Video</h4>
                            <p>I created this promotional video for my own esports company, aimed at showcasing our brand and inviting
                                players to join. The edit features dynamic gameplay footage, engaging graphics, and impactful sound design
                                to create an exhilarating viewing experience that reflects the excitement of esports.
                                This project allowed me to explore branding and promotional video editing.</p>
                        </div>
                    </div>
                </div>
                <div className="work-grid7">
                    {/* Video Editing Project 4 */}
                    <div className="work-item">
                        <video controls poster={Gdsc_edit_thumbnail}>
                            <source src={Gdsc_edit} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="work-info">
                            <h4>Google developer students club orientation</h4>
                            <p>For the Google Developer Students Club orientation video, I created an engaging edit showcasing the club's 
                                activities, vision, and opportunities for students to get involved. As a core member of GDSC in 2023, 
                                specifically handling the video editing domain, I crafted the video to effectively 
                                represent the energy and innovation of the club, helping to inspire new members during the orientation event.</p>
                        </div>
                    </div>
                    {/* Video Editing Project 5 */}
                    <div className="work-item">
                        <video controls poster={college_freshers_thumbnail}>
                            <source src={college_freshers_edit} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="work-info">
                            <h4>College Freshers Trailer</h4>
                            <p>As a coordinator for my college's cultural club, I edited this trailer to announce the date for the freshers' event.
                                The video combines exciting visuals and music to create an engaging introduction,
                                ensuring that new students feel welcomed and excited about the upcoming event.
                                This project enhanced my skills in event promotion and video storytelling.</p>
                        </div>
                    </div>
                    {/* Video Editing Project 6 */}
                    <div className="work-item">
                        <video controls poster={college_fest_thumbnail}>
                            <source src={college_fest_edit} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="work-info">
                            <h4>Sahotsava Cultural Fest Trailer</h4>
                            <p>This video edit was created to announce the date for our annual cultural fest, Sahotsava.
                                The trailer features highlights from previous fests, capturing the energy and excitement of the event.
                                My goal was to create a visually appealing and informative piece that invites participation from students
                                while showcasing the vibrant atmosphere of our cultural celebrations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
