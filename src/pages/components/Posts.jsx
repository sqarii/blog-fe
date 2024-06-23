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
      "https://www.google.com/imgres?q=funny%20dogs&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe5%2Fb9%2F81%2Fe5b98110fcd62d6ebe0e636262170175.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fhehe-in-2023--63402307247865935%2F&docid=4ykV4fu38bf9yM&tbnid=7dmKRxP2nmfrDM&vet=12ahUKEwi04MnTtfKGAxVbDRAIHZDgBV8QM3oECBoQAA..i&w=735&h=781&hcb=2&ved=2ahUKEwi04MnTtfKGAxVbDRAIHZDgBV8QM3oECBoQAA",
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
          <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
