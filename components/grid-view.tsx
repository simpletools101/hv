export default function GridView() {
  return (
    <div
      className="
        w-full 
        bg-white 
        flex 
        flex-col 
        lg:flex-row 
        items-center 
        justify-center 
        gap-5 
        p-5
        min-h-[400px]
      "
    >
      {/* Large Panel */}
      <div
        className="
          bg-black 
          w-full 
          lg:w-[800px]
          h-[250px]
          lg:h-[400px]
          rounded-2xl
        "
      ></div>

      {/* Small Grid */}
      <div
        className="
          grid 
          grid-cols-2 
          gap-3
          w-full
          max-w-[420px]
        "
      >
        <div className="bg-black aspect-square rounded-2xl"></div>
        <div className="bg-black aspect-square rounded-2xl"></div>
        <div className="bg-black aspect-square rounded-2xl"></div>
        <div className="bg-black aspect-square rounded-2xl"></div>
      </div>
    </div>
  );
}
