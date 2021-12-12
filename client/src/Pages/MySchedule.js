import React from "react";
import Scheduler from "../Components/Scheduler";
import { useNavigate } from "react-router-dom";

function MySchedule(props) {
  const { loginState, checkLoginState } = props;
  const navigate = useNavigate();

  React.useEffect(() => {
    checkLoginState();
  }, []);

  const openSchedule = () => {
    let user = localStorage.getItem("user");
    if (user != null) {
      user = JSON.parse(user);
      window.open(`/share-schedule/${user._id}`);
    }
  };

  return (
    <div>
      <div className="px-5 my-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="my-5">
            Your <span style={{ color: "red" }}>Fitness</span> Schedule
          </h1>
          <button
            className="px-5 py-1 btn text-white"
            onClick={openSchedule}
            style={{ background: "red" }}
          >
            Share Schedule
          </button>
        </div>
        <Scheduler disabled={!loginState} />
      </div>
    </div>
  );
}

export default MySchedule;
