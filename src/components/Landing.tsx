import { motion } from "framer-motion";

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.16, 1, 0.3, 1] as const,
		},
	},
};

export default function Landing() {
	return (
		<motion.main
			className="min-h-screen flex justify-center p-[clamp(2rem,6vw,5rem)] bg-[linear-gradient(rgba(27,77,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(27,77,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
			initial="hidden"
			animate="show"
		>
			<motion.div
				className="w-[min(36rem,33vw)] min-w-[min(36rem,100%)] flex flex-col max-[900px]:w-full max-[900px]:min-w-full"
				variants={container}
			>
				<motion.header
					className="flex flex-col items-start gap-6 mb-[clamp(2rem,6vw,4rem)]"
					variants={container}
				>
					<motion.h1
						className="m-0 text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-[-0.04em] uppercase max-[600px]:text-[clamp(4.25rem,14vw,6rem)] max-[600px]:leading-[0.88]"
						variants={fadeUp}
					>
						tui
						<span className="block text-[#1b4dff]">company</span>
					</motion.h1>
					<motion.p
						className="m-0 max-w-[22rem] text-[0.9rem] leading-[1.7] text-[#6c7076]"
						variants={fadeUp}
					>
						Making highly efficient software for terminal lovers.
					</motion.p>
				</motion.header>
				<motion.section
					className="grid grid-cols-[minmax(0,1fr)] gap-8 items-start flex-1"
					variants={container}
				>
					<motion.div
						className="flex flex-col gap-3 w-fit"
						variants={container}
					>
						<motion.p
							className="m-0 text-[0.75rem] uppercase tracking-[0.35em] text-[#6c7076]"
							variants={fadeUp}
						>
							Projects
						</motion.p>
						<motion.ul
							className="list-none m-0 p-0 flex flex-col gap-3 text-[0.95rem] w-full"
							variants={container}
						>
							<motion.li
								className="px-[0.9rem] py-2 border border-[rgba(27,77,255,0.2)] uppercase tracking-[0.15em]"
								variants={fadeUp}
							>
								<a
									className="group inline-flex items-center gap-3 no-underline"
									href="https://github.com/Mario-SO/cronos"
									target="_blank"
									rel="noreferrer"
								>
									cronos
									<span
										className="inline-flex h-4 w-4 text-[#1b4dff] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
										aria-hidden="true"
									>
										<svg
											className="h-full w-full"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
										>
											<title>External link</title>
											<path d="M7 17L17 7" />
											<path d="M9 7h8v8" />
										</svg>
									</span>
								</a>
							</motion.li>
							<motion.li
								className="px-[0.9rem] py-2 border border-[rgba(27,77,255,0.2)] uppercase tracking-[0.15em]"
								variants={fadeUp}
							>
								<a
									className="group inline-flex items-center gap-3 no-underline"
									href="https://github.com/Mario-SO/hermes"
									target="_blank"
									rel="noreferrer"
								>
									hermes
									<span
										className="inline-flex h-4 w-4 text-[#1b4dff] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
										aria-hidden="true"
									>
										<svg
											className="h-full w-full"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
										>
											<title>External link</title>
											<path d="M7 17L17 7" />
											<path d="M9 7h8v8" />
										</svg>
									</span>
								</a>
							</motion.li>
						</motion.ul>
						<motion.p
							className="mt-2 text-[0.75rem] tracking-[0.25em] uppercase text-[#6c7076]"
							variants={fadeUp}
						>
							Currently in development
						</motion.p>
						<motion.span
							className="inline-flex items-center w-full px-[0.9rem] py-2 border border-[rgba(27,77,255,0.2)] border-dashed uppercase tracking-[0.15em] text-[#6c7076] line-through decoration-[#1b4dff] decoration-[1px] transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
							variants={fadeUp}
							whileHover={{ y: -2, borderColor: "rgba(27, 77, 255, 0.5)" }}
							transition={{ duration: 0.2 }}
						>
							apollo
						</motion.span>
					</motion.div>
				</motion.section>
				<motion.footer
					className="mt-[clamp(2rem,6vw,4rem)] flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-[#6c7076]"
					variants={fadeUp}
				>
					<a
						href="/terms"
						className="transition-colors duration-200 hover:text-[#1b4dff]"
					>
						Terms &amp; Services
					</a>
				</motion.footer>
			</motion.div>
		</motion.main>
	);
}
