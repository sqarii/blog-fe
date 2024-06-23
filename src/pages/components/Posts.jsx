const posts = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Pierwszy post",
    content: "To jest opis pierwszego posta.",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Drugi post",
    description: "To jest opis drugiego posta.",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Trzeci post",
    description: "To jest opis trzeciego posta.",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Czwarty post",
    description: "To jest opis czwartego posta.",
  },
];

function Posts() {
  return (
    <div className="posts">
      {posts.map((post, i) => (
        <div key={post.id} className={`post post-${i}`}>
          <img src={post.image} alt={post.title} />

          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
