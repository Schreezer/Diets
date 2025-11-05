'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownFile {
  name: string
  content: string
  displayName: string
}

export default function Home() {
  const [markdownFiles, setMarkdownFiles] = useState<MarkdownFile[]>([])
  const [selectedFile, setSelectedFile] = useState<string>('')
  const [loading, setLoading] = useState(true)

  const files = [
    { name: 'DIET_REQUIREMENTS', displayName: '?? Diet Requirements' },
    { name: 'DAY1_SUMMARY', displayName: '?? Day 1 Summary' },
    { name: 'DAY1_MEAL_PLAN', displayName: '??? Day 1 Meal Plan' },
    { name: 'PROTEIN_BREAKDOWN_DAY1', displayName: '?? Protein Breakdown' },
    { name: 'WHEY_PROTOCOL', displayName: '?? Whey Protocol' },
  ]

  useEffect(() => {
    const loadMarkdownFiles = async () => {
      const loadedFiles: MarkdownFile[] = []
      
      for (const file of files) {
        try {
          const response = await fetch(`/markdown/${file.name}.md`)
          const content = await response.text()
          loadedFiles.push({
            name: file.name,
            content,
            displayName: file.displayName
          })
        } catch (error) {
          console.error(`Error loading ${file.name}:`, error)
        }
      }
      
      setMarkdownFiles(loadedFiles)
      if (loadedFiles.length > 0) {
        setSelectedFile(loadedFiles[0].name)
      }
      setLoading(false)
    }

    loadMarkdownFiles()
  }, [])

  const currentFile = markdownFiles.find(f => f.name === selectedFile)

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-title">?? Family Diet Plan Viewer</div>
        <div className="nav-links">
          {markdownFiles.map((file) => (
            <div
              key={file.name}
              className={`nav-link ${selectedFile === file.name ? 'active' : ''}`}
              onClick={() => setSelectedFile(file.name)}
            >
              {file.displayName}
            </div>
          ))}
        </div>
      </nav>

      <main style={{ padding: '2rem' }}>
        {loading ? (
          <div className="loading">Loading diet plans...</div>
        ) : currentFile ? (
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {currentFile.content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="loading">No file selected</div>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
        <p>Family Diet Plan - Generated with ??</p>
      </footer>
    </div>
  )
}
