import PropTypes from 'prop-types';
import getCurrentUser from '@/app/actions/getCurrentUser';

import DesktopSidebar from './components/sidebar/DesktopSidebar';
import MobileFooter from './components/sidebar/MobileFooter';

async function UsersLayout({ children }) {
	const currentUser = await getCurrentUser();

	return (
		<div className='h-full'>
			<DesktopSidebar currentUser={currentUser} />
			<MobileFooter currentUser={currentUser} />
			<main className='lg:pl-20 h-full'>{children}</main>
		</div>
	);
}

UsersLayout.propTypes = {
	children: PropTypes.node,
};

export default UsersLayout;
