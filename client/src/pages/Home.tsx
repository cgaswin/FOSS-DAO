import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import LandingImage from "../assets/landingImage.png";
import { Features } from "@/components/Features";
import { useAccount } from "wagmi";
import GithubWalletModal from "@/components/GithubWalletModal";
import { useNavigate } from "react-router-dom";

interface IUserData {
	login: string;
	avatar_url: string;
}

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const navigate = useNavigate();
	

	const { address } = useAccount();
	console.log(address);

	const [userData, setUserData] = useState<IUserData | null>(null);
	const handleGitHubCallback = useCallback(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		console.log(codeParam);

		async function getAccessToken() {
			await fetch(
				`http://localhost:8000/api/v1/access-token?code=${codeParam}`,
				{
					method: "GET",
					headers: {
						Accept: "application/json",
					},
				}
			)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					if (data.access_token) {
						localStorage.setItem("accessToken", data.access_token);
						getUserData();
					}
				});
		}

		async function getUserData() {
			const response = await fetch("http://localhost:8000/api/v1/github", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			});

			const data = await response.json();
			console.log(data);
			setUserData(data);
		}

		if (codeParam && localStorage.getItem("accessToken") == null) {
			getAccessToken();
		}
	});

	useEffect(() => {
		handleGitHubCallback();
	}, [handleGitHubCallback]);

	useEffect(() => {
		console.log(userData);
		console.log(userData?.login);

		if (userData?.login) {
			localStorage.setItem("username", userData?.login);
			document.cookie = `username=${userData?.login}; path=/`;
		}
		if (userData?.avatar_url) {
			localStorage.setItem("avatar_url", userData?.avatar_url);
		}
	}, [userData]);

	useEffect(() => {
		if (address) {
			console.log(address)
			localStorage.setItem("walletAddress", address);
			document.cookie = `walletAddress=${address}; path=/`;
			if (localStorage.getItem("username") === null) {
				setIsModalOpen(true);
			} else {
				setIsModalOpen(false);
				navigate("/dashboard");
			}
		}
	}, [address, navigate]);

	return (
		<div>
			<Navbar />
			{isModalOpen && <GithubWalletModal />}
			<div
				id="home"
				className="mt-12 relative flex flex-col items-center gap-8"
			>
				<div className="relative mt-2 z-10 text-center">
					<h1 className="text-3xl mt-2">
						Empowering open source with<br></br> DAO Revolution
					</h1>
					<p className="text-slate-500  mt-2">
						Join a new era of open source revolution
					</p>

					<button className="bg-blue-800   bg-gradient-to-r from-fuchsia-500 to-cyan-500 mt-6 hover px-4 py-2 rounded-md hover:cursor-pointer">
						Get Started
					</button>
				</div>
				<div>
					<img
						className="object-cover mx-auto"
						src={LandingImage}
						alt="dashboard Image"
					/>
				</div>
			</div>
			{/* About section  */}
			<div
				id="about"
				className=" mt-6 border-solid border-red-300 flex flex-col items-center  py-4"
			>
				<h2 className="text-3xl mb-6">About</h2>
				<p className="mx-64">
					Our mission is to empower creators and developers worldwide by
					providing a decentralized platform where ideas flourish, projects
					thrive, and contributions are valued. At FOSS DAO, we believe in the
					power of community-driven initiatives to drive positive change and
					advance the principles of freedom, openness, and accessibility in
					technology. Through our dedication to decentralized governance and
					inclusive decision-making, we aim to cultivate an environment where
					every voice is heard, and every contribution matters. Join us in
					shaping the future of open-source software development, where
					together, we can build a more equitable and sustainable digital world.
				</p>
			</div>
			{/* Features  */}
			<div id="features" className="text-center mt-24">
				<h1 className="text-3xl mb-4">Features</h1>
				<Features />
			</div>
			{/* Footer  */}
			<div className="bg-cyan-950 mt-5 py-5 text-center">
				<p>&copy; FOSSDAO</p>
			</div>
		</div>
	);
};

export default Home;
