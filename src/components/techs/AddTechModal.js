import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

// Redux actions
import { addTech } from "../../actions/techActions";

// Redux
import { connect } from "react-redux";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      const newTech = {
        firstName,
        lastName,
      };
      addTech(newTech);
      M.toast({
        html: `${firstName} ${lastName} was added to the Memo Network`,
      });

      // Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    // ID should match the href in the modal trigger
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Member</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Add To Memo Network
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
