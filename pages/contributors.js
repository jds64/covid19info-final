import styled from 'styled-components'

import Navigation from '../src/components/navigation'
import Header from '../src/components/header'
import Container from '../src/components/container'
import Footer from '../src/components/footer'
import VLine from '../src/components/vline'
import Contributor from '../src/components/contributor'


export default function Contributors() {
  return (
    <>
      <Navigation />
      <Container style={{ maxWidth: '1080px' }}>
        <Header title="COVID-19 Info - Contributors" />
        <div>
          <p style={{ marginBottom: '64px' }}>Thank you to everyone who contributed to this project, your time and effort is greatly appreciated.</p>
          <Contributor name="Joshua Stubbs" contrib="Project Lead / Site Creator" image="/img/joshua_stubbs.jpg" />
          <Contributor name="Tina Yang" contrib="Data, Links &amp; Contact" image="/img/tina_yang.jpg" />
          <Contributor name="Andrew Thomas" contrib="Backend &amp; Infrastructure" image="/img/andrew_thomas.jpg" />
          <Contributor name="Jane Welling" contrib="Data, Links &amp; Contact" image="/img/jane_welling.jpg" />
        </div>
      </Container>
      <Footer />
    </>
  )
}