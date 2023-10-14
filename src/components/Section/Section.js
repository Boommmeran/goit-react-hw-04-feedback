import { StyledSect, StyledTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSect>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSect>
  );
};

export default Section;