const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
        Got questions? Need help? Real Gs don’t need customer support, but we’ll
        humor you. Reach out, and maybe—just maybe—we’ll reply. 💪😎
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <img
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          alt="Contact Meme"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJkSyuoLZuHZUkbJBKGItYcZgUoSTBLa3Fg&s"
        />

        <img
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          alt="Contact Meme 2"
          src="https://i.ytimg.com/vi/nVJ6KcFYGyo/maxresdefault.jpg"
        />
      </div>

      <p className="mt-5 text-xl font-semibold text-gray-700 px-4 text-center">
        "If you’re broke, stop complaining. Make more money." –{" "}
        <span className="italic">Andrew Tate</span>
      </p>
    </div>
  );
};

export default Contact;
