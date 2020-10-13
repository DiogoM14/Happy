import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import mapMarkerImg from '../../assets/images/map-marker.svg'

import { Container, Aside } from './styles'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão à espera da sua visita :)</p>
        </header>

        <footer>
          <strong>Porto</strong>
          <span>Paços de Ferreira</span>
        </footer>
      </Aside>

      <div></div>

      <Link to="">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
