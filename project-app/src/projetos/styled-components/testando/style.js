import styled from 'styled-components'
const colors = {
    primary: 'blue',
    secondary: 'white',
    background: '#c3c3c3'
}

export const Container = styled.div`
    background-color: ${colors.background};
    width: 1080px;
    height: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const Header = styled.div`
    background-color: blue;
    flex: 1;
`
export const Main = styled.main`
    flex: 6;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: 'row';
    flex-wrap: wrap
`

export const SectionsContainer = styled.div`
    flex: 6;
`
export const Aside = styled.aside`
    flex: 2;
    background-color: ${colors.background}
`

export const Footer = styled.footer`
    flex: 1;
    background-color: ${colors.primary}
`