import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

const Calendar = (props) => {
  const history = useHistory();

  function Can() {
    history.push("/conference");
    console.log("눌러라");
  }

  const dayMaxEventRows = true;
  const views = {
    dayGrid: {
      dayMaxEventRows: 1,
    },
  };

  // React.useEffect(() => {
  //   const _today = formatDate(
  //       {
  //           timeZone: "Asia/Seoul",
  //           month: "2-digit",
  //           day: "2-digit",
  //
  //       }
  //   );

  // const thisMonthEventList = useSelector((state) => state..list);
  // const testButton = () => {
  //   console.log("[Main] this month list:::", thisMonthEventList);
  // };
  return (
    <>
      <div style={{ padding: "10px 0px 100px 0px" }}>
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

            {
              id: "8",
              title: "19:00 약먹기",
              date: "2021-10-06",
              color: "bule",
              textColor: "#000",
            },
            {
              id: "9",
              title: "15:00 숨쉬기",
              date: "2021-10-16",
              color: "red",
              textColor: "#000",
            },
            {
              id: "10",
              title: "10:00 잠자기",
              date: "2021-10-11",
              color: "green",
              textColor: "#000",
            },
            {
              id: "11",
              title: "09:00 먹기",
              date: "2021-10-07",
              color: "blue",
              textColor: "#000",
            },
            {
              id: "12",
              title: "19:00 책읽기",
              date: "2021-10-22",
              color: "red",
              textColor: "#000",
            },
            {
              id: "13",
              title: "12:00 밥먹기",
              date: "2021-10-22",
              color: "yellow",
              textColor: "#000",
            },
            {
              id: "14",
              title: "19:00 코딩하기",
              date: "2021-10-20",
              color: "red",
              textColor: "#000",
            },
            {
              id: "15",
              title: "18:00 코딩하기",
              date: "2021-10-20",
              color: "blue",
              textColor: "#000",
            },
            {
              id: "16",
              title: "09:00 코딩하기",
              date: "2021-10-22",
              color: "green",
              textColor: "#000",
            },
            {
              id: "17",
              title: "11:00 코딩하기",
              date: "2021-10-31",
              color: "blue",
              textColor: "#000",
            },
            {
              id: "18",
              title: "12:00 코딩하기",
              date: "2021-10-23",
              color: "pink",
              textColor: "#000",
            },
            {
              id: "19",
              title: "17:00 코딩하기",
              date: "2021-10-21",
              color: "red",
              textColor: "#000",
            },
            {
              id: "20",
              title: "18:00 코딩하기",
              date: "2021-10-04",
              color: "blue",
              textColor: "#000",
            },
            {
              id: "21",
              title: "12:00 코딩하기",
              date: "2021-10-07",
              color: "green",
              textColor: "#000",
            },
            {
              id: "22",
              title: "13:00 코딩하기",
              date: "2021-10-24",
              color: "blakc",
              textColor: "#000",
            },
            {
              id: "23",
              title: "15:00 하루종일코딩하기",
              date: "2021-10-23",
              color: "red",
              textColor: "#000",
            },
            {
              id: "24",
              title: "16:00 하루종일코딩하기",
              date: "2021-10-26",
              color: "green",
              textColor: "#000",
            },
            {
              id: "24",
              title: "06:00 하루종일코딩하기",
              date: "2021-10-25",
              color: "green",
              textColor: "#000",
            },
            {
              id: "25",
              title: "16:00 하루종일코딩하기",
              date: "2021-10-28",
              color: "pink",
              textColor: "#000",
            },
            {
              id: "24",
              title: "05:00 하루종일코딩하기",
              date: "2021-10-29",
              color: "yellow",
              textColor: "#000",
            },
          ]}
          eventClick={Can}
        />
      </div>
    </>
  );
};

Calendar.defaultProps = {
  post_id: null,
};

export default Calendar;
