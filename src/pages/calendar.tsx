import { google, calendar_v3 } from 'googleapis';
import { env } from 'process';
import { format } from 'date-fns';
import { GoogleCalendarEvent, ScheduleGap } from './CalendarEvents'
import next from 'next';
import { randomUUID } from 'crypto';

//export default function About() {
//	const a = fetchEvents();
//	console.log(a);
//	return <div>a</div>;
//}

let fetchEvents = async () => {
  const minStartDate = new Date();
  // Subtract 14 days!
  minStartDate.setDate(minStartDate.getDate() - 14);
  const rfc3339Timestamp = format(minStartDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");

  console.log('RFC3339 Timestamp:', rfc3339Timestamp);
  const hardCodedDate= "2023-11-01T10:00:00Z";
  const hardCodedDateMax= "2023-11-10T10:00:00Z";
  
  const url = "https://www.googleapis.com/calendar/v3/calendars/586bq4ov8bpd57jeuc8pthbcbo@group.calendar.google.com/events" + "?timeMin=" + hardCodedDate + "&timeMax=" + hardCodedDateMax;
  
  const options = {
      method: "GET",
      headers: {
        "Content-length":"0",
        "Authorization":"Bearer ya29.a0AfB_byByZIh_0TSHkL6UQ6q2fnEiYDYKZoIkiPmIPJqV-lbo-BhmfYEsJ4-w7lHW6aJ4Eg0-qzK7VcHXAoNAAVwNKPXDk__N6OnGaYloTqrKbK2tO9Pu5rK89ZcrTSb3kLggSPDJ7Rzdh1v1m6QL7fsCdjW4bwsMj9XiaCgYKAWUSARASFQHGX2Mi8y4f_Skd4hiPVTgYRRG79w0171",
      },
  };
  
 const response = await fetch(url, options); 
 return await response.json();
}
let getTimeValue = function (date: Date)  {
  return (date.getHours() * 60*60*1000 + date.getMinutes() * 60 * 1000 + date.getSeconds() * 1000 + date.getMilliseconds());
}

let isLeftEarlierThanRightOnlyTime = function (l: Date, r: Date) {
  // console.log("DOing the check!");
  if(getTimeValue(l) < getTimeValue(r)) {
    return true;
  } 
  return false;
}

// Find gaps (which we make) in the schedule!
const START_OF_DAY = new Date();
START_OF_DAY.setHours(7);
START_OF_DAY.setMinutes(0);
START_OF_DAY.setSeconds(0);
const END_OF_DAY = new Date();
END_OF_DAY.setHours(22);
END_OF_DAY.setMinutes(0);
END_OF_DAY.setSeconds(0);


const addSleepEvents = function (schedule: GoogleCalendarEvent[]){
    const newSchedule = []; 
    for (const evnt of schedule) {
      newSchedule.push(evnt);
    }
    // From first date
    const firstDate = schedule[0]!.end;
    // To last data
    const lastDate = schedule[schedule.length - 1]!.start;
    // Add sleep events :P
    // SHIT PROBLEM: days is actual 24 hour periods, not days if you were to only do the days
    const days = (Math.ceil(lastDate.getTime() / (1000 * 60 * 60 * 24)) - Math.ceil(firstDate.getTime() / (1000 * 60 * 60 * 24)));
    console.log(days)
    for(let i = 0; i < days; i++){
      // 
      const bed = new Date(firstDate);
      bed.setDate(bed.getDate() + i);
      bed.setHours(22, 0, 0, 0);
      const wake = new Date(firstDate);
      wake.setHours(7, 0, 0, 0);
      wake.setDate(wake.getDate() + i + 1);

      // Add sleep event
      const sleepEvent = new GoogleCalendarEvent("id", "sleep", bed, wake, "");
      newSchedule.push(sleepEvent);
    }
    return newSchedule;
  
}

let findGaps = function (schedule: GoogleCalendarEvent[]) {
  const gaps: ScheduleGap[] = [];
  // TODO: consider whole empty days!
  console.log("findGaps:" + schedule.length );
  for (let i = 0; i < schedule.length - 1; i++) {
    const currentEvent = schedule[i];
    const nextEvent = schedule[i + 1];

    // Calculate the time gap between events
    const nextStart = nextEvent!.start; 
    let currentEnd = currentEvent!.end;

    const timeGap = new Date(nextStart).getTime() - new Date(currentEnd).getTime();

    // If the time gap is greater than zero, it's a free time gap
    if (timeGap > 0) 
      gaps.push(new ScheduleGap(currentEnd, nextStart));
    }
  // TODO: IMPORTANT: Add start date and end date for this, now it uses first and last fetched event!
  return gaps;
}

// let scheduleEvent(gaps,)
const CalendarPage =  () => {

  const schedule: GoogleCalendarEvent[] = [];
  // Fetch Google Calendar v3 API
  fetchEvents()
    .then((result) => {
      // console.log(result);
      for (const e of result.items) {
        // console.log(e);
        const fetchedEvent: GoogleCalendarEvent = new GoogleCalendarEvent(e.id, e.summary, new Date(e.start.dateTime), new Date(e.end.dateTime), e.description);
        schedule.push(fetchedEvent);
        // console.log(fetchedEvent);
        // console.log((fetchedEvent.duration / (1000 * 60)) + " minutes");
        // console.log(e);
      }
    })
    .then(() => {
      schedule.sort((a, b) => a.start.getTime() - b.start.getTime());
      let newSchedule = addSleepEvents(schedule);
      newSchedule.sort((a, b) => a.start.getTime() - b.start.getTime());
      console.log(newSchedule);
      const gaps: ScheduleGap[] = findGaps(newSchedule);
      // console.log("There are " + gaps.length + " gaps!");
       for(const gap of gaps) {
        console.log(gap);
        // console.log("found a gap of duration: " + gap.duration / (60*1000) + "minutes");
       }

    })
    .catch((err) => {console.log(err)});
  
  return (
    <div>
      {/* Your calendar content goes here */}
      ECHO!
    </div>
  );
};
// NEXT addition: try to schedule new item in this calendar. Find a gap large enough.
// NEXT addition: try to insert event.
export default CalendarPage;
