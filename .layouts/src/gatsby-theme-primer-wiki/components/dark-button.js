import { Text, themeGet } from "@primer/components";
import styled from "styled-components";

const DarkButton = styled(Text)`
  color: ${themeGet("colors.header.text")};
  background-color: transparent;
  border: 0px solid ${themeGet("colors.auto.gray.7")};
  box-shadow: none;
  &:active {
    background-color: transparent;
  }
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

export default DarkButton;
