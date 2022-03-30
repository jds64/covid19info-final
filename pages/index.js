import Link from 'next/link';
import Container from '../src/components/container';
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Navigation from '../src/components/navigation';
import VLine from '../src/components/vline';

export default function Home() {
  return (
    <>
      <Navigation />
      <Container>
        <Header title="Restrictions are ending across the UK." />
        <p>Restrictions are coming to an end across the UK.</p>
        <p>While you're still encouraged to wear a mask and distance yourself from others where possible, the government is ending it's restrictions on travel, masks and other things in most areas.</p>
        <p>Local information &amp; resources can be found by searching "COVID-19 rules in my area" online.</p>
        <p>
          <span style={{ fontWeight: 500 }}>Free testing remains in place until April 1st 2022.</span>
          &nbsp;After this date you'll no longer be able to request a COVID test for free, and if you're required to produce a negative test, you must purchase one yourself.
        </p>
        <div className="spacer" style={{ padding: '16px' }} />
        <VLine />
        <div className="spacer" style={{ padding: '16px' }} />
        <div style={{ textAlign: 'center', letterSpacing: '-0.02em' }}>
          <p>Thank you for using COVID-19 Online Information &amp; Help!</p>
          <p>Take a look at some&nbsp;
            <Link href="/stats">
              <a style={{ color: '#09f' }}>
                statistics
              </a>
            </Link>
            &nbsp;we've gathered over our time online.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  )
}