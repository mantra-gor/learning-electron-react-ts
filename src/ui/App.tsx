import { useMemo } from "react";
import "./App.css";
import useStatistics from "./useStatistics";
import Chart from "./Chart";

function App() {
  const statistics = useStatistics(10);

  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );

  const ramUsage = useMemo(
    () => statistics.map((stat) => stat.ramUsage),
    [statistics]
  );

  return (
    <>
      <div style={{ height: 200 }}>
        <Chart data={cpuUsages} maxDataPoints={10}></Chart>
        <h4>CPU Usage</h4>
      </div>
      <div style={{ height: 200, marginTop: "4rem" }}>
        <Chart data={ramUsage} maxDataPoints={10}></Chart>
        <h4>RAM Usage</h4>
      </div>
    </>
  );
}

export default App;
