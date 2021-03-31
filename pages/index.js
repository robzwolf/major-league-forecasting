import Head from 'next/head'

export async function getServerSideProps() {
    // https://api.openweathermap.org/data/2.5/onecall?lat=51.5013715344381&lon=-0.14184897815474495&appid=f3d178f07e3018dd1eab495368872fc9&units=metric&exclude=hourly,minutely

    const baseURL = "https://api.openweathermap.org/data/2.5/onecall";
    const searchParams = new URLSearchParams();

    const apiOptions = {
        lat: "51.5013715344381",
        lon: "-0.14184897815474495",
        apiKey: "f3d178f07e3018dd1eab495368872fc9",
        units: "metric",
        exclude: "hourly,minutely"
    }

    for (const [key, value] of Object.entries(apiOptions)) {
        searchParams.set(key, value);
    }

    const apiRoute = `${baseURL}?${searchParams.toString()}`;
    console.log(apiRoute);

    // Fetch data from external API
    const res = await fetch(apiRoute);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } }
}

export default function Home({ data }) {
    console.log(data);
    return (
        <div className="container">
            <Head>
                <title>Major League Forecasting</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Bevan&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap" rel="stylesheet" />
            </Head>

            <main>
                <header>
                    <h1>
                        <span className="header-title-red">Major</span>
                        <span className="header-title-blue">League</span>
                        <span className="header-title-yellow">Forecasting</span>
                    </h1>
                </header>
                <div className="transactions">

                </div>
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
                position: sticky;
                top: 0;
                z-index: 1000;
                background: #f9f9f9;
                border-bottom: 4px solid black;
                font-family: 'Bevan', cursive;
              }

              header h1 {
                font-size: 40px;
                display: flex;
                flex-direction: column;
                margin: 20px 0 12px 0;
              }
              
              .transactions {
                  font-family: 'Roboto', sans-serif;
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
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
        </div>
    )
}

function Transaction({date, amount, merchant}) {
    return (
        <>
            <div className={["transaction", amount >= 0 ? "income" : "expense"].join(" ")}>
                <div className="merchant">{merchant}</div>
                <div className="date">{date}</div>
                <div className="amount">{amount.toFixed(2)}</div>
            </div>

            <style jsx>{`
                .transaction {
                    display: grid;
                    grid-template-areas: "merchant amount"
                                         "date     amount";
                    grid-template-columns: 1fr 100px;
                    text-align: left;
                    position: relative;
                }
                
                .transaction::after {
                    content: '';
                    display: block;
                    height: 2px;
                    width: 180px;
                    background: #e0e8f3;
                    position: absolute;
                    left: calc(50% - 180px/2);
                    bottom: 0;
                }
                
                .transaction.income {
                    color: #2d6200;
                    background: #e9fae9;
                }
                
                .transaction.expense {
                    color: #430707;
                    background: #fcf3f3;
                }
                
                .merchant {
                    grid-area: merchant;
                    padding: 12px 6px 3px 16px;
                }
                
                .date {
                    grid-area: date;
                    padding: 3px 6px 12px 16px;
                }
                
                .amount {
                    grid-area: amount;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 6px 16px 6px 6px;
                    font-family: 'Roboto Mono', monospace;
                    font-weight: 600;
                }
            `}</style>
        </>
    )
}
