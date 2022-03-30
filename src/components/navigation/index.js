import styled from 'styled-components'
import Link from 'next/link'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 24px;
  background-color: var(--theme-color);

  @media screen and (max-width: 640px) {
    display: block;
    max-height: 72px;

    a, span {
      display: block;
      text-align: center;
    }

    span {
      margin-top: 12px;
    }
  }
`;

const NavTitle = styled.a`
  display: block;
  font-weight: bold;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const NavDesc = styled.span`
  display: block;
`;

export default function Navigation() {
  return (
    <Navbar>
      <Link href="/" passHref>
        <NavTitle>COVID-19 Information &amp; Help</NavTitle>
      </Link>
      <NavDesc>Restrictions in the majority of the UK are ending, read what that means for you below.</NavDesc>
    </Navbar>
  )
}