import { gql } from "@apollo/client";
import client from '../client';

export async function loadData() {
	const { data } = await client.query({
		query: gql`
			{
				menus(where: {location: HEADER_MENU}) {
					edges {
						node {
							id
							menuItems {
								nodes {
									menuItemId
									path
									label
								}
							}
						}
					}
				}
			}
		`,
	});
	
	return {
		props: {
			menus: data.menus.edges
		},
 	}
	
}

export async function loadHomePageData() {
	const { data } = await client.query({
		query: gql`
			{
				page(id: "cG9zdDo5") {
					template {
						... on Template_Home {
							templateName
							home {
								main {
									mainDescription
									mainTitle
									mainImg {
										link
										title
										sourceUrl
										sizes
									}
								}
								contactsTitle
								about {
									aboutDescrption
									aboutTitle
								}
								partnersTitle
								projectTitle
								project {
									projectDescription
									projectImg {
										sizes
										title
										sourceUrl
									}
									projectLink {
										target
										title
										url
									}
								}
							}
						}
					}
				}
			}
		`,
	});
	
	return {
		props: {
			datas: data.page.template
		},
 	}
	
}