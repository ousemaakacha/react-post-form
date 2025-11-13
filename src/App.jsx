import { useState } from "react";
import axios from "axios";

function App() {
  const endPoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  const [forData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  return (
    <>
      <div>
        <h1>REACT POST FORM</h1>
        <form>
          <div>
            <label></label>
            <input type="text" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
