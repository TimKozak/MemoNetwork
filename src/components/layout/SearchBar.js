import React, { useRef } from "react";
import PropTypes from "prop-types";

// Redux actions
import { searchLogs } from "../../actions/logActions";

// Redux
import { connect } from "react-redux";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="brown darken-3">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Memories.."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default connect(null, { searchLogs })(SearchBar);
