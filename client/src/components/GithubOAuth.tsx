import GithubLogo from "../assets/github-mark-white.png";

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;



const GitHubOAuth = () => {
	

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
