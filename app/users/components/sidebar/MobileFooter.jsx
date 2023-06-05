'use client';

import useRoutes from '@/app/hooks/useRoutes';
import useConversation from '@/app/hooks/useConversation';
import SidebarItem from './SidebarItem';

function MobileFooter() {
	const routes = useRoutes();
	const { isOpen } = useConversation();

	if (isOpen) {
		return null;
	}

	return (
		<div
			className='
                fixed
                bottom-0
                w-full
                bg-white
                border-t-[1px]
                lg:hidden
            '
		>
			<ul
				className='
                    flex
                    justify-between
                    items-center
                '
			>
				{routes.map(({ label, href, icon, active, onClick }) => (
					<li key={label} className='w-full'>
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
		</div>
	);
}

export default MobileFooter;
