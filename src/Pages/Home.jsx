import React from 'react'
import Header from "../components/Home/HomeHeader";
import ServiceCards from "../components/Home/HomeServiceCards";
import FeaturesSection from "../components/Home/HomeFeaturesSection";
import StatsAndLuckSection from "../components/Home/HomeStatsAndLuckSection";
import Review from "../components/Home/HomeReview";


const Home = () => {
	return (     
	<div className="Home">
		<Header />
		<ServiceCards />
		<FeaturesSection />
		<StatsAndLuckSection />
		<Review />
	</div> 
	);
}

export default Home
