import React from "react";
import BookItem_h from "./BookItem_h";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MainContents({ API_URL }) {
  const [LU, setLU] = useState([]);
  const [MV, setMV] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responseLU = await fetch(`${API_URL}/lastest_updated`);
        const responseMV = await fetch(`${API_URL}/most_viewed`);
        if (!responseLU.ok || !responseMV.ok)
          throw new Error("No expected data returned");
        const LUs = await responseLU.json();
        const MUs = await responseMV.json();
        setLU(LUs);
        setMV(MUs);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 100);
  }, []);

  return (
    <div className="HomeMWrapper">
      <div className="HomeMContainer">
        <div className="hw-2col">
          <section className="HomeContent-left">
            <div className="Content-area">
              <div className="hmc-header">
                <div className="hmc-heading">
                  <h2 className="Header-label">Lastest Updated</h2>
                </div>
              </div>
              <div className="hcm-content">
                <div className="hcm-wrap">
                  {LU.map((book) => (
                    <BookItem_h key={book.id} book={book} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="HomeContent-right">
            <div className="Most-viewed">
              <div className="mv-header">
                <div className="mv-heading">
                  <h2 className="Header-label">Most Viewed</h2>
                </div>
              </div>
              <div className="mv-content">
                <div className="mv-contentBox">
                  <div className="mv-tabContent">
                    <div className="mv-featureBox">
                      <ul className="mv-list">
                        {MV.map((book, index) => (
                          <li className="mv-itemLi" key={book.id}>
                            <div className="Ranking-num">
                              <span>{index + 1}</span>
                            </div>
                            <div className="mv-poster">
                              <Link to={`/book/${book.title}`}>
                                <img src={book.icons} alt="" />
                              </Link>
                            </div>
                            <div className="mv-details">
                              <h3 className="mv-title">
                                <Link to={`/book/${book.title}`}>{book.title}</Link>
                              </h3>
                              <div className="mv-info">
                                <span className="fd-item">EN/VIE </span>
                                <span className="dot"></span>
                                <span className="fd-genres">
                                  {book.genres.slice(0, 2).map((genre, index) => (
                                    <a key={index} className="fd-genre">{genre}</a>
                                  ))}
                                </span>
                              </div>
                              <div className="fd-chapters">
                                <span className="fd-chapter">
                                  <a className="">{`Chapter ${book.available_chapters
                                    .slice()
                                    .sort((a, b) => b.id - a.id)[0].chapterID
                                    }`}</a>
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainContents;
