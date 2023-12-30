import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const AniDetails = ({ book }) => {
  // ReadNow needs to be add functionality

  const ref = useRef(null);
  const [ShowReadMore, setShowReadMore] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight);
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);

  const ReadMoreCSS = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  return (
    <article className="BookInfo">
      <section className="DetailsContainer">
        <section className="BookContent">
          <section className="AnisContent">
            <div className="Cover">
              <div className="BookPoster">
                <img src={book.icons} alt="" />
              </div>
            </div>
            <section className="BookDetails">
              <h2 className="BookName">{book.title}</h2>
              <span className="ReadNow">
                <a href="" className="btn btn-primary btn-play">
                  <FontAwesomeIcon icon={faEye} />
                  {" Read Now(NW)"}
                </a>
              </span>
              <div className="BookMark">
                <a href="" className="btn btn-light btn-fav">
                  <FontAwesomeIcon icon={faBookmark} />
                </a>
              </div>
              <section className="BookDesc">
                <div className="Genres">
                  {book.genres.map((genre, index) => (
                    <a key={index} href="" className="GenreElement">
                      {genre}
                    </a>
                  ))}
                </div>
                <p style={isExpanded ? null : ReadMoreCSS} ref={ref}>
                  {book.body}
                </p>
                {ShowReadMore && (
                  <button
                    className="btn ReadMore"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Read Less..." : "Read More..."}
                  </button>
                )}
              </section>
              <section className="StatusContainer">
                <section className="StatusInfo">
                  <p className="Status">Status: {book.status}</p>
                  <p className="Published">Published: {book.published}</p>
                  <p className="Author">Author: {book.author}</p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </article>
  );
};

export default AniDetails;
