import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { loadHomePageData,loadData } from '../lib/load-data';

export default function Test({data}) {
	// const fetchMenus =  data?.props?.menus[0].node.menuItems.nodes;
	console.log(data?.props?.datas?.home?.main[0].mainTitle);
	return (
		<>
		  <Head>
      	<title>test</title>
			</Head>
			{/* <Header menus={fetchMenus} /> */}
			<main>
				<div className='container'>
					<h1>{data?.props?.datas?.home?.main[0].mainTitle}</h1>
				</div>
			</main>
			<Footer/>
		</>
	)
}

// export async function getStaticProps() {
//   // Instead of fetching your `/api` route you can call the same
//   // function directly in `getStaticProps`
//   const data = await loadData()

//   // Props returned will be passed to the page component
//   return { props: { data } }
// }

export async function getStaticProps() {
  const data = await loadHomePageData()
  return {
    // Passed to the page component as props
    props: {  data },
		revalidate: 5
  }
}

// Test.getInitialProps = async function() {
//   const data = await loadHomePageData()

//   return { data }
// }