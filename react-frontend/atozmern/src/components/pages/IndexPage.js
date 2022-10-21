import './IndexPage.css';
import React from 'react';

export const IndexPage= () => {
  return (
    <div>
      <div className="indexHero">
        <div className="indexHeroTextBox">
          <div className="indexHeroText">
            <h1>Noteserama</h1>
            <h2>Never forget a thing with Noteserama</h2>
            <p>
              <a href="/user/new">Sign up</a>
            </p>
            <p>
              <a href="/session/new">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}