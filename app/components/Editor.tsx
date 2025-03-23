// 入力用コンポーネント

export const Editor = ({
	markdown,
	onChange,
}: {
	markdown: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
	return (
		<div>
			<h2 className="text-2xl font-bold">Markdown Editor</h2>
			<textarea
				className="w-full h-full p-4 border border-gray-300 rounded-md"
				placeholder="Enter your markdown here..."
				value={markdown}
				onChange={onChange}
			/>
		</div>
	);
};
