import useFetchApi from "./useFetchApi";

const url = `https://jsonplaceholder.typicode.com/posts`;

const PostApi = () => {
  // custom hook
  const posts = useFetchApi(url, (data) =>
    data.slice(0, 20).map((item) => ({
      id: item.id,
      title: item.title,
      post: item.body,
    }))
  );

  // it's a array
  const myData = posts.data;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello Api Fetch</h1>

      {/* /* check loading or error  */}

      {posts?.loading && <h3>Loading.........</h3>}
      {posts?.error && <h3> {posts?.error} </h3>}

      {/*  not error or loading  then display data  * */}
      {myData.map((item, index) => (
        <div key={item.id}>
          <h6> {index} </h6>
          <h4> {item.title} </h4>
          <p>{item.post} </p>
        </div>
      ))}
    </div>
  );
};

export default PostApi;
