import { useState } from "react";
import { useMutation } from "react-query";

import client from "utils/react-query-client";
import poster from "utils/poster";
import { API_URI, API_URI_LANG_KEY } from "utils/constants";

function AddTodo() {
  const [newItem, setNewItem] = useState("");

  const mutation = useMutation(
    (body) => poster(API_URI + "add-lang", body),
    {
      onSuccess(data) {
        console.log("Got response from backend: ", { data });
        client.invalidateQueries(API_URI_LANG_KEY);
      },
      onError(error) {
        console.log("Got response from backend (error): ", error);
      },
    }
  );

  function callMutation() {
    if (newItem.length === 0) return
    mutation.mutate({ record: newItem });
    setNewItem("");
  }

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add Todo"
      />
      <button
        onClick={callMutation}
        className="flex-no-shrink p-2 border-2 rounded text-black border-teal"
      >
        Add
      </button>
    </div>);
}

export default AddTodo;
