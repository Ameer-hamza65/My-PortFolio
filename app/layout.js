import './globals.css'

export const metadata = {
  title: 'Ameer Hamza - ML Engineer Portfolio',
  description: 'Machine Learning Engineer specializing in AI, NLP, Generative AI, and RAG Systems',
  keywords: ['Ameer Hamza', 'Machine Learning', 'AI Engineer', 'Portfolio', 'Generative AI', 'RAG Systems'],
  authors: [{ name: 'Ameer Hamza' }],
  openGraph: {
    title: 'Ameer Hamza - ML Engineer Portfolio',
    description: 'Machine Learning Engineer specializing in AI, NLP, and Generative AI',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}