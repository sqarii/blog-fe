const posts = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Pierwszy post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque sem et elit venenatis faucibus. Aliquam lobortis convallis imperdiet. Suspendisse consequat semper nisl, nec faucibus lorem dictum aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse cursus, neque ut congue convallis, ipsum ante sagittis leo, eu placerat massa quam ut leo. Etiam mollis et ex nec sagittis",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Drugi post",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque sem et elit venenatis faucibus. Aliquam lobortis convallis imperdiet. Suspendisse consequat semper nisl, nec faucibus lorem dictum aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse cursus, neque ut congue convallis, ipsum ante sagittis leo, eu placerat massa quam ut leo. Etiam mollis et ex nec sagittis",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg",
    title: "Trzeci post",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque sem et elit venenatis faucibus. Aliquam lobortis convallis imperdiet. Suspendisse consequat semper nisl, nec faucibus lorem dictum aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse cursus, neque ut congue convallis, ipsum ante sagittis leo, eu placerat massa quam ut leo. Etiam mollis et ex nec sagittis",
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
