import { useEffect } from "react";

function useStatistics() {
  useEffect(() => {
    const unsubscribe = window.electron.subscribeStatistics((stats) => {
      console.log(stats);
    });

    return unsubscribe;
  }, []);
}

export default useStatistics;
