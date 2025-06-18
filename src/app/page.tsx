'use client'

import {get_season, get_day, Season, Day} from "./liturgical_dates";
import React, { useState, useEffect } from 'react';

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
        <div style={{ width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}>
        <h2>Current Date and Time</h2>
        <p>{formatDate(currentTime)}</p>
        </div>
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
      <body>
      <DayInfo season={season} day={day}/>
      <div style={{ color: "red", width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}>
      <h1>Alpha, expect bugs and changes</h1>
      </div>
      </body>
  );
}
