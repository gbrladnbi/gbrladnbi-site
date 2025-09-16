export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0b0b0f',
      color: '#eaeaea'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 48, letterSpacing: '.06em' }}>
          GBRLADNBI — starter site
        </h1>
        <p style={{ opacity: .8 }}>
          Next.js is live. We’ll replace this with the WebGL constellation hero soon.
        </p>
      </div>
    </main>
  );
}
