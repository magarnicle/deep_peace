const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

// JAVASCRIPT MONTHS START AT 0!!!!!!!!!!!!

// The year is defined by Easter Sunday (the resurrection is the centre of the faith).
// Christmas belongs to its following Easter: the year goes from Advent to (the Saturday after)
// Christ the King. Easter is dependant on the moon, which we cannot calculate
// easily here, so store 10 years of Easter dates.

function get_easter(today: Date): Date {
    // For the given day, figure out when Easter is
    const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // Easter doesn't have to be exact for this calculation, so make one up
    const end_of_year = new Date(christ_the_king_day(new Date(today.getFullYear(), 2, 1)).getTime() + (6 * DAY_MS));
    //console.log("get_easter.midnight: " + midnight);
    //console.log("get_easter.end_of_year " + end_of_year);
    if (midnight <= end_of_year){
        // This year
        //console.log("This year");
        return easter_dates[today.getFullYear()];
    } else {
        // Next year
        //console.log("Next year");
        return easter_dates[today.getFullYear() + 1];
    }
}

// Instead of the below, calculate using this method: https://www.assa.org.au/edm#Calculator
const easter_dates:  Record<number, Date> = {
    2001: new Date(2001, 3, 15),
    2002: new Date(2002, 2, 31),
    2003: new Date(2003, 3, 20),
    2004: new Date(2004, 3, 11),
    2005: new Date(2005, 2, 27),
    2006: new Date(2006, 3, 16),
    2007: new Date(2007, 3, 8),
    2008: new Date(2008, 2, 23),
    2009: new Date(2009, 3, 12),
    2010: new Date(2010, 3, 4),
    2011: new Date(2011, 3, 24),
    2012: new Date(2012, 3, 8),
    2013: new Date(2013, 2, 31),
    2014: new Date(2014, 3, 20),
    2015: new Date(2015, 3, 5),
    2016: new Date(2016, 2, 27),
    2017: new Date(2017, 3, 16),
    2018: new Date(2018, 3, 1),
    2019: new Date(2019, 3, 21),
    2020: new Date(2020, 3, 12),
    2021: new Date(2021, 3, 4),
    2022: new Date(2022, 3, 17),
    2023: new Date(2023, 3, 9),
    2024: new Date(2024, 2, 31),
    2025: new Date(2025, 3, 20),
    2026: new Date(2026, 3, 5),
    2027: new Date(2027, 2, 28),
    2028: new Date(2028, 3, 16),
    2029: new Date(2029, 3, 1),
    2030: new Date(2030, 3, 21),
    2031: new Date(2031, 3, 13),
    2032: new Date(2032, 2, 28),
    2033: new Date(2033, 3, 17),
    2034: new Date(2034, 3, 9),
    2035: new Date(2035, 2, 25),
    2036: new Date(2036, 3, 13),
    2037: new Date(2037, 3, 5),
    2038: new Date(2038, 3, 25),
    2039: new Date(2039, 3, 10),
    2040: new Date(2040, 3, 1),
    2041: new Date(2041, 3, 21),
}

function christmas_eve_day(easter: Date): Date
{
    // 24th December
    const year = easter.getFullYear() - 1;
    return new Date(year, 11, 24);
};

function christmas_day(easter: Date): Date
{
    // 25th December
    const year = easter.getFullYear() - 1;
    return new Date(year, 11, 25);
}


function boxing_day(easter: Date): Date
{
    // 26th December
    const year = easter.getFullYear() - 1;
    return new Date(year, 11, 26);
};


function epiphany_day(easter: Date): Date
{
    // 6th of January
    return new Date(easter.getFullYear(), 0, 6)
};

function baptism_of_the_lord_day(easter: Date): Date
{
    // First Sunday after Epiphany
    const epiphany = epiphany_day(easter);
    const days_to_sunday = (7 - epiphany.getDay()) * DAY_MS;
    return new Date(epiphany.getTime() + days_to_sunday);
};

function transfiguration_day(easter: Date): Date
{
    // Sunday before Ash Wednesday
    const ash_wednesday = ash_wednesday_day(easter);
    const days_back_to_sunday = 3 * DAY_MS;
    return new Date(ash_wednesday.getTime() - days_back_to_sunday);
};

function shrove_tuesday_day(easter: Date): Date
{
    // Day before Ash Wednesday
    const ash_wednesday = ash_wednesday_day(easter);
    return new Date(ash_wednesday.getTime() - DAY_MS);
};

function ash_wednesday_day(easter: Date): Date
{
    // 46 days before Easter
    const days_to_easter = 46 * DAY_MS;
    return new Date(easter.getTime() - days_to_easter);
};

function palm_sunday_day(easter: Date): Date
{
    // Sunday before Easter
    const days_to_easter = 7 * DAY_MS;
    return new Date(easter.getTime() - days_to_easter);
};

function spy_wednesday_day(easter: Date): Date
{
    // Wednesday before Easter
    const days_to_easter = 4 * DAY_MS;
    return new Date(easter.getTime() - days_to_easter);
};

function maundy_thursday_day(easter: Date): Date
{
    // Thursday before Easter
    const days_to_easter = 3 * DAY_MS;
    return new Date(easter.getTime() - days_to_easter);
};

function good_friday_day(easter: Date): Date
{
    // Friday before Easter
    const days_to_easter = 2 * DAY_MS;
    return new Date(easter.getTime() - days_to_easter);
};

function holy_saturday_day(easter: Date): Date
{
    // Day before Easter
    return new Date(easter.getTime() - DAY_MS);
};

function easter_day(easter: Date): Date
{
    return easter;
};

function ascension_day(easter: Date): Date
{
    // 40th day of Easter, Erster Sunday being the first day
    const days_from_easter = 39 * DAY_MS;
    return new Date(easter.getTime() + days_from_easter);
};

function pentecost_day(easter: Date): Date
{
    // 50th day of Easter, Easter Sunday being the first day
    const days_from_easter = 49 * DAY_MS;
    return new Date(easter.getTime() + days_from_easter);
};

function holy_trinity_day(easter: Date): Date
{
    // Sunday after Pentecost
    const pentecost = pentecost_day(easter);
    const days_from_pentecost = 7 * DAY_MS;
    return new Date(pentecost.getTime() + days_from_pentecost);
};

function all_hallows_eve_day(easter: Date): Date
{
    // 31st October
    return new Date(easter.getFullYear(), 9, 31);
};

function reformation_day(easter: Date): Date
{
    // 31st October
    return new Date(easter.getFullYear(), 9, 31);
};

function all_saints_day(easter: Date): Date
{
    // 1st November
    return new Date(easter.getFullYear(), 10, 1);
};

function all_souls_day(easter: Date): Date
{
    // 2nd November
    return new Date(easter.getFullYear(), 10, 2);
};

function christ_the_king_day(easter: Date): Date
{
    // Sunday before Advent; last Sunday of the year
    const next_year = new Date(easter.getFullYear() + 1, 0, 1);
    const next_advent = advent_season(next_year);
    const days_to_advent = 7 * DAY_MS;
    return new Date(next_advent["start"].getTime() - days_to_advent);
};

type Day = {
   test: (easter: Date) => Date;
   day: string;
   colours: Record<string, string[]> | null;
}

const day_tests: Day[] = [
  {
    "test": epiphany_day,
    "day": "Epiphany",
    "colours": {
      "Episcopal": [
        "white"
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [
        "white",
        "gold",
      ],
      "Roman Catholic": [],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": baptism_of_the_lord_day,
    "day": "Baptism of the Lord",
    "colours": {
      "Episcopal": [
        "white"
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [],
      "United Church of Christ": [],
      "Roman Catholic": [],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": []
    }
  },
  {
    "test": transfiguration_day,
    "day": "Transfiguration",
    "colours": {
      "Episcopal": [
        "white"
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [],
      "Roman Catholic": [],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": []
    }
  },
  {
    "test": shrove_tuesday_day,
    "day": "Shrove Tuesday",
    "colours": {
      "Episcopal": [
      ],
      "Lutheran (ELCA)": [
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [
      ],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": [
      ],
      "Anglican Canada": [
      ]
    }
  },
  {
    "test": ash_wednesday_day,
    "day": "Ash Wednesday",
    "colours": {
      "Episcopal": [
        "unbleached linen",
        "violet",
      ],
      "Lutheran (ELCA)": [
        "black"
      ],
      "Presbyterian USA": [
        "purple"
      ],
      "Methodist": [],
      "United Church of Christ": [
        "black"
      ],
      "Roman Catholic": [],
      "Reformed": [
        "purple"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "black"
      ],
      "Anglican Canada": [
        "purple"
      ]
    }
  },
  {
    "test": palm_sunday_day,
    "day": "Palm Sunday",
    "colours": {
      "Episcopal": [
        "red"
      ],
      "Lutheran (ELCA)": [
        "scarlet",
        "purple"
      ],
      "Presbyterian USA": [
        "purple"
      ],
      "Methodist": [
        "purple"
      ],
      "United Church of Christ": [
        "red"
      ],
      "Roman Catholic": [
        "red"
      ],
      "Reformed": [
        "red"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "scarlet"
      ],
      "Anglican Canada": [
        "purple"
      ]
    }
  },
  {
    "test": spy_wednesday_day,
    "day": "Spy Wednesday",
    "colours": null, 
  },
  {
    "test": maundy_thursday_day,
    "day": "Maundy Thursday",
    "colours": {
      "Episcopal": [
        "red"
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "purple"
      ],
      "Methodist": [],
      "United Church of Christ": [
        "white",
        "gold",
      ],
      "Roman Catholic": [
        "white"
      ],
      "Reformed": [
        "none"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "scarlet"
      ],
      "Anglican Canada": []
    }
  },
  {
    "test": good_friday_day,
    "day": "Good Friday",
    "colours": {
      "Episcopal": [
        "black",
        "red",
      ],
      "Lutheran (ELCA)": [
        "none"
      ],
      "Presbyterian USA": [
        "none"
      ],
      "Methodist": [],
      "United Church of Christ": [
        "none",
        "black",
        "red",
      ],
      "Roman Catholic": [
        "black",
        "red",
      ],
      "Reformed": [
        "none"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "black"
      ],
      "Anglican Canada": []
    }
  },
  {
    "test": holy_saturday_day,
    "day": "Holy Saturday",
    "colours": {
      "Episcopal": [
          "white"
      ],
      "Lutheran (ELCA)": [
          "white"
      ],
      "Presbyterian USA": [
          "white"
      ],
      "Methodist": [],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
          "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
      ],
      "Anglican Canada": ["white"]
    }
  },
  {
    "test": easter_day,
    "day": "Resurrection Sunday",
    "colours": {
      "Episcopal": [
          "gold",
          "white"
      ],
      "Lutheran (ELCA)": [
          "gold",
          "white"
      ],
      "Presbyterian USA": [
          "white"
      ],
      "Methodist": ["white"],
      "United Church of Christ": [
          "gold",
          "white"
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
          "white"
      ],
      "Disciples of Christ": ["white"],
      "Lutheran Missouri": [
          "gold",
          "white"
      ],
      "Anglican Canada": [
      "white"]
    }
  },
  {
    "test": ascension_day,
    "day": "Ascension Thursday",
    "colours": {
      "Episcopal": [
      ],
      "Lutheran (ELCA)": [
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
      ],
      "Anglican Canada": []
    }
  },
  {
    "test": pentecost_day,
    "day": "Pentecost",
    "colours": {
      "Episcopal": [
        "red"
      ],
      "Lutheran (ELCA)": [
          "red"
      ],
      "Presbyterian USA": [
          "red"
      ],
      "Methodist": [
          "red"
      ],
      "United Church of Christ": [
        "bright red"
      ],
      "Roman Catholic": [
          "red"
      ],
      "Reformed": [
          "red"
      ],
      "Disciples of Christ": [
          "red"
      ],
      "Lutheran Missouri": [
          "red"
      ],
      "Anglican Canada": [
          "red"
      ]
    }
  },
  {
    "test": holy_trinity_day,
    "day": "Holy Trinity",
    "colours": {
      "Episcopal": [
          "white"
      ],
      "Lutheran (ELCA)": [
          "white"
      ],
      "Presbyterian USA": [
          "white"
      ],
      "Methodist": [
          "white"
      ],
      "United Church of Christ": [
          "gold",
          "white"
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
          "white"
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": [
          "white"
      ],
      "Anglican Canada": [
          "white"
      ]
    }
  },
  {
    "test": all_hallows_eve_day,
    "day": "All Hallows' Eve",
    "colours": {
      "Episcopal": [
      ],
      "Lutheran (ELCA)": [
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [
      ],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": [
      ],
      "Anglican Canada": [
      ]
    }
  },
  {
    "test": all_saints_day,
    "day": "All Saints' Day",
    "colours": {
      "Episcopal": [
          "white"
      ],
      "Lutheran (ELCA)": [
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [
      ],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
          "white"
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": [
          "white"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": all_souls_day,
    "day": "All Souls' Day",
    "colours": {
      "Episcopal": [
      ],
      "Lutheran (ELCA)": [
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [
      ],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": [
      ],
      "Anglican Canada": [
      ]
    }
  },
  {
    "test": christ_the_king_day,
    "day": "Christ the King",
    "colours": {
      "Episcopal": [
        "white"
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [
        "gold",
        "white",
      ],
      "Roman Catholic": [],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "gold"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": christmas_eve_day,
    "day": "Christmas Eve",
    "colours": {
      "Episcopal": [
        "white",
        "gold",
      ],
      "Lutheran (ELCA)": [],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [],
      "Roman Catholic": [],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": christmas_day,
    "day": "Christmas Day",
    "colours": {
      "Episcopal": [
        "gold",
        "white",
      ],
      "Lutheran (ELCA)": [],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [
        "gold",
        "white",
      ],
      "Roman Catholic": [],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": boxing_day,
    "day": "Boxing Day",
    "colours": {
      "Episcopal": [
      ],
      "Lutheran (ELCA)": [
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [
      ],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": [
      ],
      "Anglican Canada": [
      ]
    }
  }
]

const reformation_day_details: Day = {
    "test": reformation_day,
    "day": "Reformation Day",
    "colours": {
      "Episcopal": [
      ],
      "Lutheran (ELCA)": ["red"
      ],
      "Presbyterian USA": [
      ],
      "Methodist": [
      ],
      "United Church of Christ": [
      ],
      "Roman Catholic": [
      ],
      "Reformed": [
      ],
      "Disciples of Christ": [
      ],
      "Lutheran Missouri": ["red"
      ],
      "Anglican Canada": [
      ]
    }
  };


export function get_day(today: Date, lutheran: Boolean): (Day | null)
{
    const easter = get_easter(today);
    const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    //console.log("get_day.midnight: " + midnight);
    // Reformation day clashes with Halloween
    if (lutheran) {
        //console.log("Checking reformation day");
        const reformation_result = reformation_day_details["test"](easter)
        if (midnight.valueOf() == reformation_result.valueOf()){
            return reformation_day_details;
        }
    }
    let day_test;
    for (day_test of day_tests) {
        const test_result = day_test["test"](easter);
        //console.log("get_day.day_test['day']: " + day_test["day"]);
        //console.log("get_day.test_result: " + test_result);
        if (midnight.valueOf() == test_result.valueOf()) {
            return day_test;
        }
    }
    return null;
};


function advent_season(easter: Date): Record<string, Date>
{
    // The 4th Sunday before Christmas until Christmas Eve.
    const four_sundays = 7 * 4 * DAY_MS;
    const christmas = christmas_day(easter);
    let days_to_sunday = (7 - christmas.getDay());
    // If Christmas is a Sunday, we want 4 Sundays BEFORE that one
    if (days_to_sunday == 7){
        days_to_sunday = 0;
    };
    return {
        "start": new Date(christmas.getTime() - four_sundays + (days_to_sunday * DAY_MS)),
        "end": christmas_eve_day(easter),
    };
};

function christmas_season(easter: Date): Record<string, Date>
{
    return {
        "start": christmas_day(easter: Date),
        "end": new Date(easter.getFullYear(), 0, 5)
    };
}

function epiphany_season(easter: Date): Date
{
    // 6th of January to the day before Ash Wednesday
    return {
        "start": epiphany_day(easter: Date),
        "end": new Date(ash_wednesday_day(easter: Date).getTime() - DAY_MS)
    };
}

function lent_season(easter: Date): Record<string, Date>
{
    // 6 weeks before Easter. Starts on Ash Wednesday i.e. 4 days before sunday.
    // Includes the week before Easter, but we will report that as Holy Week instead.
    return {
        "start": ash_wednesday_day(easter: Date),
        "end": new Date(palm_sunday_day(easter: Date).getTime() - DAY_MS)
    };
}
function holy_week_season(easter: Date): Record<string, Date>
{
    // The week before Easter.
    return {
        "start": palm_sunday_day(easter: Date),
        "end": holy_saturday_day(easter: Date),
    };
}

function easter_season(easter: Date): Record<string, Date>
{
    // From Easter until Pentecost.
    return {
        "start": easter_day(easter: Date),
        "end": new Date(pentecost_day(easter: Date).getTime() - DAY_MS)
    };
}

function ordinary_time_season(easter: Date): Record<string, Date>
{
    // Pentecost until the Saturday after Christ the King.
    return {
        "start": pentecost_day(easter: Date),
        "end": new Date(christ_the_king_day(easter: Date).getTime() + (6 * DAY_MS)),
    };
}

export const denominations: string[] = [
      "Episcopal",
      "Lutheran (ELCA)",
      "Presbyterian USA",
      "Methodist",
      "United Church of Christ",
      "Roman Catholic",
      "Reformed",
      "Disciples of Christ",
      "Lutheran Missouri",
      "Anglican Canada",
];

type Season = {
   test: (easter: Date) => Date;
   season: string;
   colours: Record<string, string[]>;
}
const season_tests: Season[] = [
  {
    "test": advent_season,
    "season": "Advent",
    "colours": {
      "Episcopal": [
        "royal blue",
        "violet",
      ],
      "Lutheran (ELCA)": [
        "blue",
        "purple"
      ],
      "Presbyterian USA": [
        "purple"
      ],
      "Methodist": [
        "blue",
        "purple",
      ],
      "United Church of Christ": [
        "deep blue",
        "purple",
      ],
      "Roman Catholic": [
        "violet",
        "purple"
      ],
      "Reformed": [
        "violet"
      ],
      "Disciples of Christ": [
        "blue",
        "violet",
      ],
      "Lutheran Missouri": [
        "blue",
        "purple"
      ],
      "Anglican Canada": [
        "blue",
        "purple",
      ]
    }
  },
  {
    "test": christmas_season,
    "season": "Christmastide",
    "colours": {
      "Episcopal": [
        "white",
        "gold",
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [
        "white",
        "gold",
      ],
      "Roman Catholic": [
        "white"
      ],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [
        "white"
      ],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": epiphany_season,
    "season": "Epiphanytide",
    "colours": {
      "Episcopal": [
        "green"
      ],
      "Lutheran (ELCA)": [
        "green"
      ],
      "Presbyterian USA": [
        "green"
      ],
      "Methodist": [
        "green"
      ],
      "United Church of Christ": [
          "green"
      ],
      "Roman Catholic": ["green"],
      "Reformed": [
          "green"
      ],
      "Disciples of Christ": ["green"],
      "Lutheran Missouri": [
          "green"
      ],
      "Anglican Canada": [
          "green"
      ]
    }
  },
  {
    "test": lent_season,
    "season": "Lent",
    "colours": {
      "Episcopal": [
        "violet",
        "unbleached linen",
      ],
      "Lutheran (ELCA)": [
        "purple"
      ],
      "Presbyterian USA": [
        "purple"
      ],
      "Methodist": [
        "purple"
      ],
      "United Church of Christ": [
        "violet",
        "beige",
        "grey",
      ],
      "Roman Catholic": [
        "purple",
        "violet",
      ],
      "Reformed": [
        "purple"
      ],
      "Disciples of Christ": [
        "violet",
        "blue",
      ],
      "Lutheran Missouri": [
        "purple"
      ],
      "Anglican Canada": [
        "purple"
      ]
    }
  },
  {
    "test": holy_week_season,
    "season": "Holy Week",
    "colours": {
      "Episcopal": [
        "red"
      ],
      "Lutheran (ELCA)": [
        "scarlet",
        "purple"
      ],
      "Presbyterian USA": [
        "purple"
      ],
      "Methodist": [
        "purple"
      ],
      "United Church of Christ": [
        "red"
      ],
      "Roman Catholic": [
          "purple",
          "violet",
    ],
      "Reformed": [
        "red"
      ],
      "Disciples of Christ": [
        "violet",
        "blue",
      ],
      "Lutheran Missouri": [
        "scarlet"
      ],
      "Anglican Canada": [
        "red"
      ]
    }
  },
  {
    "test": easter_season,
    "season": "Eastertide",
    "colours": {
      "Episcopal": [
        "white",
        "gold",
      ],
      "Lutheran (ELCA)": [
        "white"
      ],
      "Presbyterian USA": [
        "white"
      ],
      "Methodist": [
        "white"
      ],
      "United Church of Christ": [
        "white",
        "gold",
      ],
      "Roman Catholic": [
        "white"
      ],
      "Reformed": [
        "white"
      ],
      "Disciples of Christ": [
        "white"
      ],
      "Lutheran Missouri": [
        "white"
      ],
      "Anglican Canada": [
        "white"
      ]
    }
  },
  {
    "test": ordinary_time_season,
    "season": "Ordinary Time",
    "colours": {
      "Episcopal": [
        "green"
      ],
      "Lutheran (ELCA)": [
        "green"
      ],
      "Presbyterian USA": [
        "green"
      ],
      "Methodist": [
        "green"
      ],
      "United Church of Christ": [
        "green"
      ],
      "Roman Catholic": [
        "green"
      ],
      "Reformed": [
        "green"
      ],
      "Disciples of Christ": [
        "green"
      ],
      "Lutheran Missouri": [
        "green"
      ],
      "Anglican Canada": [
        "green"
      ]
    }
  }
];

export function get_season(today: Date): string{
    const easter = get_easter(today);
    const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    //console.log("get_season.midnight: " + midnight);
    let season_test;
    for (season_test of season_tests) {
        const test_result = season_test["test"](easter);
        //console.log("season_test['season']" + season_test["season"]);
        //console.log("get_season.test_result['start']: " + test_result["start"]);
        //console.log("get_season.test_result['end']: " + test_result["end"]);
        if (
            midnight.valueOf() >= test_result["start"].valueOf()
            && midnight.valueOf() <= test_result["end"].valueOf()
        ) {
            return season_test;
        }
    }
};

export const descriptions: Record<string, string> = {
    "days": {
        "All Hallows' Eve": "Halloween or Hallowe'en (a contraction of 'All Hallows' evening'), less commonly known as Allhalloween, All Hallows' Eve, or All Saints' Eve, is a celebration observed in many countries  on 31 October, the eve of the Western Christian feast of All Hallows' Day. It begins the observance of Allhallowtide, the time in the liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the departed. One theory holds that many Halloween traditions were influenced by Celtic harvest festivals, particularly the Gaelic festival Samhain, which are believed to have pagan roots. Some go further and suggest that Samhain may have been Christianized as All Hallow's Day, along with its eve, by the early Church. Other academics believe Halloween began solely as a Christian holiday, being the vigil of All Hallow's Day. Celebrated in Ireland and Scotland for centuries, Irish and Scottish migrants brought many Halloween customs to North America in the 19th century, and then through American influence, Halloween spread to other countries by the late 20th and early 21st century. Halloween activities include trick-or-treating (or the related guising and souling), attending Halloween costume parties, carving pumpkins into jack-o'-lanterns, lighting bonfires, apple bobbing, divination games, playing pranks, visiting haunted attractions, telling scary stories, and watching horror or Halloween-themed films. For some people, the Christian religious observances of All Hallows' Eve, including attending church services and lighting candles on the graves of the dead, remain popular, although it is a secular celebration for others. Some Christians historically abstained from meat on All Hallows' Eve, a tradition reflected in the eating of certain vegetarian foods on this vigil day, including apples, potato pancakes, and soul cakes.",
        "All Saints' Day": "All Saints' Day, also known as All Hallows' Day, the Feast of All Saints, the Feast of All Hallows, the Solemnity of All Saints, and Hallowmas, is a Christian solemnity celebrated in honour of all the saints of the church, whether they are known or unknown. From the 4th century, feasts commemorating all Christian martyrs were held in various places, on various dates near Easter and Pentecost. In the 9th century, some churches in the British Isles began holding the commemoration of all saints on 1 November, and in the 9th century this was extended to the whole Catholic church by Pope Gregory IV. In Western Christianity, it is still celebrated on 1 November by the Roman Catholic Church as well as many Protestant churches, as the Lutheran, Anglican, and Methodist traditions. The Eastern Orthodox Church and associated Eastern Catholic and Eastern Lutheran churches celebrate it on the first Sunday after Pentecost. The Church of the East and the Syro-Malabar Church and Chaldean Catholic Church, the latter of which is in communion with Rome, celebrates All Saints' Day on the first Friday after Easter Sunday. In the Coptic Orthodox tradition, All Saints' Day is on Nayrouz, celebrated on September 11. The day is both the start of the Coptic new year and its first month, Thout.",
        "All Souls' Day": "All Souls' Day, also known as the Commemoration of All the Faithful Departed and the Day of the Dead, is a day of prayer and remembrance for the faithful departed,  which is observed by Roman Catholics and other Christian denominations annually on 2 November. All Souls' Day is often celebrated in Western Christianity; Saturday of Souls is a related tradition more frequently observed in Eastern Christianity. Adherents of All Souls' Day traditions often remember deceased friends and relatives in various ways on the day. Through prayer, intercessions, alms and visits to cemeteries, people commemorate the poor souls in purgatory and gain them indulgences.",
        "Ascension Thursday": "The Solemnity of the Ascension of Jesus Christ, also called Ascension Day, Ascension Thursday, or sometimes Holy Thursday, commemorates the Christian belief of the bodily Ascension of Jesus into heaven. It is one of the ecumenical (i. e., shared by multiple denominations) feasts of Christian churches, ranking with the feasts of the Passion and Pentecost. Following the account of Acts 1:3 that the risen Jesus appeared for 40 days prior to his Ascension, Ascension Day is traditionally celebrated on a Thursday, the fortieth day of Easter; although some Christian denominations have moved the observance to the following Sunday. The day of observance varies by ecclesiastical province in many Christian denominations, as with Methodists and Catholics, for example.",
        "Ash Wednesday": "Ash Wednesday is a holy day of prayer and fasting in many Western Christian denominations. It is preceded by Shrove Tuesday and falls on the first day of Lent (the six weeks of penitence before Easter). It is observed by Catholics in the Roman Rite, Lutherans, Moravians, Anglicans, Methodists, Nazarenes, as well as by some churches in the Reformed tradition (including certain Congregationalist, Continental Reformed, and Presbyterian churches). As it is the first day of Lent, many Christians begin Ash Wednesday by marking a Lenten calendar, praying a Lenten daily devotional, and making a Lenten sacrifice that they will not partake of until the arrival of Eastertide. Many Christians attend special church services, at which churchgoers receive ash on their foreheads. Ash Wednesday derives its name from this practice, which is accompanied by the words, 'Repent, and believe in the Gospel' or the dictum 'Remember that you are dust, and to dust you shall return.' The ashes are prepared by burning palm leaves from the previous year's Palm Sunday celebrations.",
        "Baptism of the Lord": "The Feast of the Baptism of the Lord, or Theophany, is the feast day commemorating the baptism of Jesus in the Jordan River by John the Baptist. Originally the baptism of Christ was celebrated on Epiphany, which commemorates the coming of the Magi, the baptism of Christ, and the wedding at Cana. Over time in the West, however, the celebration of the baptism of the Lord came to be commemorated as a distinct feast from Epiphany.  It is celebrated in the Catholic Church as well as the Anglican and Lutheran Churches on the first Sunday following The Epiphany of Our Lord (January 6). Some Lutheran churches celebrate it on the Sunday before Lent, or Quinquagesima.",
        "Boxing Day": "Boxing Day is a holiday celebrated after Christmas Day, occurring on the second day of Christmastide (26 December). Though it originated as a holiday to give gifts to the poor, today Boxing Day is primarily known as a shopping holiday. It originated in Great Britain and is celebrated in a number of countries that previously formed part of the British Empire. The attached bank holiday or public holiday may take place on 28 December if necessary to ensure it falls on a weekday. Boxing Day is also concurrent with the Catholic holiday Saint Stephen's Day.",
        "Christ the King": "Christ the King is a title of Jesus in Christianity referring to the idea of the Kingdom of God where the Christ is described as seated at the right hand of God. Many Christian denominations consider the kingly office of Christ to be one of the threefold offices: Christ is a prophet, priest, and king. The title 'Christ the King' is also frequently used as a name for churches, schools, seminaries, hospitals, and religious institutes.",
        "Christmas Day": "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night. Christmas Day is a public holiday in many countries, is celebrated religiously by a majority of Christians, as well as culturally by many non-Christians, and forms an integral part of the holiday season organized around it.",
        "Christmas Eve": "Christmas Eve is the evening or entire day before Christmas Day, the festival commemorating the birth of Jesus. Christmas Day is observed around the world, and Christmas Eve is widely observed as a full or partial holiday in anticipation of Christmas Day. Together, both days are considered one of the most culturally significant celebrations in Christendom and Western society.",
        "Epiphany": "Epiphany ( ə-PIF-ə-nee), also known as Theophany in Eastern Christian traditions, is a Christian feast day that celebrates the revelation (theophany) of God incarnate as Jesus Christ.",
        "Good Friday": "Good Friday is a Christian holiday commemorating the crucifixion of Jesus and his death at Calvary. It is observed during Holy Week as part of the Paschal Triduum. It is also known as Holy Friday, Great Friday, Great and Holy Friday (also Holy and Great Friday), and Black Friday. Members of many Christian denominations, including the Catholic, Eastern Orthodox, Lutheran, Anglican, Methodist, Oriental Orthodox, United Protestant and some Reformed traditions (including certain Continental Reformed, Presbyterian and Congregationalist churches), observe Good Friday with fasting and church services. In many Catholic, Lutheran, Anglican and Methodist churches, the Service of the Great Three Hours' Agony is held from noon until 3 pm, the time duration that the Bible records as darkness covering the land to Jesus' sacrificial death on the cross. Communicants of the Moravian Church have a Good Friday tradition of cleaning gravestones in Moravian cemeteries. The date of Good Friday varies from one year to the next in both the Gregorian and Julian calendars. Eastern and Western Christianity disagree over the computation of the date of Easter and therefore of Good Friday. Good Friday is a widely instituted legal holiday around the world, including in most Western countries and 12 U. S. states. Some predominantly Christian countries, such as Germany, have laws prohibiting certain acts such as dancing and horse racing, in remembrance of the somber nature of Good Friday.",
        "Holy Saturday": "Holy Saturday (Latin: Sabbatum Sanctum), also known as Great and Holy Saturday (also Holy and Great Saturday), the Great Sabbath, Hallelujah Saturday (in Portugal and Brazil), Saturday of the Glory, Sabado de Gloria, and Black Saturday (in the Philippines) or Easter Eve, and called 'Joyous Saturday', 'the Saturday of Light', and 'Mega Sabbatun' among Coptic Christians, is the final day of Holy Week, between Good Friday and Easter Sunday, when Christians prepare for the latter. The day  commemorates the Harrowing of Hell while Jesus Christ's body lay in the tomb. Christians of the Catholic, Lutheran, Methodist, Anglican and Reformed denominations begin the celebration of the Easter Vigil service on Holy Saturday, which provides a transition to the season of Eastertide; in the Moravian Christian tradition, graves are decorated with flowers during the day of Holy Saturday and the celebration of the sunrise service starts before dawn on Easter Sunday.",
        "Holy Trinity": "The Christian doctrine of the Trinity (Latin: Trinitas, lit. 'triad', from Latin: trinus 'threefold') defines one God existing in three coequal, coeternal, consubstantial divine persons: God the Father, God the Son (Jesus Christ) and God the Holy Spirit, three distinct persons sharing one homoousion (essence). In this context, the three persons define who God is, while the one essence defines what God is. This doctrine is called Trinitarianism and its adherents are called trinitarians, while its opponents are called antitrinitarians or nontrinitarians. Christian nontrinitarian positions include Unitarianism, Binitarianism and Modalism.",
        "Maundy Thursday": "Maundy Thursday or Holy Thursday (also known as Great and Holy Thursday, Holy and Great Thursday, Covenant Thursday, Sheer Thursday, and Thursday of Mysteries, among other names) is the day during Holy Week that commemorates the Washing of the Feet (Maundy) and Last Supper of Jesus Christ with the Apostles, as described in the canonical gospels. It is the fifth day of Holy Week, preceded by Holy Wednesday and followed by Good Friday. 'Maundy' comes from the Latin word mandatum, or commandment, reflecting Jesus' words 'I give you a new commandment.'  ",
        "Palm Sunday": "Palm Sunday is a Christian moveable feast that falls on the Sunday before Easter. The feast commemorates Christ's triumphal entry into Jerusalem, an event mentioned in each of the four canonical Gospels. Palm Sunday marks the first day of Holy Week. For adherents of mainstream Christianity, it is the last week of the Christian solemn season of Lent  that precedes the arrival of Eastertide. In most liturgical churches, Palm Sunday is celebrated by the blessing and distribution of palm branches (or the branches of other native trees), representing the palm branches which the crowd scattered in front of Christ as he rode into Jerusalem; these palms are sometimes woven into crosses. The difficulty of procuring palms in unfavorable climates led to their substitution with branches of native trees, including box, olive, willow, and yew. The Sunday was often named after these substitute trees, as in Yew Sunday, or by the general term Branch Sunday. In Syriac Christianity it is often called Oshana Sunday or Hosanna Sunday based on the biblical words uttered by the crowd while Jesus entered Jerusalem. ",
        "Pentecost": "Pentecost (also called Whit Sunday, Whitsunday or Whitsun) is a Christian holiday which takes place on the 50th day (the seventh Sunday) after Easter Sunday. It commemorates the descent of the Holy Spirit upon the Apostles and other followers of Jesus Christ while they were in Jerusalem celebrating the Feast of Weeks, as described in the Acts of the Apostles (Acts 2:1–31). In Western Christianity, Pentecost is celebrated on the 50th day (the seventh Sunday) after Easter Sunday. In the United Kingdom, traditionally the next day, Whit Monday, was (until 1970) also a public holiday. (Since 1971, by statute, the last Monday in May has been a Bank Holiday). The Monday after Pentecost is a legal holiday in many European countries.",
        "Reformation Day": "Reformation Day is a Protestant Christian religious holiday celebrated on 31 October, alongside All Hallows' Eve (Halloween) during the triduum of Allhallowtide, in remembrance of the onset of the Reformation.",
        "Resurrection Sunday": "Easter, also called Pascha (Aramaic, Greek, Latin) or Resurrection Sunday, is a Christian festival and cultural holiday commemorating the resurrection of Jesus from the dead, described in the New Testament as having occurred on the third day of his burial following his crucifixion by the Romans at Calvary c. 30 AD. It is the culmination of the Passion of Jesus, preceded by Lent (or Great Lent), a 40-day period of fasting, prayer, and penance.",
        "Shrove Tuesday": "Shrove Tuesday is the day before Ash Wednesday (the first day of Lent), observed in many Christian countries through participating in confession and absolution, the ritual burning of the previous year's Holy Week palms, finalizing one's Lenten sacrifice, as well as eating pancakes and other sweets. Shrove Tuesday is observed by many Christians, including Anglicans, Lutherans, Methodists and Roman Catholics, who 'make a special point of self-examination, of considering what wrongs they need to repent, and what amendments of life or areas of spiritual growth they especially need to ask God's help in dealing with.' This moveable feast is determined by Easter. The expression 'Shrove Tuesday' comes from the word shrive, meaning 'absolve'. As this is the last day of the Christian liturgical season historically known as Shrovetide, before the penitential season of Lent, related popular practices, such as indulging in food that one might give up as their Lenten sacrifice for the upcoming forty days, are associated with Shrove Tuesday celebrations. The term Mardi Gras is French for 'Fat Tuesday', referring to the practice of the last night of eating richer, fatty foods before the ritual fasting of the Lenten season, which begins on Ash Wednesday. Many Christian congregations thus observe the day through eating pancakes or, more specifically, the holding of pancake breakfasts, as well as the ringing of church bells to remind people to repent of their sins before the start of Lent. On Shrove Tuesday, churches also burn the palms distributed during the previous year's Palm Sunday liturgies to make the ashes used during the services held on the very next day, Ash Wednesday. In some Christian countries, especially those where the day is called Mardi Gras or a translation thereof, it is a carnival day, the last day of 'fat eating' or 'gorging' before the fasting period of Lent.",
        "Transfiguration": "The Feast of the Transfiguration is celebrated by various Christian communities in honor of the transfiguration of Jesus. The origins of the feast are less than certain and may have derived from the dedication of three basilicas on Mount Tabor. The feast was present in various forms by the 9th century, and in the Western Church was made a universal feast on 6 August by Pope Callixtus III to commemorate the raising of the siege of Belgrade (1456). In the Syriac Orthodox, Malankara Orthodox, Revised Julian calendars within Eastern Orthodoxy, Catholic, Old Catholic, and Anglican churches, the Feast of the Transfiguration is observed on 6 August. In the Armenian Apostolic Church, the Feast of the Transfiguration is observed on the fourteenth Sunday after Easter. In some Lutheran traditions preceding the reforms to the liturgy in the 1970s, the 6th of August was also observed as the Feast of the Transfiguration. In those Orthodox churches which continue to follow the Julian Calendar, August 6 falls on August 19 of the Gregorian Calendar. The Transfiguration is considered a major feast, numbered among the twelve Great Feasts in Byzantine Catholicism and Orthodoxy. In all these churches, if the feast falls on a Sunday, its liturgy is not combined with the Sunday liturgy, but completely replaces it."
        },
    "seasons": {
        "Advent": "Advent is a season of the liturgical year observed in most Christian denominations as a time of expectant waiting and preparation for both the celebration of the Nativity of Christ at Christmas and the return of Christ at the Second Coming. Advent is the beginning of the liturgical year in Western Christianity, and is part of the wider Christmas and holiday season.",
        "Christmastide": "Christmastide is a season of the liturgical year in most Christian churches. In some, Christmastide is identical to Twelvetide.",
        "Eastertide": "Eastertide (also known as Eastertime or the Easter season) or Paschaltide (also known as Paschaltime or the Paschal season) is a festal season in the liturgical year of Christianity that focuses on celebrating the Resurrection of Jesus Christ. It begins on Easter Sunday, which initiates Easter Week in Western Christianity, and Bright Week in Eastern Christianity. There are several Eastertide customs across the Christian world, including sunrise services, exclaiming the Paschal greeting, clipping the church, and decorating Easter eggs, a symbol of the empty tomb. Eastertide customs include egg hunting, eating special Easter foods and watching Easter parades. Traditionally lasting 40 days to commemorate the time the resurrected Jesus remained on earth before departing (the period between Easter Day and the Ascension), 20th century liturgical revision has led some western churches to expand Eastertide to 50 days to conclude on Whitsunday.",
        "Epiphanytide": "The Epiphany season, also known as Epiphanytide or the time of Sundays After Epiphany, is a liturgical period, celebrated by many Christian Churches, which immediately follows the Christmas season. It begins on Epiphany Day, and ends at various points as defined by those denominations. The typical liturgical color for the day of Epiphany is white, and the typical color for Epiphany season is green.",
        "Holy Week": "Holy Week (Latin: Hebdomada Sancta or Hebdomada Maior, lit. 'Greater Week'; Ancient Greek: Ἁγία καὶ Μεγάλη Ἑβδομάς, romanized: Hagia kai Megale Hebdomas, lit. 'Holy and Great Week') is the most sacred week in the liturgical year in Christianity. In Eastern Churches, which includes Eastern Orthodox, Eastern Catholic and Eastern Lutheran traditions, Holy Week occurs the week after Lazarus Saturday and starts on the evening of Palm Sunday. In the denominations of the Western Christianity, which includes the Roman Catholicism, Lutheranism, Moravianism, Anglicanism, Methodism and Reformed Christianity, it begins with Palm Sunday and concludes on Easter Sunday. For all Christian traditions it is a moveable observance. In Eastern Rite Churches, Holy Week starts after 40 days of Lent and two transitional days, namely Saturday of Lazarus (Lazarus Saturday) and Palm Sunday. In the Western Christian Churches, Holy Week falls on the last week of Lent or Sixth Lent Week. Holy Week begins with the commemoration of Christ's triumphal entry into Jerusalem on Palm Sunday, marks the betrayal of Jesus on Spy Wednesday (Holy Wednesday), climaxing with the commemoration of the Mystical or Last Supper on Maundy Thursday and the Passion of Jesus on Good Friday. Holy Week concludes with Christ's rest in death and descent into Hades on Holy Saturday. It is believed Jesus rested in death from the ninth hour (3 pm) on Good Friday until just before dawn on Sunday morning, the day of his resurrection from death, commonly known as Easter Sunday. This marks the beginning of the season of Eastertide, with its first week being known as Easter Week (Bright Week).",
        "Lent": "Lent (Latin: Quadragesima, 'Fortieth') is a solemn religious observance in the Christian liturgical calendar commemorating the 40 days Jesus spent fasting in the desert and enduring temptation by Satan, according to the Gospels of Matthew, Mark and Luke, before beginning his public ministry. Lent is observed in the Anglican, Eastern Orthodox, Lutheran, Methodist, Moravian, Oriental Orthodox, Persian, United Protestant and Roman Catholic traditions. Some Anabaptist, Baptist, Reformed (including certain Continental Reformed, Presbyterian and Congregationalist churches), and nondenominational Christian churches also observe Lent, although many churches in these traditions do not. Which days are enumerated as being part of Lent differs between denominations (see below), although in all of them Lent is described as lasting for a total duration of 40 days. In Lent-observing Western Churches, Lent begins on Ash Wednesday and ends approximately six weeks later; depending on the Christian denomination and local custom, Lent concludes either on the evening of Maundy Thursday, or at sundown on Holy Saturday, when the Easter Vigil is celebrated, though in either case, Lenten fasting observances are maintained until the evening of Holy Saturday. Sundays may or may not be excluded, depending on the denomination. In Eastern Churches (whether Eastern Orthodox, Eastern Lutheran, or Eastern Catholic), Lent is observed continuously without interruption for 40 days starting on Clean Monday and ending on Lazarus Saturday before Holy Week. Lent is a period of grief that necessarily ends with a great celebration of Easter. Thus, it is known in Eastern Orthodox circles as the season of 'bright sadness' (Greek: χαρμολύπη, romanized: charmolypê). The purpose of Lent is the preparation of the believer for Easter through prayer, mortifying the flesh, repentance of sins, almsgiving, simple living, and self-denial. In Lent, many Christians commit to fasting, as well as giving up certain luxuries in imitation of Jesus Christ's sacrifice during his journey into the desert for 40 days; this is known as one's Lenten sacrifice. Many Lent-observing Christians also add a Lenten spiritual discipline, such as reading a daily devotional or praying through a Lenten calendar, to draw themselves near to God. Often observed are the Stations of the Cross, a devotional commemoration of Christ's carrying the Cross and crucifixion. Many churches remove flowers from their altars and veil crucifixes, religious statues that show the triumphant Christ, and other elaborate religious symbols in violet fabrics in solemn observance of the event. The custom of veiling is typically practised the last two weeks, beginning on the Sunday Judica which is therefore in the vernacular called Passion Sunday until Good Friday, when the cross is unveiled solemnly in the liturgy.",
        "Ordinary Time": "Ordinary Time (Latin: Tempus per annum) is the part of the liturgical year in the liturgy of the Roman Rite, which falls outside the two great seasons of Christmastide and Eastertide, or their respective preparatory seasons of Advent and Lent. Ordinary Time thus includes the days between Christmastide and Lent, and between Eastertide and Advent. The liturgical color assigned to Ordinary Time is green. The last Sunday of Ordinary Time is the Solemnity of Christ the King."
    }
}
