import MeetupDetail from "../../components/meetups/meetupDetail";

export default function MeetupDetails() {
	return (
		<MeetupDetail
			id={"m1"}
			title={"this is my first meetup"}
			image={"/images/Auchi_central_mosque.jpg "}
			address={" 13, kgb street elliot bus stop"}
			description={"this is my first meet up upload"}
		/>
	);
}

export async function getStaticPaths(){

	return{
		fallback:false,
		paths:[
			{
				params:{
					meetupId:"m1"
				}
			},
			{
				params:{
					meetupId:"m2"
				}
			}
		]
	}

}


export async function getStaticProps(context) {
	// fetch data from api
	const meetupId = context.params.meetupId
	console.log(meetupId)

	return {
		props:{
			MeetupData: {
				id: {meetupId},
				title: "this is my first meetup",
				image: "/images/Auchi_central_mosque.jpg ",
				address: " 13, kgb street elliot bus stop",
				description: "this is my first meet up upload",
			},
		}
	};
}
