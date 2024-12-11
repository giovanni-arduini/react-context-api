import style from "./Card.module.css";

function Card({ post }) {
  const { id, image, title, category, content, tags, published } = post;

  return (
    <>
      <div className={style.card}>
        <img
          className={style.thumbnail}
          src={image ? `/imgs/posts/${image}` : "placeholder"}
          alt=""
        />

        <div className={style.body}>
          <h3 className={style.title}>{title}</h3>
          <div key={id}></div>
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

          {/* <div className={style.buttons}>
            <div>
              <Button />
            </div>
            <div>
              <CancelBtn posts={props} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
