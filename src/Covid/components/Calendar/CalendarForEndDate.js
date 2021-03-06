import React, { useState } from "react";
import "../../Covid.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index.js";

function Calendar(props) {
  const [startDate, setSelectedDate] = useState(null);
  let x = props.startDate.slice(0, 11) + '"';

  //add 2 days to start date
  let addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  let selectedStartDate = new Date(x);

  let modifiedStartDate = addDays(selectedStartDate, 3);

  return (
    <div className="Covid_dropdownCalendar_item">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          props.onselectEndDate(JSON.stringify(date));
          setSelectedDate(date);
        }}
        dateFormat="yyyy-MM-dd"
        minDate={modifiedStartDate}
        maxDate={new Date("2020/10/07")}
        placeholderText="Click to select a end date"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    startDate: state.countriesReducer.startDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onselectEndDate: (date) => dispatch(actions.selectEndDate(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
