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
        <Header title="COVID-19 Info — Stats" />
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
            statistic="2,951"
            label="Emails read &amp; replied to"
            icon="/img/svg/mail.svg"
            width={64}
            height={48}
          />
          <Stat
            statistic="100M+"
            label="Doses of the vaccine given out"
            icon="/img/svg/needle.svg"
            width={64}
            height={64}
          />
        </div>
      </Container>
      <Footer /> 
    </>
  ) 
}