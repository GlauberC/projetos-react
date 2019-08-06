import styled from 'styled-components'
import {sizes} from './design'

export const Container = styled.div`
    @media screen and (min-width: ${sizes.mobileS}){
        width: 100%;
    };
    background-color: ${props => props.bgColor};
    height: ${props => props.height + 'px'};
    margin: 0 auto;
`

export const ContainerGrid = styled(Container)`
    @media screen and (min-width: ${sizes.laptop}){
        width: ${sizes.laptop};
    }
    display: flex;
    flex-direction: 'row';
    justify-content: space-between;
    @media screen and (min-width: ${sizes.mobileS}){
        padding: 0 20px;
    }
`

export const Box = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    float: ${props => props.float};
    background-color: ${props => props.bgColor};
`