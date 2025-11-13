import { useState } from "react";
import axios from "axios";

function App() {
  const endPoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  const initFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    axios
      .post(endPoint, formData, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        setFormData(initFormData);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center my-4">REACT POST FORM</h1>
        <form className="p-4 rounded border" onSubmit={handleSubmit}>
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

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="public"
              onChange={(e) =>
                setFormData({ ...formData, public: e.target.value })
              }
            />
            <label htmlFor="public" className="form-check-label">
              Select if you want to publish the post
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
