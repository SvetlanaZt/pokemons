import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #9696e5;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-right: 20px;
    font-size: 16px;
     &:hover {
    background-color: #4141ca;
    }
    @media screen and (min-width: 768px) {
    width: 150px;
    height: 75px;
    },
    @media screen and (min-width: 1200px) {
    width: 200px;
    height: 100px;
    }
`;
export const StyledDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 15px;
`;
