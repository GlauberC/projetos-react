import React from 'react'
import {Container, GridContainer, FloatContainer, ImgContainer} from '../style/page'
import {Logo, Menu} from '../style/header'
import {colors} from '../style/design'
import {LiLink} from '../style/typo'
import {Link} from 'react-router-dom'



export default props => (
            <Container bgColor = {colors.primary} height = '100' style = {styles.navbarStyle}>
                <GridContainer>
                    <FloatContainer float = 'left'>
                        <Link to = "/"><Logo src={require('../assets/img/navbar/Logo.png')} alt="logo" /></Link>
                        
                    </FloatContainer>
                    <FloatContainer float = 'right'>
                        <Menu>
                            <ul>
                                <LiLink><Link to = '/sobre'>sobre</Link></LiLink>
                                <LiLink><Link to = '/produtos'>produtos</Link></LiLink>
                                <LiLink><Link to = '/portfolio'>portfólio</Link></LiLink>
                                <LiLink><Link to = '/contato'>contato</Link></LiLink>
                            </ul>
                        </Menu>
                    </FloatContainer>
                </GridContainer>
            </Container>
)
const styles = {
    navbarStyle: {
        position: 'fixed'
    }
}