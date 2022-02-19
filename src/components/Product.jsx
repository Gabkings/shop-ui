import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
background: rgba(0,0,0, 0.2);
display: flex;
justify-content: center;
align-items: center;
z-index: 3
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`

const Image = styled.img`
    height: 75%;
    z-index: 2
`


 const Icon = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 0 3px;

    transition: all 0.8s ease;

    &:hover{
        background-color: #e9f5f5;
        trasform: scale(1.2)
    }
 `

const Product = ({product}) => {
  return (
    <Container>
        <Circle />
        <Image src={product.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            
            <Icon>
                <SearchOutlined />
            </Icon>
            
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product