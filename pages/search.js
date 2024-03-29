import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
function Search({results}) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>

            <Header/>
            <SearchResults results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;

    const startIndex = context.query.start || '0';

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.React_App_API_KEY}&cx=${process.env.React_App_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json()).catch(err => console.log(err))

    return {
        props: {
            results: data
        }
    }
}