import styled from 'styled-components'

export const SequencerBoard = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
height: 72vh;
`
export const MainWrapper = styled.div`
background: ${props=>props.theme.background.idle};
width: 88.8vmin;
height: 100vmin;
margin: 0 auto;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
`
