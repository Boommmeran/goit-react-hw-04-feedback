import { StatList, StatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem>
        <p>Good: {good}</p>
      </StatItem>
      <StatItem>
        <p>Neutral: {neutral}</p>
      </StatItem>
      <StatItem>
        <p>Bad: {bad}</p>
      </StatItem>
      <StatItem>
        <p>Total: {total}</p>
      </StatItem>
      <StatItem>
        <p>Positive feedbacks: {positivePercentage}</p>
      </StatItem>
    </StatList>
  );
};
  
export default Statistics;