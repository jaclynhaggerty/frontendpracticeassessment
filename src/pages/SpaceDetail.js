import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectSpaceById } from "../store/space/selectors"
import { selectToken } from "../store/user/selectors"
import styled from "styled-components"
import Story from "../components/Story"
import { useParams } from "react-router-dom"



export const SpaceDetail = (props) => {
    // get details from store by Id, get user token bc they have to be logged in
    const { spaceId } = useParams();
    const details = useSelector(selectSpaceById(spaceId));
    const token = useSelector(selectToken);
    const [stories, setStories] = useState([]);
    // make a request to backend to load stories
    useEffect(() => {
        const getStories = async () => {
            const url = `http://localhost:4000/stories/storiesBySpace/${spaceId}`
            const headers = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(url, headers);
            setStories(response.data);
        }
        getStories();
    }, [details, token, spaceId]);

    return (
        <Container>
            <div style={{color: details.color, backgroundColor: details.backgroundColor}}>
                <h1> {details.title} </h1>
                <p> {details.description} </p>
            </div>
            {stories.map(story => {
                return (
                    <Story 
                        key={story.id} 
                        name={story.name} 
                        imageUrl={story.imageUrl}
                        content={story.content}></Story>
                )
            })}
        </Container>
    )
}

const Container = styled.div`

`
