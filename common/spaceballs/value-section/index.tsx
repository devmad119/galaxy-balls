import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { ValueSectionContainer, CardList, Card, Description } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const ValueSection: React.FC = () => {
  const { locale } = useRouter()

  return (
    <Wrapper>
      <ValueSectionContainer>
        <CardList>
          <Card>
            <Description>
              <h4>{trans(locale, 'space-balls', 'rankinglist')}</h4>
              <p>{trans(locale, 'space-balls', 'rankinglist-desc')}</p>
            </Description>
            <Image src="/assets/images/spaceballs/rankinglist.png" alt="no img" width={256} height={256} />
          </Card>
          <Card>
            <Description>
              <h4>{trans(locale, 'space-balls', 'chat')}</h4>
              <p>{trans(locale, 'space-balls', 'chat-desc')}</p>
            </Description>
            <Image src="/assets/images/spaceballs/chat.png" alt="no img" width={256} height={256} />
          </Card>
          <Card>
            <Description>
              <h4>{trans(locale, 'space-balls', 'team')}</h4>
              <p>{trans(locale, 'space-balls', 'team-desc')}</p>
            </Description>
            <Image src="/assets/images/spaceballs/team.png" alt="no img" width={256} height={256} />
          </Card>
          <Card>
            <Description>
              <h4>{trans(locale, 'space-balls', 'winners')}</h4>
              <p>{trans(locale, 'space-balls', 'winners-desc')}</p>
            </Description>
            <Image src="/assets/images/spaceballs/winners.png" alt="no img" width={256} height={256} />
          </Card>
        </CardList>
      </ValueSectionContainer>
    </Wrapper>
  )
}

export default ValueSection
