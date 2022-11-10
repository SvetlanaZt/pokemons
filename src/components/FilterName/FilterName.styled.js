import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  margin: 0 auto;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  @media screen and (min-width: 768px) {
    width: 340px;
    height: 40px;
    }
`;
