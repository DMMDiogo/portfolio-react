import "./styles.css"
import BigCard from "../bigCard"
import SmallCard from "../smallCard"
import TextOnlyCard from "../textOnlyCard"
import ProfilesCard from "../profilesCard"
import ContactCard from "../workToCard"
import ImageContainer from "../imageCard"
import BiographCard from "../biographCard"
import StarIcon from "../../assets/star.svg"


const AboutContainer = () => {

return (
    <>
    
    <div className="mainContainer">
        <div className="firstContainer">
            <ImageContainer></ImageContainer>
            <div className="smallcard-breadcrumb-container biosection">
                <div className="smallcards-container">
                <h2 className="headerBio"> <img src={StarIcon}></img>SELF-SUMMARY <img src={StarIcon}></img></h2>
                </div>
                <div className="smallcards-container biographcard">
                <BiographCard></BiographCard>
                
                </div>
            </div>
        </div>
        <div className="secondContainer">
        <TextOnlyCard title="EXPERIENCE" subtitle="2007 - 2017" titleTwo="Framer Designer & Developer" subtitleTwo="Bluebase Designs" titleThree="Front-End Developer" subtitleThree=" Larsen & Toubro"></TextOnlyCard>
            <TextOnlyCard title="EDUCATION" subtitle="2004 - 2007" titleTwo="Bachelor Degree in Design" subtitleTwo="University of Aveiro" titleThree="Master Degree in Designing" subtitleThree="University of Aveiro"></TextOnlyCard>
        </div>
        <div className="thirdContainer">
        <ProfilesCard title="Profiles" subtitle="Stay With Me"></ProfilesCard>
        <ContactCard></ContactCard>
        <SmallCard title="Credentials" subtitle="More About Me"></SmallCard>
       
        </div>
    </div>

    
    
    </>
    )

}



export default AboutContainer