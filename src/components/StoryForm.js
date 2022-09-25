import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUserSpace } from "../store/user/selectors";
import { addStory } from "../store/user/slice";


const StoryForm = (props) => {
    const dispatch = useDispatch();
    // Get the token and space for creating the story
    const token = useSelector(selectToken);
    const space = useSelector(selectUserSpace)
    console.log(space)

    // Handle form values
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create the story
        const url = `http://localhost:4000/stories`
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const story = {name, content, imageUrl, spaceId: space.id}
        console.log(story)
        const newStory = await axios.post(url, story, headers);
        console.log(newStory)
        // Add the story to the user store
        if (newStory) {
            dispatch(addStory(newStory));
            // Hide the form again
            props.setShowForm(false);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Story Name:
                    <input type='text' onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Content:
                    <input type='text' onChange={(e) => setContent(e.target.value)}/>
                </label>
                <label>
                    Image URL:
                    <input type='text' onChange={(e) => setImageUrl(e.target.value)}/>
                </label>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default StoryForm;