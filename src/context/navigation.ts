import { ReactComponentElement, ReactElement } from "react"

type navitems = {
	path: string,
	name: string,
	element: ReactElement | any,
	isMenu: boolean,
	isPrivate: boolean
}

export const nav : navitems[] = [
	{path: "/", 				name:"Home",    		element: "Home", 			isMenu: true, 	isPrivate: true},
	{path: "/users", 			name:"Users", 			element: "Users", 			isMenu: true, 	isPrivate: true},
	{path: "/certificates", 	name:"Certificates", 	element: "Certificates", 	isMenu: true, 	isPrivate: true},
	{path: "/events", 			name:"Events", 			element: "Events", 			isMenu: true, 	isPrivate: true},
	{path: "/auth", 			name:"Auth", 			element: "Auth", 			isMenu: false, 	isPrivate: false},
]