import "./styles.css"
import BigCard from "../bigCard"
import SmallCard from "../smallCard"
import BigBreadcrumb from "../bigBreadcrumb"


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
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
        </div>
        <div className="thirdContainer"></div>
    </div>

    
    
    </>
    )

}



export default MainContainer