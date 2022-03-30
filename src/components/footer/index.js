import Link from 'next/link'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  min-height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto 0 auto;
  text-align: center;
`;

const FootNote = styled.span`
  display: block;
  font-size: 20px;
  color: #888;
  ${props => props.children && "margin-top: 16px"};
`;

export default function Footer({ children }) {
  return (
    <FooterWrapper>
      <div>
        {children && children}
        <span>Thank you to <Link href="/contributors" passHref><a style={{ color: '#09f' }}>contributors</a></Link>.</span>
        <FootNote>© JDS 2020-2022</FootNote>
      </div>
    </FooterWrapper>
  )
}