import styled from 'styled-components'
import {colors} from './design'

export const Container = styled.div`
    width: 1280px;
    height: ${props => `${props.height}px`};
    margin: 0 auto;
    padding: 0px;
    background-color: ${props => props.bgColor};
`

export const GridContainer = styled(Container)`
    width: 1170px;
`
export const FloatContainer = styled.div`
    float: ${props => props.float};
    height: ${props => `${props.height}px`};
    width: ${props => `${props.width}px`};
`

export const ImgContainer = styled(Container)`
    background-image: url(${props => props.url});
`