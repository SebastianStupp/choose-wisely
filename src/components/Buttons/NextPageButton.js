import React from "react";
function buttonNextPage(nextPageLink) {
  return <button className="nextPage">{nextPageLink.children}</button>;
}

export default buttonNextPage;
