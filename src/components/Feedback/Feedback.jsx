import React from 'react'

export default function Feedback({totalFeedback, positivePercentage, feedback}) {
  return (
    <div>
        <h2>Statistics</h2>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total Feedback: {totalFeedback}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  )
}
