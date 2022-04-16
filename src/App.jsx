import Canvas from './Canvas';

function App() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Canvas draw={draw} />
    </div>
  );
}

export default App;
