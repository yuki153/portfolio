import styled from '@emotion/styled';

const Btn = styled.div`
  background-color: #00f;
  & a {
      color: #fff;
  }
  `;

export const Button = () => (
  <Btn>
    <a href="https://google.com">styled component</a>
  </Btn>
);

