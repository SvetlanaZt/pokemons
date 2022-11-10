import styled from 'styled-components';

export const StyledH1 = styled.h1`
    font-family: Permanent Marker;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #e4e454;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
    margin: 0;
    font-weight: 600;
    font-size: 40px;
}
`;
export const StyledDiv = styled.div`
    display: block;
    margin: 0 auto;
     @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
     }
`;
export const StyledImg = styled.img`
    margin: 0 auto;
display: flex;
@media screen and (min-width: 768px) {
    margin: 0;
    height: 90px;
    margin-left: 20px
}
`;
