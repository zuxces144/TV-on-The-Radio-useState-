import './sidebar.css';
import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'

/*function setActiveAlbum()
{
    document.getElementsByClassName("albums")[0].classList.remove("hidden") ;
    document.getElementsByClassName("about")[0].classList.add("hidden");
}

function setActiveAbout()
{
    document.getElementsByClassName("about")[0].classList.remove("hidden") ;
    document.getElementsByClassName("albums")[0].classList.add("hidden");
}*/

export function Sidebar() {
    const [activeTab, setActiveTab] = useState('about'); //useState

    useEffect(() => {
        console.log(`Состояние страницы изменилось на ${activeTab}`);
    }, [activeTab]);

    return (
        <div className="container">
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    <li><a href="#" className="sidebar-link" id="aboutGroupButton" onClick={() => setActiveTab('about')}>О Группе</a></li>
                    <li><a style={{textAlign: "center"}} href="#" className="sidebar-link"  id="albumsButton>Альбомы" onClick={() => setActiveTab('album')}>Любимые треки</a></li>
                </ul>
            </nav>
        </aside>

            <div className={"content"}>
                {activeTab === 'about' && (
                    <div className="about">
                        <h1 style={{ textAlign: 'center', fontSize: '64px' }}>TV On The Radio</h1>
                        <p>
                            If you think about how hard it is to maintain any creative musical pursuit over time, to evolve a sound across several albums and many years, to stay fresh and engaged along the way, to aim for something beyond yourself and still have plenty to say...well, then, TV On The Radio's 23-year run is nothing short of a miracle. Experimentation, curiosity and intention are the chromosomes that comprise the band's DNA and, along with a little alchemy, it's resulted in a more-than-two-decade run as one of America's most original bands. Which is all to say that to have TV On The Radio present in the year of our lord 2024 - 20 years after their debut album, a decade since their last - is an absolute blessing.
                            Since its inception, TV On The Radio has always been hard to categorize. But that has been by design. To be beyond contextualization, a band of contradiction: their music sounds both boundless and intimate, wandering and purposeful, songs illustrating courage and fear at once. That tension is at the heart of who they are, even as they continued to morph and evolve their sound through five albums.
                        </p>
                    </div>
                )}
                {activeTab === 'album' && (<div className="albums">
                    <ReactPlayer class="player" controls={true} url='https://youtu.be/qHX-FKTV8Rk?si=U4zK4Ro11QL1TpZO' id={"track1"}/>
                    <ReactPlayer class="player" controls={true} url='https://youtu.be/xZl-ssLKyPE?si=UR8Hv1L58plPLn5w' id={"track2"}/>
                    <ReactPlayer class="player" controls={true} url='https://youtu.be/E6qCnRe3KDw?si=TUjWeH6jfT9lLpc2' id={"track3"}/>
                </div>)}


            </div>
        </div>
    );
}