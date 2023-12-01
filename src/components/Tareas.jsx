export const Tareas = ({ text, disable, deleteHandler }) => {
  return (
    <div
      className={`mt-4 ml-2 bg-green-700 rounded-lg w-56  p-4 py-6 relative ${
        disable ? " pointer-events-none opacity-50" : ""
      }`}
    >
      <button
        onClick={deleteHandler}
        className=" text-white mt-2 absolute right-2 top-0"
      >
        X
      </button>
      <p className=" text-white text-lg">{text}</p>
    </div>
  );
};
