function CreatePost() {
  return (
    <>
      <div className="create">
        <h2>Create Post</h2>
        <form id="postForm">
          <input type="text" id="title" placeholder="Title" required />
          <textarea id="content" placeholder="Content" required></textarea>
          <input type="text" id="image" placeholder="Image URL" />
          <input
            type="number"
            id="author_id"
            placeholder="Author ID"
            required
          />
        </form>
        <button className="submit-post" type="submit">
          Create Post
        </button>
      </div>
    </>
  );
}

export default CreatePost;
