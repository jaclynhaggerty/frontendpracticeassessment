import { Title } from "../styled"
import { Link } from "react-router-dom"
import { LinkWord } from "../styled"
import styled from "styled-components"

export const Homepage = () => {

  return (
    <Container>
     <h3 style={{ textAlign: "center"}}>Practice Assessment</h3>
     <p style={{ textAlign: "center"}}>~Cool Story Bro~</p>
    </Container>
  )
}

const Container = styled.div`
  margin: 20px
`