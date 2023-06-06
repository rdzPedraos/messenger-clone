'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import useRoutes from '@/app/hooks/useRoutes';
import Avatar from '@/app/components/Avatar';

import SidebarItem from './SidebarItem';

function DesktopSidebar({ currentUser }) {
	const routes = useRoutes();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className='
                hidden
                
                lg:flex
                lg:flex-col
                lg:justify-between
                
                lg:fixed
                lg:inset-y-0
                lg:min-w-20
                lg:px-2
                lg:bg-white
                lg:overflow-y-auto
                lg:border-r-[1px]
                lg:py-4
                xl:px-6
            '
		>
			<nav>
				<ul
					role='list'
					className='
                    flex
                    flex-col
                    items-center
                    gap-y-2
                '
				>
					{routes.map(({ label, href, icon, active, onClick }) => (
						<li key={label}>
							<SidebarItem
								label={label}
								href={href}
								icon={icon}
								active={active}
								onClick={onClick}
							/>
						</li>
					))}
				</ul>
			</nav>

			<div
				onClick={() => setIsOpen(true)}
				className='
                    cursor-pointer
                    hover:opacity-75
                    transition
                '
			>
				<Avatar user={currentUser} />
			</div>
		</div>
	);
}

DesktopSidebar.propTypes = {
	currentUser: PropTypes.any,
};

export default DesktopSidebar;
