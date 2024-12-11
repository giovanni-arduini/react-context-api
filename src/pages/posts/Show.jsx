import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import { useContext } from "react";

function Show() {
  const { API_BASE_URI } = useContext(GlobalContext);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  function fetchPosts() {
    axios
      .get(`${API_BASE_URI}/posts/${id}`)

      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <main>
        <section>
          <div className="container">
            <h1>Questo è il post con id: {id}</h1>
          </div>
          <div className="container">
            <>
              {posts ? (
                posts.map((post) => <Card key={post.id} props={post} />)
              ) : (
                <div>Post non trovato</div>
              )}
            </>
          </div>
        </section>
      </main>
    </>
  );
}

export default Show;
