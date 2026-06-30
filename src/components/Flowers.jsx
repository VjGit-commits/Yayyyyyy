export default function Flowers() {
  return (
    <>
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          className="fixed text-3xl animate-bounce pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          🌸
        </div>
      ))}
    </>
  );
}