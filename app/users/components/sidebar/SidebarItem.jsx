'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';

function SidebarItem({ label, href, icon: Icon, active, onClick = () => {} }) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={clsx(
				`flex
                gap-x-3
                text-sm
                leading-6
                font-semibold
                justify-center
                p-4
                w-full
                text-gray-500
                hover:text-black
                hover:bg-gray-100
                lg:rounded-md
                lg:p-3
                lg:w-auto`,
				active && 'bg-gray-100 text-black'
			)}
		>
			<Icon className='h-6 w-6' />
			<span className='hidden lg:sr-only'>{label}</span>
		</Link>
	);
}

SidebarItem.propTypes = {
	label: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.any,
	active: PropTypes.bool,
	onClick: PropTypes.func,
};

export default SidebarItem;
