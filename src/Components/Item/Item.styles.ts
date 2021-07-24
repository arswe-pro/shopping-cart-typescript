import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  button {
    border-radius: 0 0 2rem 2rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
  img {
    max-height: 20rem;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    padding: 2rem 1rem;
    height: 100%;
  }
`;
