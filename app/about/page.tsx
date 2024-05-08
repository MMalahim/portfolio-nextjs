"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import  Navigation  from "../components/nav";
import { Card } from "../components/card";


const About = () => {

	const socials = [
		{
			percent: 20,
			handle: "@chronark_",
		},
		{
			percent: 80,
			handle: "dev@chronark.com",
		},
		{
			percent: 60,
			handle: "chronark",
		},
		{
			percent: 100,
			handle: "chronark",
		},
		{
			percent: 60,
			handle: "@chronark_",
		},
		{
			percent: 40,
			handle: "dev@chronark.com",
		},
		{
			percent: 80,
			handle: "chronark",
		},
		{
			percent: 80,
			handle: "chronark",
		},
	];

	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center pt-20 mx-auto space-y-8 max-w-7xl  md:space-y-16 md:pt-24 lg:pt-32">
				<div className="grid w-full lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-auto">
					{socials.map((s) => (
						<Card>
							<div className="p-4 flex relative flex-col items-center gap-4 group md:gap-8">
									<span className="lg:text-xl font-medium xl:text-3xl text-zinc-200 font-display mb-4 opacity-100 transition-opacity duration-700 group-hover:opacity-0">
										{s.handle} 
									</span>
								<div className="w-full absolute inset-0 flex flex-col items-center justify-center px-6 group">
									<div className="w-full flex justify-center items-center gap-2 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
										<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
											<div className="bg-[#fafafa] h-2.5 rounded-full" style={{width: `${s.percent}%`}}></div>
										</div>
										<span className="text-[#fafafa] flex justify-center items-center text-xs">
											{s.percent}%
										</span>
									</div>
									{/* <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span> */}
									{/* <div className="flex justify-center items-center gap-2">
										{
											s.percent >= 20
											?
											<span className="w-3 h-3 rounded-full bg-[#fafafa] border border-gray-300"></span>
											: 
											<span className="w-3 h-3 rounded-full bg-zinc border border-gray-300"></span>
										}
										{
											s.percent >= 40
											?
											<span className="w-3 h-3 rounded-full bg-[#fafafa] border border-gray-300"></span>
											: 
											<span className="w-3 h-3 rounded-full bg-zinc border border-gray-300"></span>
										}
										{
											s.percent >= 60
											?
											<span className="w-3 h-3 rounded-full bg-[#fafafa] border border-gray-300"></span>
											:
											<span className="w-3 h-3 rounded-full bg-zinc border border-gray-300"></span> 
										}
										{
											s.percent >= 80
											?
											<span className="w-3 h-3 rounded-full bg-[#fafafa] border border-gray-300"></span>
											: 
											<span className="w-3 h-3 rounded-full bg-zinc border border-gray-300"></span>
										}
										{
											s.percent === 100
											?
											<span className="w-3 h-3 rounded-full bg-[#fafafa] border border-gray-300"></span>
											:
											<span className="w-3 h-3 rounded-full bg-zinc border border-gray-300"></span>	
										}
									</div> */}

									{/* <div className="w-full absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
									
									</div> */}
								</div>
							</div>
						</Card>
					))}
				</div>
				<div className="w-full h-px md:block my-20 bg-zinc-800" />
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
				<Card>
					<Link href="#">
					<article className="relative w-full h-full p-4 md:p-8">
						<div className="flex items-center justify-between gap-2">
						<div className="text-xs text-zinc-100">
						Jul 1, 2023
						</div>
						</div>

						<h2
						id="featured-post"
						className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
						>
						unkey.dev
						</h2>
						<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
						Unkey is an open source API Key management solution. It allows you to create, manage and validate API Keys for your users. It’s built with security and speed in mind
						</p>
						<div className="absolute bottom-4 md:bottom-8">
						<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
							Read more <span aria-hidden="true">&rarr;</span>
						</p>
						</div>
					</article>
					</Link>
				</Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
				<Card>
					<Link href="#">
					<article className="relative w-full h-full p-4 md:p-8">
						<div className="flex items-center justify-between gap-2">
						<div className="text-xs text-zinc-100">
						Apr 1, 2023
						</div>
						</div>

						<h2
						id="featured-post"
						className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
						>
						planetfall.io
						</h2>
						<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
						I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.
						</p>
					</article>
					</Link>
				</Card>
				<Card>
					<Link href="#">
					<article className="relative w-full h-full p-4 md:p-8">
						<div className="flex items-center justify-between gap-2">
						<div className="text-xs text-zinc-100">
						May 1, 2023
						</div>
						</div>

						<h2
						id="featured-post"
						className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
						>
						highstorm.app
						</h2>
						<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
						Simple, fast, open source custom event tracking
						</p>
					</article>
					</Link>
				</Card>
          </div>
        </div>
			</div>
		</div>
	);
}

export default About
