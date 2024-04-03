import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function ProgressPositive(props: { value: number }) {
	const [progress, setProgress] = useState(props.value);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return <Progress value={progress} className="w-[60%]" color="bg-green-600" />;
}
