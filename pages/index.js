import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Major League Banking</title>
        <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <header>
          <h1>
              <span className="header-title-red">Major</span>
              <span className="header-title-blue">League</span>
              <span className="header-title-yellow">Banking</span>
          </h1>
        </header>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
        }

        main {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0;
          text-align: center;
        }
        
        .header-title-red {
          color: #e73427;
        }
        
        .header-title-blue {
          color: #1d539f;
        }
        
        .header-title-yellow {
          color: #f8b92a;
        }
        
        header {
          width: 100%;
          background: #f7f7f7;
        }
        
        header h1 {
          font-size: 40px;
          display: flex;
          flex-direction: column;
          margin: 20px 0 12px 0;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Luckiest Guy', cursive;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
