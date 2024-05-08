"use client";
import { Github, Mail, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import Navigation from "../components/nav";
import { Card } from "../components/card";

const Contact = () => {

	const socials = [
		{
			icon: <Facebook size={20} />,
			href: "https://twitter.com/chronark_",
			label: "Facebook",
			handle: "@chronark_",
		},
		{
			icon: <Linkedin size={20} />,
			href: "https://github.com/chronark",
			label: "LinkedIn",
			handle: "chronark",
		},
		{
			icon: <Mail size={20} />,
			href: "mailto:dev@chronark.com",
			label: "Email",
			handle: "dev@chronark.com",
		},
		{
			icon: <Github size={20} />,
			href: "https://github.com/chronark",
			label: "Github",
			handle: "chronark",
		},
	];

	return (
				<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
					<Navigation />	
					<div className="container flex flex-col  justify-center min-h-screen px-4 pt-20 mx-auto">

						<div className="max-w-2xl lg:mx-0 mb-8 ">
         					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h2>
          					<p className="mt-4 text-zinc-400">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        				</div>

						<form className="w-full">
							<div className="md:flex md:items-center mb-6">
								<div className="w-1/4">
									<label className="block text-zinc-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Full Name</label>
								</div>
								<div className="lg:w-3/4 sm:w-full ">
									<input className="bg-[#18181b] appearance-none rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-[#27272a] focus:border-none" id="inline-full-name" type="text" />
								</div>
							</div>
							<div className="md:flex md:items-center mb-6">
								<div className="w-1/4">
									<label className="block text-zinc-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Email</label>
								</div>
								<div className="lg:w-3/4 sm:w-full">
									<input className="bg-[#18181b] appearance-none rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-[#27272a] focus:border-none" id="inline-full-name" type="email" />
								</div>
							</div>
							<div className="md:flex md:items-center mb-6">
								<div className="w-1/4">
									<label className="block text-zinc-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Message</label>
								</div>
								<div className="lg:w-3/4 sm:w-full">
									<textarea className="bg-[#18181b] appearance-none rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-[#27272a] focus:border-none" id="inline-full-name" />
								</div>
							</div>
							<div className="w-full flex justify-end">
								<Card>
									<button className=" lg:w-1/4 sm:w-full focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 " type="button">
									Submit
									</button>
								</Card>
							</div>
						</form>

						<div className="w-full h-px md:block my-8 bg-zinc-800" />

						<div className="grid w-full lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-auto lg:gap-16">
							{socials.map((val) => (
								<Card>
									<Link
										href={val.href}
										target="_blank"
										className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8"
									>
										<span
											className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
											aria-hidden="true"
										/>
										<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											{val.icon}
										</span>
										<div className="z-10 flex flex-col items-center">
											<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
												{val.handle}
											</span>
											<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
												{val.label}
											</span>
										</div>
									</Link>
								</Card>
							))}
						</div>
					</div>
				</div>
			);
}

export default Contact
