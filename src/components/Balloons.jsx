export default function Balloons() {

  const balloons = ["🎈", "🎈", "🎈", "🎈", "🎈"];

  return (
    <>
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="fixed text-6xl"
          style={{
            left: `${15 + index * 18}%`,
            bottom: "20px",
          }}
        >
          {balloon}
        </div>
      ))}
    </>
  );
}