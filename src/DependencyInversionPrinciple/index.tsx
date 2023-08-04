import { useData } from "./useFetch";


type responseType = {
  id: number;
  title: string;
};
/** Use any of the fetcher implementations
 * As demonstrated every fetcher shows a different implementation of the principle
 */
const fetcher = async (): Promise<responseType[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);

  return res.json();
};

// const fetcher = async (): Promise<responseType[]> => {

//   return [{ id: 1, title: "Hello"}, { id: 2, title: "World" }];
// };

// const fetcher = async (): Promise<responseType[]> => {
//   //for this example to work please create the item in the local storage
//   const posts = localStorage.getItem("posts");

//   return posts ? JSON.parse(posts) : [];
// };

const Todo = () => {
  const { data } = useData<responseType[]>({ key: '/todos', fetcher });

  if(!data) return <p>...loading</p>

  return (
    <ul>
      {data.map((todo: any) => {
        return (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        )
      })}
    </ul>
  );
};

export default Todo;