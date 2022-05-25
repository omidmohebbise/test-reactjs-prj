import { Button } from "reactstrap";
import { useState } from "react";
import { BsFillAlarmFill } from "react-icons/bs";
const DateItem = ({ date }) => {
  return <div className="item-time bg-light m-1 p-2 ">{date}</div>;
};
const Myform = () => {
  const [date, setDate] = useState("12/22");
  const [dates, setDates] = useState([
    { date: "11:30-12" },
    { date: "11:30-13" },
    { date: "11:30-14" },
    { date: "11:30-15" }
  ]);
  function handelDate(value) {
    /*  console.log(value);
   const date  = value.split('-');
   console.log(date);
   var year=date[0].slice(2,4)
   console.log(`${date[2]} / ${year}`);
  setDate(`${date[2]} / ${year}`)*/
  }
  return (
    <>
      <Button color="primary">
        Click Me <BsFillAlarmFill color={"red"} size={24} />
      </Button>
      <h3>Pic a Date</h3>
      <input
        type="date"
        name=""
        id="myDate"
        onChange={(e) => handelDate(e.target.value)}
      />
      <hr />
      <h3>Avilable Solte</h3>
      <div className="container">
        {dates.map((d, index) => {
          return <DateItem key={index} date={d.date} />;
        })}
      </div>
      <h3>Select a Location</h3>
      <span className="subtitle">
        choose the place you perfer to start your course
      </span>
      <div className="radioBox active">
        <label htmlFor="">Address 1</label>
        <input type="radio" name="adress1" value="adress1" checked />
      </div>
      <div className="radioBox">
        <label htmlFor="">Address 2</label>
        <input type="radio" name="adress1" value="adress2" />
      </div>
      <div className="radioBox">
        <label htmlFor="">Address 3</label>
        <input type="radio" name="adress1" value="adress2" />
      </div>
      <button type="submit" class="mybtn">
        Submit
      </button>
    </>
  );
};
export default Myform;
