import { Title } from "../styled"
import { Link } from "react-router-dom"
import { LinkWord } from "../styled"
import styled from "styled-components"
import Space from "../components/Space"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadSpaces } from "../store/space/thunks"
import { selectSpaces } from "../store/space/selectors"


export const Homepage = () => {
  const dispatch = useDispatch()
  // The selector will update when data is set via the think
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    // Call the thunk to return the data!
    dispatch(loadSpaces())
  }, [dispatch])

  return (
    <Container>
      <h3 style={{ textAlign: "center" }}>Practice Assessment</h3>
      <p style={{ textAlign: "center" }}>~Cool Story Bro~</p>
      {spaces.map((spaceItem) => {
        // Map over the spaces from the store and return the space component
        return (
          <Space key={spaceItem.id}
            spaceId={spaceItem.id}
            title={spaceItem.title}
            description={spaceItem.description}
            backgroundColor={spaceItem.backgroundColor}
            color={spaceItem.color}
          ></Space>
        )
      })}

    </Container>
  )
}

const Container = styled.div`
  margin: 20px
`