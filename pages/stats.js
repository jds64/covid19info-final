import Navigation from "../src/components/navigation";
import Header from "../src/components/header";
import Container from "../src/components/container";
import Stat, { AnimatedNumber, AnimateClass } from "../src/components/coolstats";
import Footer from "../src/components/footer";

import { useEffect } from "react";
import Link from "next/link";

export default function Stats() {

  return (
    <>
      <Navigation />
      <Container>
        <Header title="COVID-19 Info - Stats" />
        <div>
          <Stat
            statistic="592,158"
            label="Unique visitors"
            icon="/img/svg/person.svg"
            width={64}
            height={68}
          />
          <Stat
            statistic="1,204,016"
            label="Links clicked"
            icon="/img/svg/link.svg"
            width={64}
            height={36}
          />
          <Stat
            statistic="4,951"
            label="Emails recieved"
            icon="/img/svg/mail.svg"
            width={64}
            height={48}
          />
          <Stat
            statistic="45M+"
            label="People vaccinated"
            icon="/img/svg/needle.svg"
            width={64}
            height={64}
          />
          <Stat
            statistic=">70%"
            label="Of the population fully vaccinated"
            icon="/img/svg/needle.svg"
            width={64}
            height={64}
          />
          <Stat
            statistic="2 years"
            label="Mostly spent indoors"
            icon="/img/svg/sun.svg"
            width={64}
            height={64}
          />
          <span style={{ color: 'gray', fontSize: '16px' }}>Note: We've stopped tracking these stats as of 11/02/22</span>
        </div>
      </Container>
      <Footer /> 
    </>
  ) 
}