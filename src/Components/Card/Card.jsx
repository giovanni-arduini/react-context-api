import DeletePost from "../DeletePost/DeletePost";
import style from "./Card.module.css";

function Card({ post }) {
  const { id, image, title, category, content, tags, published } = post;
  const IMG_BASE_URI = "http://localhost:3000/imgs/posts/";

  return (
    <>
      <div className={style.card}>
        <img
          className={style.thumbnail}
          src={image ? `${IMG_BASE_URI}${image}` : "placeholder"}
          alt=""
        />

        <div className={style.body}>
          <h3 className={style.title}>{title}</h3>
          <div className={style.description}>{content}</div>
          <div key={id}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={` ${style.cardTag} ${
                  style[tag.split(" ").join("")]
                }`}
              >
                {/* `${getClassByTag(tag)} si poteva inserire tra le classi dopo la logica switch sopra*/}
                {tag}
              </span>
            ))}
          </div>
          <div>
            <DeletePost id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
