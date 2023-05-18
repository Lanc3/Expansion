// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import videoMindo from '../images/mindo-app-launch.mp4';
import swarm from '../images/Swarm Wars Demo.mp4';
import priceme from '../images/priceME.mp4'

export const projectsData = [
	{
		id: 1,
		title: 'Mindo',
		category: 'React Native Application',
		img: WebImage2,
		video:videoMindo,
		path:"/projects/single-project",
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 202e1',
			tags: 'React',
		},
	},
	{
		id: 2,
		title: 'Price Me',
		category: 'Larvel PHP Website, React Native Application',
		img: MobileImage2,
		video:priceme,
		path:"/projects/single-project",
		ProjectHeader: {
			title: 'Project test UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 3,
		title: 'Crash Estimates',
		category: 'React Native Application',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Swarm Wars',
		category: 'Game Development',
		img: UIImage2,
		video:swarm,
	},

];
