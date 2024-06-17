import { useState } from "react";

interface ExpandableTextProps {
	children: string;
	maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: ExpandableTextProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	if (children.length <= maxChars) return <p>{children}</p>;

	const text = isExpanded ? children : children.substring(0, maxChars);

	return (
		<div>
			{text}...
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? "Less" : "More"}
			</button>
		</div>
	);
}

export default ExpandableText;
