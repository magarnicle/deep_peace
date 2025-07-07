'use client'

import {get_season, get_day, Season, Day} from "./liturgical_dates";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

// Add zero in front of numbers < 10
function zeroPad(i: number) {
    if (i < 10) {
        return "0" + String(i);
    }
    return String(i);
}

function getLocalDateString(the_date: Date) {
    // Months in JS count from 0, unlike years and days
    return the_date.getFullYear() + "-" + zeroPad(the_date.getMonth() + 1) + "-" + zeroPad(the_date.getDate());
};

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
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: '4-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        return the_date.toLocaleDateString(undefined, options); // This will display date and time in local format
    };

    return (
        <p>{formatDate(currentTime)} {getLocalDateString(currentTime)}</p>
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
