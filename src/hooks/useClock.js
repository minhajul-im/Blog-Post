import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

const init = {
  id: "",
  title: "",
  timezone: {
    type: "",
    offset: "",
  },
  date_utc: null,
  date: null,
};

const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let date = new Date();
    let localTimeOffset = date.getTimezoneOffset();
    date = addMinutes(date, localTimeOffset);
    setUtc(date);
  }, []);

  useEffect(() => {
    if (utc !== null && timezone) {
      offset = TIMEZONE_OFFSET[timezone] ?? offset;
      const newUtc = addMinutes(utc, offset);
      setState({
        ...state,
        date_utc: utc,
        date: newUtc,
      });
    }
  }, [utc]);

  return {
    clock: state,
  };
};

export default useClock;
