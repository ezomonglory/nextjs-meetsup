import { MongoClient } from "mongodb";

//  url = /api/new-meetup
// only POST /api/new-meetup

export async function handler(req, res) {
	if (req.method === "POST") {
        const data = req.body;
        console.log(data)

		const client = await MongoClient.connect(
			"mongodb+srv://ezomonglory:tnomsiacmc@ss3@cluster0.2g0t9e3.mongodb.net/meetups?retryWrites=true&w=majority",
		);

		const db = client.db();

		const meetupCollection = db.collection("meetups");

		const result = await meetupCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: "MeetUp inserted" });
	}
}
