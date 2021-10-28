// import { Component } from "react";
import { useState } from 'react';

import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

import './App.css';

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleClick = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGoodFeedback(goodFeedback + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;
      case 'bad':
        setBadFeedback(badFeedback + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodFeedback / countTotalFeedback()) * 100);
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          className="statistics"
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          countTotal={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
export default App;
