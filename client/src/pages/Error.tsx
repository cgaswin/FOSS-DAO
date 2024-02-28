import Navbar from "@/components/Navbar";
const Error = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col justify-center items-center h-96">
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>Page not found</i>
				</p>
			</div>
		</>
	);
};

export default Error;
