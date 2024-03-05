import { useState } from "react";
import { addCategory, addRecipe } from "../services/apiFacade";

export default function CategoryForm() {
    const [input, setInput] = useState("");

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log("Submitting", input);

        addCategory({ name: input });
    }

    return (
        <>
            <h2>Add a new category</h2>
            <form action="submit">
                <input type="text" placeholder="Name of new category..." value={input} onChange={handleInput} />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
}
