import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, tittle, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, tittle, body, url }));
  };

  return (
    <div
      className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{tittle}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
