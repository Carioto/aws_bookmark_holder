import { useMutation } from "@apollo/client";
import { useState } from "react";
import "../style/BookmarkCat.css";
import { DEL_A_BOOKMARK } from "../utils/mutations";
import EditBookmark from "./EditBookmark.jsx";

export default function BookmarkCat(props) {
  const [theList, setTheList] = useState(props.props.data.getAUsersBookmarks);

  const uniqueCats = theList
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const [deleteBM, { error, data }] = useMutation(DEL_A_BOOKMARK);

  const delBM = async (e) => {
    try {
      await deleteBM({
        variables: { id: e.target.value },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const editBM = (e) => {
    const targetBM = e.target.value;
    console.log("🚀 ~ editBM ~ targetBM:", targetBM);

    return (
      <>
        <EditBookmark props={{ targetBM }} />
      </>
    );
  };

  const SingCat = (item) => {
    let arr = [];
    theList.map((url) => {
      if (url.category === item.props) {
        const urlTrip = [url.url, url.description, url.category, url._id];
        arr.push(
          <li key={url._id}>
            <a href={url.url} target="_blank" className="trydeed">
              {url.description}
            </a>
            <button value={url._id} className="deleteBut" onClick={delBM}>
              🗑️
            </button>
          </li>,
        );
      }
    });
    return arr;
  };

  //add to above for edit url
  {
    /* <button value={urlTrip} className='editBut'onClick={editBM} >🖊️</button>| */
  }

  const ThisDisplay = () => {
    return (
      <div className="bookmarkCol">
        {uniqueCats.map((item) => (
          <div key={item}>
            <h4 className="text-center">{item}</h4>
            <ul>
              <SingCat props={item} />
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div>
        <ThisDisplay theList={theList} />
      </div>
    </>
  );
}
