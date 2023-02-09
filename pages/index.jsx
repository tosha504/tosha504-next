import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { loadData, loadHomePageData } from '../lib/load-data';
import '../styles/Home.module.scss'


 function Home({data, homePageData}) {
	const fetchMenus = data?.props?.menus[0].node.menuItems.nodes;
	// console.log(homePageData?.props?.datas?.template?.home);
	const main = homePageData?.props?.datas.home.main[0]
	const mainImg = homePageData?.props?.datas.home.main[0].mainImg
	// console.log(homePageData?.props?.datas?.home?.project);
	const projectTitle = homePageData?.props?.datas?.home?.
	projectTitle ;
	const project = homePageData?.props?.datas?.home?.project; 
	console.log(project)
	const projRow = 2;
	const [proj, setProj] = useState(projRow)
	const handleMoreImage = () => {
    setProj(proj + projRow);
  };
	return (
		<>
		  <Head>
      	<title>Home</title>
			</Head>
			<Header menus={fetchMenus} />
			<main>
			{/* <!-- SECTION MAIN START --> */}
			<section id="main" className="main-screen">
				<div className="container">
					<div className="main-screen__wrap">
						<div className="main-screen__img">
							<Image
								// loader={myLoader}
								src={mainImg.sourceUrl}
								alt={mainImg.title} 
								width={640}
								height={640}
							/>
						</div>
						<div className="main-screen__text">
						<h1 className="main-screen__title">{main.mainTitle}</h1>
						<p className="main-screen__subtext">{main.mainDescription}</p>
						<a target="_blank" className="main-screen__btn btn" href="#">contact me</a>
					</div>
					</div>
				</div>
			</section>
			<section id="projects" className="projects">
				<div className="container">
					<h2 className="projects__subtitle subtitle">{projectTitle}</h2> 
					<div className="projects__wrap">	
					{/* {project.filter(i => console.log(i))} */}
					
						{project?.slice(0, proj)?.map( ({ projectDescription, projectLink, projectImg }	) => (
							<>
								<div key={projectDescription} className="projects__item">
									<div className="projects__overlay">
										<a href={projectLink.url} target="_blank">{projectDescription}</a>
									</div>
										<img loading="lazy" src={projectImg.sourceUrl} alt=""/>
								</div>	
							</>
							))
						}
					</div>

					<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

					<div className="projects__buttons">
							{proj < project?.length && (
								<div id="ajax" onClick={handleMoreImage} className="projects__btn btn"> show more</div>
							)}
						<a href="" className="projects__btn btn"> look all</a>
					</div>
				</div>
			</section>
			{/* <!-- SECTION PROJECTS END --> */}
			</main>
			<Footer/>
		</>
	)
}

export default Home

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const data = await loadData()	
	const homePageData = await loadHomePageData()
	
  // Props returned will be passed to the page component
  return { props: 
		{ data, homePageData } ,
		revalidate: 5
	}
}
