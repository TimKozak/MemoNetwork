import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

// Redux actions
import { deleteLog, setCurrent } from "../../actions/logActions";

// Redux
import { connect } from "react-redux";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Memo Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {/* Link to open a modal */}
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention
              ? "deep-orange-text text-darken-4"
              : "deep-orange-text text-lighten-1"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
