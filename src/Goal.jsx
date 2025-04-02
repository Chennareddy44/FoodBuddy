const Goal = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-6 text-center">
        This is a bad-ass fight, kid... 🥊🔥
      </h1>
      <img
        className="w-80 sm:w-96 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZ7bRswl3dmBe1N3jBIWDvgW68NtlowC-Cw&s"
        alt="Bad-ass fight"
      />
    </div>
  );
};

export default Goal;
