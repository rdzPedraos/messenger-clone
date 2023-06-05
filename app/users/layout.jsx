import PropTypes from 'prop-types';
import DesktopSidebar from './components/sidebar/DesktopSidebar';
import MobileFooter from './components/sidebar/MobileFooter';

async function UsersLayout({ children }) {
	return (
		<div className='h-full'>
			<DesktopSidebar />
			<MobileFooter />
			<main className='lg:pl-20 h-full'>{children}</main>
		</div>
	);
}

UsersLayout.propTypes = {
	children: PropTypes.node,
};

export default UsersLayout;
