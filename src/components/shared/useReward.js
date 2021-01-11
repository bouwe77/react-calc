import { useEffect, useState } from "react";

const rewards = ["🍫", "🍌", "🍦", "🍉", "🍭"];
//const secondsPerReward = 2;

export default function useReward(seconds) {
  const [reward, setReward] = useState(rewards[0]);

  useEffect(() => {
    let index;
    if (seconds < 2) index = 0;
    else if (seconds < 4) index = 1;
    else if (seconds < 6) index = 2;
    else if (seconds < 8) index = 3;
    else if (seconds < 10) index = 4;
    else {
      setReward(null);
      return;
    }

    setReward(rewards[index]);
  }, [seconds, reward]);

  return reward;
}
