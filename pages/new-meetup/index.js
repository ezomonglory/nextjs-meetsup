// ourdomain/new-meetup.com
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";


export default function NewMeetUpFormPage() {
	async function onAddMeetUpHandler(meetup) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(meetup),
			headers:{"content-type": "application/json"},
		})
		
		const data = await response.json()

		console.log(data)
	}

	return <NewMeetUpForm onAddMeetup={onAddMeetUpHandler} />;
}
