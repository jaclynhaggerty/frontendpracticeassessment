import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeStory } from "../store/user/slice"
import { selectToken, selectUserSpace, selectUserStories } from "../store/user/selectors"
import styled from "styled-components"
import Story from "../components/Story"
import StoryForm from "../components/StoryForm"
import { getUserWithStoredToken } from "../store/user/thunks"
import { useEffect } from "react"


// Page for a user to edit their space
export const MySpace = (props) => {
    const dispatch = useDispatch();
    // get details from store by Id, get user token bc they have to be logged in
    const userSpace = useSelector(selectUserSpace);
    const userStories = useSelector(selectUserStories);
    const token = useSelector(selectToken);
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    useEffect(() => {
      dispatch(getUserWithStoredToken)
    }, [dispatch])
    

    const deleteStory = async (storyId) => {
        const url = `http://localhost:4000/stories/${storyId}`
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.delete(url, headers);
        if (response.status === 200) {
            // deleted the story successfully, update the array
            dispatch(removeStory(storyId));
        }
        else {
            console.log("error deleting story")
        }
    }

    return (
        <Container>
            <div style={{ color: userSpace.color, backgroundColor: userSpace.backgroundColor }}>
                <h1> {userSpace.title} </h1>
                <p> {userSpace.description} </p>
            </div>
            {!!token && <button onClick={handleShowForm}>Post a cool story bro!</button>}
            {!!showForm && <StoryForm setShowForm={setShowForm}></StoryForm>}
            {!!userStories && userStories.map(story => {
                return (
                    <div>
                        <Story
                            key={story.id}
                            name={story.name}
                            imageUrl={story.imageUrl}
                            content={story.content}></Story>
                        <button onClick={e => deleteStory(story.id)}>Delete Story</button>
                    </div>
                )
            })}
        </Container>
    )
}

const Container = styled.div`

`
