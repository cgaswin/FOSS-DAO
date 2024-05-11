import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Features() {
	return (
		<BentoGrid className="max-w-4xl bg-background mx-auto md:auto-rows-[20rem]">
			{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						className={item.className}
					/>
			))}
		</BentoGrid>
	);
}

const items = [
	{
		title: "Project Funding through Community Voting",
		description:
			"Members propose projects, and the community votes to allocate funds from the DAO treasury, ensuring democratic decision-making and support for projects aligned with the community's goals.",
		className: "md:col-span-2 bg-blue-950 ",
	},
	{
		title: " Token Payment System",
		description:
			"Users transact using tokens, facilitating seamless project funding and voting processes while ensuring transparency and security in transactions.",
		className: "md:col-span-1 bg-blue-950",
	},
	{
		title: "Chat Forum",
		description:
			"Engage in discussions, share ideas, and collaborate with other members in the decentralized chat forum, fostering a vibrant community environment for open-source enthusiasts.",
		className: "md:col-span-1 bg-blue-950",
	},
	{
		title: "Governance Dashboard",
		description:
			"Track project funding, voting outcomes, and community engagement through a transparent governance dashboard, empowering members with insights to make informed decisions and drive the direction of the DAO.",
		className: "md:col-span-2 bg-blue-950",
	},
];
