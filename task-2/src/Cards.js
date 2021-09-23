import './Cards.css';
import React, { useState } from "react";

function Cards() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <>
      <header className="Navbar">
        <h1 className="logo"></h1>
        <div className="button" onClick={getUsers}>GET USERS</div>
      </header>
      <p className="heading">The List of Users displayed below:</p>
      <div className="rowline">
        {users?.map((current, index) => {
          return (
            <div className="cards columnline" key={index}>
              <img src={current.avatar} className="cards_img_top" alt="..." />
              <div className="cards_body">
                <h3 className="cards_title">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="cards_text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <footer className="footer">
        <p>Designed By <a href="https://www.linkedin.com/in/utkarsh-srivastava-938553154/">Utkarsh Srivastava</a></p>
      </footer>
    </>
  );
}

export default Cards;