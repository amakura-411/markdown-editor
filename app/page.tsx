"use client";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

export default function Home() {
	// 入力値を管理する state
	const [markdown, setMarkdown] = useState("");
	const [html, setHtml] = useState<string>("");

	// 入力値を更新する関数
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		handlePreview();
		setMarkdown(e.target.value);
	};

	// keyupイベントでプレビューを更新
	useEffect(() => {
		handlePreview();
	}, [markdown]);

	// プレビュー用の関数
	const handlePreview = async () => {
		const htmlText = await marked(markdown);
		setHtml(htmlText);
	};

	return (
		<div className="flex h-screen">
			<Editor markdown={markdown} onChange={handleChange} />
			<Preview html={html} />
		</div>
	);
}
