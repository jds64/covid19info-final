import Image from 'next/image';
import styled from 'styled-components'
import { css } from 'styled-components';

export const AnimatedNumber = styled.span`
  @property --num {
    syntax: "<integer>";
    initial-value: ${props => props.from || 0};
    inherits: false;
  }

  transition: --num 1.5s;
  counter-set: num var(--num);

  &::after {
    content: counter(num);
  }
`

const StatWrapper = styled.div`
  display: block;
  margin: 40px 0px;
`;

const StatInner = styled.div`
  display: flex;
  align-items: center;
`;

const StatLabel = styled.span`
  font-size: 24px;
  font-weight: 300;
`;

const StatIcon = styled.span`
  fill: #09f;
  stroke: #09f;
`;

const StatTitle = styled.h2`
  font-size: 96px;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin: 0;
  margin-left: 32px;

  @media screen and (max-width: 720px) {
    font-size: 72px;
  }

  @media screen and (max-width: 600px) {
    font-size: 64px;
  }

  @media screen and (max-width: 480px) {
    font-size: 48px;
  }
`;

export default function Stat({ statistic, label, icon, width, height }) {
  return (
    <StatWrapper>
      <StatInner>
        <StatIcon>
          <Image src={icon} width={width} height={height} />
        </StatIcon>
        <StatTitle>{statistic}</StatTitle>
      </StatInner>
      <StatLabel>{label}</StatLabel>
    </StatWrapper>
  )
}