import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHome } from "../hooks/useHome";

const Home = () => {
  const { username } = useParams();
  const { fetchLinks } = useHome();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks({ username }).then((fetchedLinks) => {
      setLinks(fetchedLinks.links)
    })
    .catch((error)=>{
      console.error(error)
    })
  }, [username, fetchLinks]);

  return (
    <div>
      <h1>{username}</h1>

      {links.map((link) => (
        <a key={link._id} href={link.url} target="_blank" rel="noreferrer">
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Home;
