import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  max-width: 350px;
  border: 1px solid lightblue;
  height: 100%;
  margin: 0 auto;

  & > div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.5rem;
    max-width: 40ch;
    text-align: justify;
  }
`;

export const Styledfigure = styled.figure`
  /* width: 320px; */
  height: 250px;
  border-radius: 5px;
  border-bottom: 1px solid lightblue;
  margin: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
