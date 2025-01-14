import styled from 'styled-components/macro'

export const OuterWrapper = styled.section`
background-color: var(--color-grey);
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`
export const Container = styled.div`
background-color: var(--color-darkGreen);
box-shadow: 0 15px 35px rgba(50,50,93,.3), 0 5px 15px rgba(0,0,0,0.5);
width: 80vw;
min-height: 70%;
height: fit-content;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
margin: 2.5em;
padding: 2em;

@media (min-width: 667px) and (max-width: 1024px)  {
width: 60vw;
min-height: 60%;
}

@media screen and (min-width: 1024px) {
width: 30vw;
min-height: 50%;
}
`
