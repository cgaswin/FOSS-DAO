import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

interface IUserData {
	login: string;
	avatar_url: string;
}

const GithubAuth = () => {
	const navigate = useNavigate();
	const [render,setRender] = useState<boolean>(false)

	const [userData, setUserData] = useState<IUserData | null>(null);
	const handleGitHubCallback = useCallback(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		console.log(codeParam);
		if (codeParam) {
			getAccessToken();
		}

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
			if (data?.login) {
				localStorage.setItem("username", data?.login);
				document.cookie = `username=${data?.login}; path=/`;
			}
			if (data?.avatar_url) {
				localStorage.setItem("avatar_url", data?.avatar_url);
			}

			setTimeout(() => {
				navigate("/");
			}, 3000);

			// setUserData(data);
			// console.log(userData)
			// setRender(!render)
		}
	}, [navigate]);

	useEffect(() => {
		handleGitHubCallback();
	}, [handleGitHubCallback]);


	return (
		<>
			<Navbar />
			<h1>Loading...</h1>
		</>
	);
};

export default GithubAuth;
