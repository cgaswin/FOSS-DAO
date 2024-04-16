import { useState, useEffect, useCallback } from "react";

import GithubLogo from "../assets/github-mark-white.png";

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

interface IUserData {
	login: string;
	avatar_url: string;
}

const GitHubOAuth = () => {
	const [userData, setUserData] = useState<IUserData | null>(null);
	const handleGitHubCallback = useCallback(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		console.log(codeParam);

		async function getAccessToken() {
			await fetch(
				`https://foss-dao-production.up.railway.app/api/v1/access-token?code=${codeParam}`,
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
					}
				});
		}

		async function getUserData() {
			await fetch("https://foss-dao-production.up.railway.app/api/v1/github", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setUserData(data);
					if (userData?.login) {
						localStorage.setItem("username", userData?.login);

						//also set the cookie with the value username
						document.cookie = `username=${userData?.login}; path=/`;
					}
					if (userData?.avatar_url) {
						localStorage.setItem("avatarUrl", userData?.avatar_url);
						document.cookie = `avatarUrl=${userData?.avatar_url}; path=/`;
					}
				});
		}

		if (codeParam && localStorage.getItem("accessToken") == null) {
			getAccessToken();
		}
		if (localStorage.getItem("accessToken")) {
			getUserData();
		}
	}, [userData]);

	useEffect(() => {
		handleGitHubCallback();
	}, [handleGitHubCallback]);

	return (
		<div className="flex items-center gap-2">
			<img src={GithubLogo} width={40} alt="Github Logo" />
			<a href={githubOAuthURL} className="text-2xl">
				Sign in with GitHub
			</a>
		</div>
	);
};

export default GitHubOAuth;
