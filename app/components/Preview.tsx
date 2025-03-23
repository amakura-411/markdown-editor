export const Preview = ({
	html,
}: {
	html: string
}) => {
	return (
		<div className="flex flex-col flex-1 rounded-md">
			<h2 className="text-2xl font-bold">Markdown Preview</h2>
			<div className="p-4 border border-gray-300 rounded-md overflow-auto h-full">
				<div className="w-full h-full" dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	);
};
