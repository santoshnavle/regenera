import styled from "styled-components";

export const LightGreenBtn = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: ${({ theme }) => theme.colors.light_green};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 39px;
  border-radius: 25px;
  font-weight: bold;
  border: none;
  line-height: 45px;
  height:45px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background: ${({ theme }) => theme.colors.title_green}
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    display: block;
  }
  @media (max-width:${({ theme }) => theme.media.mobile}) {
    font-size: 14px;
  }
`

export const DarkGreenBtn = styled(LightGreenBtn)`
  background-color: ${({ theme }) => theme.colors.title_green};

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background: ${({ theme }) => theme.colors.light_green}
  }
`
export const OrangeBtn = styled(LightGreenBtn)`
  background-color: ${({ theme }) => theme.colors.orange};

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background: ${({ theme }) => theme.colors.light_orange}
  }
`