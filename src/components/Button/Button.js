import React from "react";
function nextPage(pageLink) {
  return <button className="nextPage">{pageLink.children}</button>;
}

export default nextPage;
