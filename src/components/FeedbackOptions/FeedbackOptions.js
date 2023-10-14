import capitalize from 'helpers/capitalize';
import { Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Btn key={option} onClick={onLeaveFeedback}>
          {capitalize(option)}
        </Btn>
      ))}
    </div>
  );
};

export default FeedbackOptions;