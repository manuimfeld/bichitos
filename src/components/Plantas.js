import React from "react";
import { Link } from "react-router-dom";

const Plantas = () => {
  return (
    <div className="card-category">
      <article>
        <Link to="/plantas/interior">
          <img
            src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2022/04/03/62490bcd53326.jpeg"
            alt=""
          />
          <p>Plantas de interior</p>
        </Link>
      </article>
      <article>
        <Link to="/plantas/exterior">
          <img
            src="https://t1.uc.ltmcdn.com/es/posts/4/0/2/como_cuidar_las_alegrias_del_hogar_en_invierno_28204_orig.jpg"
            alt=""
          />
          <p>Plantas de exterior</p>
        </Link>
      </article>
    </div>
  );
};

export default Plantas;
