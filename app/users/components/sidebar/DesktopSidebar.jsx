'use client';

import useRoutes from '@/app/hooks/useRoutes';
import { useState } from 'react';
import SidebarItem from './SidebarItem';

function DesktopSidebar() {
	const routes = useRoutes();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className='
                hidden
                lg:fixed
                lg:inset-y-0
                lg:min-w-20
                lg:px-2
                lg:bg-white
                lg:overflow-y-auto
                lg:border-r-[1px]
                lg:py-4
                lg:block
                xl:px-6
            '
		>
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
	);
}

export default DesktopSidebar;
