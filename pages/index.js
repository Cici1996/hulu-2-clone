import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import request from '../utils/request'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result request={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const requestData = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`).then(x =>
    x.json()
  );
  return {
    props: {
      results: requestData.results
    }
  }
}
