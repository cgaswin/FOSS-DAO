import { http, createConfig } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { metaMask, safe } from "wagmi/connectors";

declare module "wagmi" {
	interface Register {
		config: typeof config;
	}
}

export const config = createConfig({
	chains: [mainnet, base],
	connectors: [metaMask(), safe()],
	transports: {
		[mainnet.id]: http(),
		[base.id]: http(),
	},
});
