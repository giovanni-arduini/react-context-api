import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

function DeletePost({ id }) {
  const { deletePost } = useContext(GlobalContext);
  function handleDeletePost() {
    deletePost(id);
  }

  return <button onClick={handleDeletePost}>Cancella il post</button>;
}

export default DeletePost;
