import Head from 'next/head';
import Header from '../components/Header';
import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';
function Search({ gurl, results }) {
  console.log('my google results', results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title> {router.query.term} - Google Search </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header gurl='/google-logo.png' />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After the SERVER has rendered... Pass the results to the client
  return {
    props: {
      results: data,
    },
  };
}
