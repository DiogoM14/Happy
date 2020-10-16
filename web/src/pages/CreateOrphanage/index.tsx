import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'

import SideBar from '../../components/SideBar'

import { FiPlus } from 'react-icons/fi'

import { Container, Main, Form, Fieldset, InputBlock } from './styles'
import mapIcon from '../../utils/masIcon'

export default function CreateOrphanage() {
  return (
    <Container>
      <SideBar />

      <Main>
        <Form>
          <Fieldset>
            <legend>Dados</legend>

            <Map
              center={[41.3255223, -8.3855327]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </InputBlock>
          </Fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </Form>
      </Main>
    </Container>
  )
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
