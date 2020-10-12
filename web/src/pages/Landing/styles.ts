import styled from 'styled-components'
import backgroundImg from '../../assets/images/landing.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${backgroundImg}) no-repeat 80% center;

  main h1 {
    max-width: 350px;
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  main p {
    max-width: 350px;
    margin-top: 40px;
    font-size: 24px;
    line-height: 32px;
  }

  div {
    position: absolute;

    top: 0;
    right: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;
    text-align: right;

    & strong {
      font-weight: 800;
    }
  }

  a {
    position: absolute;

    bottom: 0;
    right: 0;

    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.3s;

    &:hover {
      background: #96feff;
    }
  }
`
