import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { Container, ContentWrapper } from './styles'

import logoImg from '../../assets/images/logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="happy logo" />

        <main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div>
            <strong>Porto</strong>
            <span>Paços de Ferreira</span>
          </div>

          <a href="">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </main>
      </ContentWrapper>
    </Container>
  )
}

export default Landing
