import "./NewUserPage.css";
import React from "react";

export const NewUserPage = () => {
  return (
    <div>
      <div className="indexHero">
        <div className="indexHeroTextBox">
          <div className="indexHeroText">
            <h1>Signup</h1>
            <form>
              <input name="name" placeholder="Write your name" />
              <input name="email" type="email" placeholder="Write your email" />
              <input
                name="password"
                type="password"
                placeholder="Write your password"
              />
              <input  type="Submit" value="Sign up" />
            </form>
            <p>
              <a href="/session/new">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
