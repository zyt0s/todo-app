
export default function TodoItem({ isActive, title, onDelete }){
  return(
    <>
      <div className="flex mt-2">
        <h1 className="w-3/4 border-2">{title}</h1>
        <button onClick={onDelete} className="w-1/4 border-2">delete</button>
      </div>
    </>
  );
}
