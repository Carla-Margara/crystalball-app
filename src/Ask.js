import React from "react";
import "./Ask.css";

export default function Ask() {
  return (
    <div className="Ask">
      <form>
        <input type="search" />
        <input type="submit" value="Ask" />
      </form>
    </div>
  );
}
