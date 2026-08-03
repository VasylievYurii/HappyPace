import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Контакти</h2>
      <p>Email: contact@happypace.com</p>
      <p>Телефон: +380 12 345 6789</p>
    </FooterContainer>
  );
};

export default Footer;