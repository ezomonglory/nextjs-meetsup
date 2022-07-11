import classes from "../meetups/meetupDetail.module.css"
import Image from "next/image";

export default function MeetupDetail(props) {
	return (
        <section className={classes.detail}>
			<Image src={props.image} width={600} height={500} />
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
        </section>
	);
}