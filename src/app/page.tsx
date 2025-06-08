import {get_season, get_day, Season, Day} from "./liturgical_dates";

interface DayProps {
  season: Season | null;
  day: Day | null;
}

function DayInfo({season, day}: DayProps) {
  let colour = "";
  let text = "";
  if (season !== null){
    text = season.season;
  };
  if (day !== null && day["colours"] !== null){
     colour = day["colours"]["Lutheran (ELCA)"][0];
     text = text + " - " + day.day;
  } else if (season !== null && season["colours"] !== null){
     colour = season["colours"]["Lutheran (ELCA)"][0];
  } else {
     colour = "white";
  };
  return (
    <body style={{ backgroundColor: colour, width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}><h1>{text}</h1></body>
  );
}

export default function MyApp() {
  const season = get_season(new Date());
  const day = get_day(new Date(), true);
  console.log(season);
  console.log(day);
  return (
      <DayInfo season={season} day={day}/>
  );
}
