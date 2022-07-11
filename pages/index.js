import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const dummy_meetup = [
	{
		id: "m1",
		title: "this is my first meetup",
		image: "/images/Auchi_central_mosque.jpg ",
		address: " 13, kgb street elliot bus stop",
		description: "this is my first meet up upload",
	},

	{
		id: "m2",
		title: "this is my second meetup",
		image: "/images/Auchi_central_mosque.jpg ",
		address: " 13, kgb street elliot bus stop",
		description: "this is my second meet up upload",
	},
];

export default function Home(props) {
	return <MeetupList meetups={props.meets} />;
}

export  async function getStaticProps() {
	// fetch a data 
	return{
		props:{
			meets: dummy_meetup 
		}
	}

}