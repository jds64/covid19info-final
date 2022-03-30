import Image from 'next/image'
import styled from 'styled-components'

const Thumb = styled.img`
  display: block;
  border-radius: 100%;
`;

const Details = styled.div`
  display: block;
  margin-left: 32px;
`;

const Name = styled.span`
  display: block;
  font-weight: 600;
`;

const Contribution = styled.span`
  font-weight: 400;
  font-size: 18px;
`;

export default function Contributor({ image, name, contrib }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
      <Thumb src={image} width={128} height={128} />
      <Details>
        <Name>{name}</Name>
        <Contribution>{contrib}</Contribution>
      </Details>
    </div>
  )
}