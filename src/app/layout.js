import { StrictMode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <StrictMode>
    <html lang="en">
      <body>{children}</body>
    </html>
    </StrictMode>
  )
}
