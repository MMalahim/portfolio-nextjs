import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";
import { Card } from "../components/card";



const Article = () => {

	const projectsDesc = [
		{ title: "Project1", description: "project1", imageURL: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg"  },
		{ title: "Project2", description: "project2", imageURL: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg" },
		{ title: "Project3", description: "project3", imageURL: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg" },
		{ title: "Project4", description: "project4", imageURL: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg" },
	]
	

	return (
		<>
			{
				projectsDesc.map(
					(val) => {
						return(
							<>
								<Card>
									<article className="p-1 md:p-4">
										<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">{val.title}</h2>
										<p className="z-20 mt-2 mb-2 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">{val.description}</p>
										<img src={val.imageURL} alt="" />
									</article>
								</Card>
							</>
						)
					}
				)
			}
		</>
		
	)
}
export default Article
