import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import AuthContext from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Messenger Clone',
	description: 'App for chatting created with nextjs',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthContext>
					<Toaster />
					{children}
				</AuthContext>
			</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.array,
};
