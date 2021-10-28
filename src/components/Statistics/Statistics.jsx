import PropTypes from "prop-types";
import { Notification } from "../Notification/Notification";

import s from "./Statistics.module.css";
export function Statistics({ good, neutral, bad, countTotal, positivePercentage }) {
  const total = countTotal();
  const positiveFeedbacks = positivePercentage();
  // const countPositiveFeedbackPercentage = () => {
  //   // const totalFeedback = this.countTotalFeedback();
  //   return Math.round((good / total) * 100);
  // }

  if (total !== 0) {
    return (
      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span>Good:</span> <span>{good}</span>
        </li>
        <li className={s.statsItem}>
          <span>Neutral:</span> <span>{neutral}</span>
        </li>
        <li className={s.statsItem}>
          <span>Bad:</span> <span>{bad}</span>
        </li>
        <li className={s.statsItem}>
          <span>Total:</span> <span>{total}</span>
        </li>
        <li className={s.statsItem}>
          <span>Positive Feedback:</span> <span>{positiveFeedbacks}%</span>
        </li>
      </ul>
    );
  }
  return <Notification message="No feedback given" />;
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotal: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
