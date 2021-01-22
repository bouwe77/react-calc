import React from "react";
import styles from "./ExerciseFinished.module.css";

export default function ExerciseFinished({ results }) {
  return (
    <div className={styles["results"]}>
      {results.correct > 0 ? "Goed gedaan!" : "Klaar!"}
      <br />
      <br />
      <h1>
        {results.correct} van de {results.total} goed!{" "}
        {results.correct > 0 ? (
          <span role="img" aria-label="yes!!!">
            🎉
          </span>
        ) : (
          <span role="img" aria-label="sad">
            😕
          </span>
        )}
      </h1>
      <div>
        <br />
        <b>Dit heb je allemaal gewonnen:</b>
        <br />
        {results.rewards.map((reward, index) => (
          <span
            key={index}
            role="img"
            aria-label="sushi"
            className={styles["reward-emoji"]}
          >
            {reward}{" "}
          </span>
        ))}
        <br />
        {[...Array(results.incorrect)].map((_, index) => (
          <span
            key={index}
            role="img"
            aria-label="vies"
            className={styles["reward-emoji"]}
          >
            💩{" "}
          </span>
        ))}
      </div>
      <br />
    </div>
  );
}
