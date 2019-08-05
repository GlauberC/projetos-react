import styled from 'styled-components'

const sizes = {
    s48: '3em',
    s32: '2em',
    s20: '1.250em'
}
const colors = {
    type1: '#000000',
    type2: '#FEC63E',
    type3: '#ffffff',
    type4: '#484B4D'
}

const fonts = {
    type1: 'font-family: Arial, Helvetica, sans-serif'
}


export const LiLink = styled.li`
    a{
        text-decoration: none;
        font-size: ${sizes.s20};
        color: ${colors.type4};
        text-transform: uppercase;
        font-weight: bolder;
        font-family: ${fonts.type1}
    }
`
