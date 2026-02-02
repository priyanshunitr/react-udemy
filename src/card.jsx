function Card({ Title, Description }) {
  return (
    <div className="card px-4 py-16 border border-gray-300 rounded-lg shadow-md text-center">
      <img
        className="w-40 mx-auto"
        src="https://i.pinimg.com/474x/8a/ef/e5/8aefe52d46163b04fcd593350459327a.jpg"
        alt="luffy"
      />
      <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">{Title}</h2>
      <p>{Description}</p>
      </div>
    </div>
  );
}

export default Card;
