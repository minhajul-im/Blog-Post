import useFetchApi from "./useFetchApi";

const url = `https://jsonplaceholder.typicode.com/posts`;

const PostApi = () => {
  // custom hook
  const posts = useFetchApi(url, (data) =>
    data.map((item) => ({
      id: item.id,
      title: item.title,
      post: item.body,
    }))
  );

  console.log(posts);

  return (
    <div>
      <h1>Hello Api Fetch</h1>
    </div>
  );
};

export default PostApi;
