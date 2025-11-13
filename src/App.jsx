import { useState } from "react";
import axios from "axios";

function App() {
  const endPoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center my-4">REACT POST FORM</h1>
        <form className="p-4 rounded border">
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3 ">
            <label className="form-label">TITLE</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">BODY</label>
            <textarea
              name="body"
              className="form-control"
              value={formData.body}
              rows="5"
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
