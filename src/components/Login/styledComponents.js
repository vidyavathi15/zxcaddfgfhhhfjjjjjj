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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  margin-top: 10px;
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
    margin-top: 30px;
  }
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
  margin-top: 20px;
  width: 100%;
`
export const CheckboxContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  width: 100%;
`
export const CheckInput = styled.input`
  height: 20px;
  width: 20px;
  outline: none;
`
export const LabelForCheckbox = styled.label`
  color: #1e293b;
  font-size: 14px;
  font-weight: 800;
  font-family: 'Roboto';
  padding-left: 10px;
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
  background-color: blue;
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
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;

  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  background-color: transparent;

  width: 100%;
  outline: none;
`
