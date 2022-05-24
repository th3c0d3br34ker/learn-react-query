import { useQuery } from "react-query";
import { API_URI, API_URI_LANG_KEY } from "utils/constants";

function fetcher(uri) { return fetch(uri).then((d) => d.json()) }

function TodoItems() {
  const { data, isLoading, isError } = useQuery(API_URI_LANG_KEY, () =>
    fetcher(API_URI + "favlangs")
  );

  if (isLoading) return <h1>Loaiding TODO items...</h1>;

  if (isError)
    return (
      <div className="flex mb-4 items-center">
        <p>Error in fetching data.</p>
      </div>
    );

  return (
    <div>
      {data.lang.map((lang) => {
        return (
          <div className="flex mb-4 items-center" key={lang.id}>
            <p className="w-full text-black">{lang.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
