import React from "react";

class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, "");
  }
}
const regExp = new RegExp1("<.*?>", "g");

const WikiCard = ({ results }) => {
  const renderCard = results.map((result) => {
    return (
      <div className="column" key={result.pageid}>
        <div className="ui fluid card">
          <div className="content">
            <h4 className="ui sub head">{result.title}</h4>
          </div>
          <div className="content">
            <div className="summary" style={{ textIndent: "20px" }}>
              {result.snippet.replace(regExp)}
            </div>
          </div>
          <div className="extra content">
            <a
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              className="ui inverted green  button small right floated content"
            >
              Go
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="ui two column grid" style={{ margin: "10px" }}>
      {renderCard}
    </div>
  );
};

export default WikiCard;
