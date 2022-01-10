import styled from 'styled-components/macro'

export const ItemHeaderBgContainer = styled.div`
  background-color: ${props => props.bgColor}
  width: 100%;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
  padding: 20px;
  border:none;
 
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ItemName = styled.h1`
  color: ${props => props.color};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
  padding-left: 10px;
`
