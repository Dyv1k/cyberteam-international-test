import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'normalize.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Рейтинговая таблица "Гоночки"',
	description: 'Рейтинговая таблица "Гоночки',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={inter.className} style={{position: "relative"}}>{children}</body>
		</html>
	)
}
