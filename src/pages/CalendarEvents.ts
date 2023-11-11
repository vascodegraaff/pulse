class GoogleCalendarEvent {
  // Warning: No support for timezones yet!
  public id: string;
  public summary: string;
  public start: Date;
  public end: Date;
  public description: string;

  constructor(id: string, summary: string, start: Date, end: Date, description: string) {
    this.id = id;
    this.summary = summary;
    this.start = start;
    this.end = end;
    this.description = description;
  }

  get duration(): number {
    // Calculate difference in ms!
    return this.end.getTime() - this.start.getTime();
  }

}

class ScheduleGap {
  public start: Date;
  public end: Date;

  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
  }
  get duration(): number {
    return this.end.getTime() - this.start.getTime();
  }
}

export {GoogleCalendarEvent, ScheduleGap};