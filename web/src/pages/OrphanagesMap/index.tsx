import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../assets/images/map-marker.svg'

import mapIcon from '../../utils/masIcon'

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

      <Map
        center={[41.2759619, -8.394971]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[41.3255223, -8.3855327]}>
          <Popup
            className="map-popup"
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanage/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
