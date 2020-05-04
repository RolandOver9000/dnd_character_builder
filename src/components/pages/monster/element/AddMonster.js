import React, { useContext } from "react";

import { Link } from "react-router-dom";

const AddMonsters = () => {
  //   if (!isLoaded) {
  //     return (
  //       <div>
  //         ..Loading
  //       </div>
  //     );
  //   } else {

  return (
    <div>
      <form>
        <h1>Name</h1>
        <div class="md-form form-sm">
          <input
            type="text"
            for="inputLGEx"
            class="form-control form-control-sm w-25"
          ></input>
          <label for="inputSMEx">Large input</label>
        </div>
        <h1>Size</h1>
        <div class="md-form form-sm">
          <input
            type="text"
            for="inputLGEx"
            class="form-control form-control-sm w-25"
          ></input>
          <label for="inputSMEx">Large input</label>
        </div>
        <h1>Type</h1>
        <div class="md-form form-sm">
          <input
            type="text"
            for="inputLGEx"
            class="form-control form-control-sm w-25"
          ></input>
          <label for="inputSMEx">Large input</label>
        </div>
        <h1>Strength</h1>
        <div class="md-form form-sm">
          <input
            type="text"
            for="inputLGEx"
            class="form-control form-control-sm w-25"
          ></input>
          <label for="inputSMEx">Large input</label>
        </div>
        <input
          type="submit"
          value="Submit"
          onclick="location.href = 'localhost:3000/monsters;"
          id="myButton"
          class="float-left submit-button"
        ></input>
      </form>

      <button
        onclick="location.href = 'localhost:3000/monsters';"
        id="myButton"
        class="float-left submit-button"
      ></button>
    </div>
  );
  //   }
};

export default AddMonsters;
