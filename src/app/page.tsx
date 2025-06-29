'use client'

import {get_season, get_day, Season, Day} from "./liturgical_dates";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function DateTime() {
    // State to hold the current date and time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Effect to set up a timer
    useEffect(() => {
        // Update the time every second
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clear the interval when component unmounts
        return () => clearInterval(timerId);
    }, []);

    // Format Date to readable format
    const formatDate = (the_date: Date) => {
        return the_date.toLocaleString(); // This will display date and time in local format
    };

    return (
        <p>{formatDate(currentTime)}</p>
    );
}

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
    <div style={{ backgroundColor: colour, width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}><h1>{text}</h1>
  <DateTime />
    </div>
  );
}

export default function MyApp() {
  const season = get_season(new Date());
  const day = get_day(new Date(), true);
  console.log(season);
  console.log(day);
  return (
      <body style={{background-color: "black"}}>
      <div style={{ color: "red", width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}>
      <h1>Alpha. Expect bugs and changes</h1>
      </div>
      <DayInfo season={season} day={day}/>
      <a href="https://upload.wikimedia.org/wikipedia/commons/d/d7/Sunset_over_the_Glasshouse_Mountains.jpg" target="_blank">
	<Image src="/glasshouse_mountains/image.jpg" alt="Sunset view of the Glasshouse Mountains, Sunshine Coast, Queensland. Source: Wikipedia"/>
      </a>
      </body>
  );
}
