import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const FacebookIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82V14.708H9.692v-3.615h3.128V7.74c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.463 0.099 2.794 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.763v2.313h3.587l-0.467 3.615h-3.12V24h6.116c0.733 0 1.325-0.593 1.325-1.325V1.325C24 0.593 23.407 0 22.675 0" />
  </svg>
);

const StyledFacebookIcon = styled(FacebookIcon)`
  fill: ${COLORS.darkGray};
  cursor: pointer;

  &:hover {
    fill: ${COLORS.indigo};
  }
`;

export default StyledFacebookIcon;
