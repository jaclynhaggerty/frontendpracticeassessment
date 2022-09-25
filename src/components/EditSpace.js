import { useState } from "react";


const EditSpace = (props) => {
    const [title, setTitle] = useState(props.title);

    return (
        <div>
            <form>
                <label>
                    Title:
                    <input type='text' onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type='text' onChange={(e) => {}} />
                </label>
                <label>
                    Color:
                    <input type='text' onChange={(e) => {}} />
                </label>
                <label>
                    Background Color:
                    <input type='text' onChange={(e) => {}} />
                </label>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default EditSpace;