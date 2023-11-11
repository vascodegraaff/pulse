import { google, calendar_v3 } from 'googleapis';
import { env } from 'process';

export default async function handler(req, res) {

	const API_KEY = env.GOOGLE_API_KEY;

	const calendar = google.calendar({
	version: "v3",
	auth: API_KEY
	});
	console.log("API CALL MADE!");

	try {
	    const response = await calendar.events.list({
	       calendarId: 'primary',
	    });

	    res.status(200).json(response.data);
	  } catch (error) {
	    console.error('Error fetching events:', error);
	    res.status(500).json({ error: 'Internal Server Error' });
	  }
	
}



