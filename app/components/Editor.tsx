// 入力用コンポーネント

export const Editor = ({
	markdown,
	onChange,
}: {
	markdown: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
	return (
		<div className="flex flex-col flex-1 rounded-md mx-2 my-1">
			<h2 className="text-2xl font-bold">Markdown Editor</h2>
			<textarea
				className="w-full p-4 border rounded-md border-cyan-950 h-lvh"
				placeholder="Enter your markdown here..."
				value={markdown}
				onChange={onChange}
			/>
		</div>
	);
};
