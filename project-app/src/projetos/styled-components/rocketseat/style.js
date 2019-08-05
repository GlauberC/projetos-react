import styled from 'styled-components'
// No react Native: import styled from 'styled-components/native'

export const Title = styled.h1`
    color: #F00;
    font-size: 20px;
`
export const Container = styled.div`
    width: 200px;
    height: 100px;
    background-color: lightblue;
    p{
        color: blue;
    }
`

export const Quadrado = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.color};
`

export const QuadradoMaior = styled(Quadrado)`
    width: 200px;
    height: 200px;
`