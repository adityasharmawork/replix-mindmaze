import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('cpp', cpp)

export default function DetailsModal({ item, onClose }){
  if (!item) return null
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 max-h-screen">
      <div className="max-w-4xl w-full bg-slate-900 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div>
            <div className="text-lg font-semibold">{item.question} — <span className="text-sm text-slate-400">{item.name}</span></div>
            <div className="text-xs text-slate-500">{item.email} • room: {item.room} • status: {item.status}</div>
          </div>
          <div>
            <button onClick={onClose} className="px-3 py-1 bg-rose-600 rounded-md text-white">Close</button>
          </div>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-slate-400 mb-2">Code</div>
            <div className="rounded-md overflow-auto border border-slate-700">
              <SyntaxHighlighter language={item.language || 'cpp'} style={atomOneDark} customStyle={{margin:0, padding:'1rem'}}>
                {item.code || '// no code provided'}
              </SyntaxHighlighter>
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-400 mb-2">Output</div>
            <pre className="bg-slate-800 p-3 rounded code-block text-sm whitespace-pre-wrap">{item.output ?? 'N/A'}</pre>

            <div className="mt-4">
              <div className="text-sm text-slate-400">Execution Successful</div>
              <div className="text-base font-medium">{String(item.executionSuccessful)}</div>
            </div>

            {item.error && (
              <div className="mt-4">
                <div className="text-sm text-slate-400">Error</div>
                <pre className="bg-rose-900/30 p-3 rounded text-sm whitespace-pre-wrap">{item.error}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
