import "./styles.css"
import BigCard from "../bigCard"
import SmallCard from "../smallCard"
import BigBreadcrumb from "../bigBreadcrumb"
import ServicesCard from "../servicesCard"
import ProfilesCard from "../profilesCard"
import NumbersCard from "../numbersCard"
import ContactCard from "../workToCard"


const MainContainer = () => {

return (
    <>
    
    <div className="mainContainer">
        <div className="firstContainer">
            <BigCard></BigCard>
            <div className="smallcard-breadcrumb-container">
                <div className="breadcrumb-container">
                <BigBreadcrumb></BigBreadcrumb>
                </div>
                <div className="smallcards-container">
                <SmallCard title="Credentials" subtitle="More About Me"></SmallCard>
                <SmallCard title="Projects" subtitle="Showcase"></SmallCard>
                </div>
            </div>
        </div>
        <div className="secondContainer">
            <SmallCard title="GFonts" subtitle="Blog"></SmallCard>
            <ServicesCard title="Services Offering" subtitle="Specialization"></ServicesCard>
            <ProfilesCard title="Profiles" subtitle="Stay With Me"></ProfilesCard>
        </div>
        <div className="thirdContainer">
        <NumbersCard></NumbersCard>
        <ContactCard></ContactCard>
       
        </div>
    </div>

    
    
    </>
    )

}



export default MainContainer