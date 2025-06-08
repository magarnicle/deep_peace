import Image from "next/image";
import {get_season, get_day} from "./liturgical_dates";


function Day({season, day}) {
  let colour = "";
  let text = season.season;
  if (day !== null){
     colour = day["colours"]["Lutheran (ELCA)"];
     text = text + " - " + day.day;
  } else {
     colour = season["colours"]["Lutheran (ELCA)"];
  };
  return (
    <body style={{ backgroundColor: colour, width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}><h1>{text}</h1></body>
  );
}

export default function MyApp() {
  let season = get_season(new Date());
  let day = get_day(new Date());
  console.log(season);
  return (
      <Day season={season} day={day}/>
  );
}
