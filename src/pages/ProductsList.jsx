
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Anouncements from '../components/Anouncements';
import NewsLetter from '../components/NewsLetter'

import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductsList = () => {
  const location = useLocation()

  const category = location.pathname.split("/")[2]

  const [filters, setFilters] = useState({})
  const [sorts, setSorts] = useState('newest')

  const handleFilters = (e) =>{

    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name] : value
    })
  }
  return (
    <Container>
    <Navbar />
    <Anouncements />
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select name="color"  onChange={handleFilters}>
          <Option disabled >
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select name="size" onChange={handleFilters}>
          <Option disabled >
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={(e) => setSorts(e.target.value)}>
          <Option value={"newset"} >Newest</Option>
          <Option value={"asc"}>Price (asc)</Option>
          <Option value={"desc"}>Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <Products cats={category} filters={filters} sorts={sorts} />
    <NewsLetter />
    <Footer />
  </Container>
  )
}

export default ProductsList