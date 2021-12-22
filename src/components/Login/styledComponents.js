import styled from 'styled-components/macro'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const WebsiteLogoMobileImage = styled.img`
  height: 20px;
  width: 60px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const FormContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const WebsiteLogoDesktopImage = styled.img`
  height: 40px;
  width: 140px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const CheckInput = styled.input`
  height: 20px;
  width: 20px;
`
export const LabelForCheckbox = styled.label`
  color: #1e293b;
  font-size: 14px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  color: #ffffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;

  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  text-align: center;
`

export const errorElement = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const InputLabel = styled.label`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FormInput = styled.input`
  line-height: 40px;
  padding: 15px;
  border: 1px solid #000000;
  outline: none;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
  color: #7e858e;
`
