import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";

function Index() {
  //
  const { categories } = useContext(GlobalContext);
  const { API_BASE_URI } = useContext(GlobalContext);
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    axios
      .get(`${API_BASE_URI}posts`)

      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* {JSON.stringify(posts)} */}
      <main>
        <section>
          <div className="container">
            <h1 className="postHeader">I tuoi post</h1>
          </div>
          <div className="container">
            <ul className="categories">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
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
        </section>
      </main>
    </>
  );
}

export default Index;
