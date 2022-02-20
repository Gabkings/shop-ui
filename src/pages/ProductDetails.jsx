
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Anouncements from '../components/Anouncements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
    
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.p`
    font-weight: 400;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    margin: 30px 0;
    width: 50%;
    display: flex;
    justify-content: space-between
`
const Filter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const FilterTitle = styled.p`
    font-weight: 300;
    font-size: 20px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
    margin: 0px 10px;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 6px;

`
const FilterOption = styled.option``
const AndContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background: white;
    font-weight: 500;
`


const ProductDetails = () => {
  return (
    <Container>
        <Navbar />
        <Anouncements />
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/cXFnLLV/3.png" />
            </ImageContainer>
            <InfoContainer>
                <Title> 
                    Lorem ipsum.                  
                </Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt temporibus tenetur at! Qui suscipit tempora incidunt porro nisi facere doloremque repudiandae, nobis esse explicabo aut cupiditate officia soluta ducimus.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                        
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AndContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>2</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AndContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductDetails