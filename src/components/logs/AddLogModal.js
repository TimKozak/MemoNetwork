import React, { useState } from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOptions from "../techs/TechSelectOptions";

// Redux actions
import { addLog } from "../../actions/logActions";

// Redux
import { connect } from "react-redux";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a memo and a person" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Memo added by ${tech}` });

      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    // ID should match the href in the modal trigger
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add a New Memo</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Memo Text
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Person
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Memo With Partner</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Save
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default connect(null, { addLog })(AddLogModal);
