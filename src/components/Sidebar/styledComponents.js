import styled from 'styled-components/macro'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const SidebarTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
`
export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LinkItem = styled.Link`
  text-decoration: none;
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
`
export const SidebarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const FooterHeading = styled.h1`
  font-size: 14px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 20px;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconImage = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px;
`
export const FooterText = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 800;
`
export const ChangeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
