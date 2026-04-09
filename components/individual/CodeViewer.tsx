"use client"

import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import type { EditorProps } from "@monaco-editor/react"
import {
	ChevronDown,
	ChevronRight,
	FileCode2,
	Folder,
	FolderOpen,
	Save,
} from "lucide-react"

const MonacoEditor = dynamic<EditorProps>(() => import("@monaco-editor/react"), {
	ssr: false,
})

type FileNode = {
	kind: "file"
	name: string
	path: string
}

type FolderNode = {
	kind: "folder"
	name: string
	path: string
	children: TreeNode[]
}

type TreeNode = FileNode | FolderNode

const PROJECT_TREE: TreeNode[] = [
	{
		kind: "folder",
		name: "src",
		path: "src",
		children: [
			{
				kind: "folder",
				name: "components",
				path: "src/components",
				children: [
					{ kind: "file", name: "Header.tsx", path: "src/components/Header.tsx" },
					{ kind: "file", name: "EditorShell.tsx", path: "src/components/EditorShell.tsx" },
				],
			},
			{ kind: "file", name: "main.ts", path: "src/main.ts" },
		],
	},
	{
		kind: "folder",
		name: "app",
		path: "app",
		children: [
			{ kind: "file", name: "layout.tsx", path: "app/layout.tsx" },
			{ kind: "file", name: "page.tsx", path: "app/page.tsx" },
		],
	},
	{ kind: "file", name: "README.md", path: "README.md" },
]

const INITIAL_FILE_CONTENTS: Record<string, string> = {
	"src/main.ts": "import { createRoot } from 'react-dom/client'\nimport App from './components/EditorShell'\n\ncreateRoot(document.getElementById('root')!).render(<App />)\n",
	"src/components/Header.tsx": "export default function Header() {\n  return <h1 className=\"text-2xl font-bold\">CAP Analyzer</h1>\n}\n",
	"src/components/EditorShell.tsx": "import Header from './Header'\n\nexport default function EditorShell() {\n  return (\n    <main className=\"p-8\">\n      <Header />\n      <p>Start building your analyzer workspace.</p>\n    </main>\n  )\n}\n",
	"app/layout.tsx": "export default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\">\n      <body>{children}</body>\n    </html>\n  )\n}\n",
	"app/page.tsx": "export default function HomePage() {\n  return <div>Hello from CAP</div>\n}\n",
	"README.md": "# CAP Frontend\n\nThis workspace demonstrates a VS Code-like editor panel with a file tree and Monaco editor.\n",
}

function getLanguageFromPath(path: string): string {
	if (path.endsWith(".tsx")) return "typescript"
	if (path.endsWith(".ts")) return "typescript"
	if (path.endsWith(".js")) return "javascript"
	if (path.endsWith(".json")) return "json"
	if (path.endsWith(".md")) return "markdown"
	return "plaintext"
}

function getFirstFilePath(nodes: TreeNode[]): string {
	for (const node of nodes) {
		if (node.kind === "file") {
			return node.path
		}

		const childPath = getFirstFilePath(node.children)
		if (childPath) {
			return childPath
		}
	}

	return ""
}

type TreeItemProps = {
	node: TreeNode
	depth: number
	openFolders: Set<string>
	activePath: string
	onToggleFolder: (path: string) => void
	onOpenFile: (path: string) => void
}

function TreeItem({
	node,
	depth,
	openFolders,
	activePath,
	onToggleFolder,
	onOpenFile,
}: TreeItemProps) {
	if (node.kind === "folder") {
		const isOpen = openFolders.has(node.path)

		return (
			<div>
				<button
					type="button"
					onClick={() => onToggleFolder(node.path)}
					className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-gray-200 hover:bg-gray-800"
					style={{ paddingLeft: `${depth * 16 + 8}px` }}
				>
					{isOpen ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
					{isOpen ? <FolderOpen className="size-4 text-cyan-400" /> : <Folder className="size-4 text-cyan-400" />}
					<span>{node.name}</span>
				</button>

				{isOpen && (
					<div className="mt-0.5">
						{node.children.map((child) => (
							<TreeItem
								key={child.path}
								node={child}
								depth={depth + 1}
								openFolders={openFolders}
								activePath={activePath}
								onToggleFolder={onToggleFolder}
								onOpenFile={onOpenFile}
							/>
						))}
					</div>
				)}
			</div>
		)
	}

	const isActive = node.path === activePath

	return (
		<button
			type="button"
			onClick={() => onOpenFile(node.path)}
			className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm ${
				isActive ? "bg-cyan-500/20 text-cyan-200" : "text-gray-300 hover:bg-gray-800"
			}`}
			style={{ paddingLeft: `${depth * 16 + 28}px` }}
		>
			<FileCode2 className="size-4 text-teal-400" />
			<span>{node.name}</span>
		</button>
	)
}

export default function CodeViewer() {
	const [openFolders, setOpenFolders] = useState<Set<string>>(
		() => new Set(["src", "src/components", "app"]),
	)
	const [fileContents, setFileContents] = useState<Record<string, string>>(
		INITIAL_FILE_CONTENTS,
	)
	const [savedContents, setSavedContents] = useState<Record<string, string>>(
		INITIAL_FILE_CONTENTS,
	)
	const [activePath, setActivePath] = useState<string>(() => getFirstFilePath(PROJECT_TREE))

	const activeContent = fileContents[activePath] ?? ""
	const activeLanguage = getLanguageFromPath(activePath)
	const activeFileName = useMemo(() => activePath.split("/").at(-1) ?? "Untitled", [activePath])
	const hasUnsavedChanges = activeContent !== (savedContents[activePath] ?? "")

	const toggleFolder = (path: string) => {
		setOpenFolders((prev) => {
			const next = new Set(prev)
			if (next.has(path)) {
				next.delete(path)
			} else {
				next.add(path)
			}
			return next
		})
	}

	const handleEditorChange = (value: string | undefined) => {
		setFileContents((prev) => ({
			...prev,
			[activePath]: value ?? "",
		}))
	}

	const handleSave = () => {
		setSavedContents((prev) => ({
			...prev,
			[activePath]: fileContents[activePath] ?? "",
		}))
	}

	return (
		<section className="overflow-hidden rounded-2xl border border-gray-700/70 bg-gray-950/85 shadow-2xl shadow-black/40">
			<div className="border-b border-gray-700 px-4 py-3">
				<h2 className="text-base font-semibold text-white">Code Workspace</h2>
				<p className="text-sm text-gray-400">
					VS Code-style file tree + editor. Replace demo files with your repo API data.
				</p>
			</div>

			<div className="grid min-h-[68vh] grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
				<aside className="border-b border-gray-700 bg-gray-950 p-3 lg:border-b-0 lg:border-r">
					<p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
						Explorer
					</p>
					<div className="space-y-0.5">
						{PROJECT_TREE.map((node) => (
							<TreeItem
								key={node.path}
								node={node}
								depth={0}
								openFolders={openFolders}
								activePath={activePath}
								onToggleFolder={toggleFolder}
								onOpenFile={setActivePath}
							/>
						))}
					</div>
				</aside>

				<div className="bg-[#1e1e1e]">
					<div className="flex items-center justify-between border-b border-gray-700 bg-[#252526] px-3 py-2 text-sm">
						<div className="flex items-center gap-2 text-gray-200">
							<FileCode2 className="size-4 text-teal-400" />
							<span>{activeFileName}</span>
							{hasUnsavedChanges && <span className="text-amber-300">• unsaved</span>}
						</div>

						<button
							type="button"
							onClick={handleSave}
							className="inline-flex items-center gap-1 rounded-md border border-gray-600 bg-gray-800 px-2.5 py-1.5 text-xs font-medium text-gray-100 hover:bg-gray-700"
						>
							<Save className="size-3.5" />
							Save
						</button>
					</div>

					<div className="h-[60vh] min-h-105">
						<MonacoEditor
							path={activePath}
							language={activeLanguage}
							theme="vs-dark"
							value={activeContent}
							onChange={handleEditorChange}
							options={{
								fontSize: 14,
								minimap: { enabled: false },
								scrollBeyondLastLine: false,
								smoothScrolling: true,
								padding: { top: 12 },
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
