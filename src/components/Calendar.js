import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { useHistory } from "react-router-dom";

const Calendar = () => {
  const history = useHistory();

  function Can() {
    history.push("/conferencedetail");
    console.log("눌러라");
  }

  const dayMaxEventRows = true;
  const views = {
    dayGrid: {
      dayMaxEventRows: 3,
    },
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        dayMaxEventRows={dayMaxEventRows}
        views={views}
        events={[
          {
            id: "1",
            title: "01:00 밥먹기",
            date: "2021-10-02",
            color: "#378006",
            textColor: "#000",
          },
          {
            id: "2",
            title: "10:00 밥먹기",
            date: "2021-10-02",
            color: "#378006",
            textColor: "#000",
          },
          {
            id: "3",
            title: "09:00 밥먹기",
            date: "2021-10-02",
            color: "#378006",
            textColor: "#000",
          },
          {
            id: "4",
            title: "11:00 밥먹기",
            date: "2021-10-02",
            color: "blue",
            textColor: "#000",
          },
          {
            id: "5",
            title: "15:00 밥먹기",
            date: "2021-07-02",
            color: "blue",
            textColor: "#000",
          },
          {
            id: "6",
            title: "13:00 밥먹기",
            date: "2021-08-02",
            color: "blue",
            textColor: "#000",
          },
          {
            id: "7",
            title: "14:00 밥먹기",
            date: "2021-09-02",
            color: "red",
            textColor: "#000",
          },
        ]}
        eventClick={Can}
      />
    </>
  );
};

Calendar.defaultProps = {
  post_id: null,
};

export default Calendar;
