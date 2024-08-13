import NavBar from "../navbar";
import Footer from "../footer";



function Root({ children }) {
	return (
		<>
			<NavBar></NavBar>
			{children}
			<Footer></Footer>
            

			
		</>
	);
}

export default Root;