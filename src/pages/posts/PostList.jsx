import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import Card from "../../Components/Card/Card";

function PostList() {
  const { posts } = useContext(GlobalContext);

  return (
    <div className="container ">
      <div className="row">
        <>
          {posts.length !== 0 &&
            posts.map((post) => {
              return (
                <div key={post.id} className="col-6">
                  <Card post={post} />
                </div>
              );
            })}
        </>
      </div>
    </div>
  );
}

export default PostList;
