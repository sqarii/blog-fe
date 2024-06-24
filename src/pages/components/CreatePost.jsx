import React from "react";

const CreatePost = () => {
    const createPostData = (event) => {
        event.preventDefault();
        const data = {
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
            image: document.getElementById("image").value,
            author_id: sessionStorage.getItem("user_id"),
        };
        fetch("http://127.0.0.1/blog-be/api.php?resource=posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Type":
                    "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                window.location.reload();
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleSubmit = () => {
        console.log("test");
    };

    return (
        <>
            <div className="create">
                <h2>Create Post</h2>
                <form id="postForm" onSubmit={createPostData}>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        required
                    />
                    <textarea
                        id="content"
                        placeholder="Content"
                        required
                    ></textarea>
                    <input type="text" id="image" placeholder="Image URL" />
                    {/* <input
                        type="number"
                        id="author_id"
                        placeholder="Author ID"
                        required
                    /> */}
                    <button className="submit-post" type="submit">
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreatePost;
