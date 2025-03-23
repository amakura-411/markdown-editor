export const Preview = ({
	html,
}: {
	html: string
}) => {
	return (
		<div>
			<h2 className="text-2xl font-bold">Markdown Preview</h2>
			<div className="p-4 border border-gray-300 rounded-md">
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	);
};
