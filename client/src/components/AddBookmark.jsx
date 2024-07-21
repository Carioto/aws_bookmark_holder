import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_A_BOOKMARK } from "../utils/mutations";
import { Link } from "react-router-dom";
import "../style/AddBookmark.css";
import Auth from "../utils/auth";

const AddBookmark = () => {
  const userId = Auth.getProfile().data._id;

  const [bookmark, setBookmark] = useState({
    url: "",
    description: "",
    category: "",
    id: userId,
  });
  const [addBM, { error, data }] = useMutation(ADD_A_BOOKMARK);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookmark({
      ...bookmark,
      [name]: value,
    });
  };

  const addToDb = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addBM({
        variables: { ...bookmark },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="addDiv">
        <div className="addCont">
          <form onSubmit={addToDb}>
            <input
              className="urlIn"
              name="url"
              placeholder="URL"
              value={bookmark.url}
              onChange={handleChange}
            />
            <input
              className="descIn"
              name="description"
              placeholder="Description"
              value={bookmark.description}
              onChange={handleChange}
            />
            <input
              className="catIn"
              name="category"
              placeholder="Category"
              value={bookmark.category}
              onChange={handleChange}
            />
            <button className="addBookSub" type="submit">
              Submit
            </button>
            <button>
              <Link to="/" className="text-black homeBut">
                Go Back
              </Link>
            </button>
          </form>
        </div>
        {data && (
          <div className="my-3 p-3 text-success text-center comms">
            <span>Bookmark Added - {data.addBookmark.description}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default AddBookmark;
