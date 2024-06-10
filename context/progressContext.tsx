import { createContext, useContext, useState, useEffect, useCallback } from "react";

type ProgressType = {
  state: boolean;
  value: number;
};
export type ProgressBarContextType = {
  showProgress: () => void;
};

export const ProgressContext = createContext<ProgressBarContextType | null>(
  null,
);

export function ProgressWrapper({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressType>({
    state: false,
    value: 0,
  });

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const duration = 1500; // 1.5 seconds
  const totalSteps = 100;
  const intervalTime = duration / totalSteps;

  const easeInOutQuad = (t: number) => {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  };

  const showProgress = () => {
    setProgress({
      state: true,
      value: 0,
    });

    if (intervalId) {
      clearInterval(intervalId);
    }

    const startTime = Date.now();
    const newIntervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressValue = easeInOutQuad(elapsed / duration) * 100;

      if (elapsed >= duration) {
        clearInterval(newIntervalId);
        setProgress({ state: false, value: 100 });
      } else {
        setProgress({ state: true, value: progressValue });
      }
    }, intervalTime);

    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <ProgressContext.Provider value={{ showProgress }}>
      {/* <Progress
        hidden={!progress.state}
        value={progress.value}
        className=" fixed right-0 top-0 z-[80] h-[2px]"
      /> */}
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgressContext() {
  return useContext(ProgressContext);
}
