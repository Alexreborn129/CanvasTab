import ical from "node-ical";

const url =
	"https://experiencia21.tec.mx/feeds/calendars/user_r2gc834mbamLm03Tzf2zVl9bBjFkZKMI1gHYVOsm.ics";

async function getCalendar() {
	const data = await ical.async.fromURL(url);

	const events = [];
	for (const j in data) {
		const i = data[j];
		if (i.type === "VEVENT") {
			events.push({
				title: i.summary,
				descripcion: i.descripcion,
				start: i.start,
				end: i.end,
			});
		}
	}

	return events;
}

getCalendar().then((events) => {
	console.log(events);
});
