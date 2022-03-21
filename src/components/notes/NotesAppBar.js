import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();

  const date = new Date();

  const noteDate = moment(date);

  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.getElementById("fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate.format("LL")}</span>

      <input
        id="fileSelector"
        style={{ display: "none" }}
        type="file"
        onChange={handleFileChange}
        name="file"
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
