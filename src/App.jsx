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

  const [mess, setMess] = useState({
    text: null,
    type: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    axios
      .post(endPoint, formData, {
        headers: { "Content-type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setMess({
            text: "HAI MANDATO IL FORM...SEI CONTENTO??",
            type: "succes",
          });
        }

        setFormData(initFormData);
      })
      .catch((err) => {
        setMess({ text: err.mess, type: "danger" });
      });
  }

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center my-4">REACT POST FORM</h1>

        {mess.text && <p className={mess.type}>{mess.text}</p>}

        <form className="p-4 rounded border" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">AUTHOR</label>
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

          <div className="form-check mb-3">
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
