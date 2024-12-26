import { useEffect, useState } from "react";

function useStatistics(dataPointCount: number): Statistics[] {
  const [value, setValue] = useState<Statistics[]>([]);

  useEffect(() => {
    const unsubscribe = window.electron.subscribeStatistics((stats) => {
      setValue((prev) => {
        const newdata = [...prev, stats];
        if (newdata.length > dataPointCount) {
          newdata.shift();
        }
        return newdata;
      });
    });

    return unsubscribe;
  }, []);

  return value;
}

export default useStatistics;
