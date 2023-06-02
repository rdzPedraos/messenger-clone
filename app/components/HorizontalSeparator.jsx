import clsx from 'clsx';
import PropTypes from 'prop-types';

function HorizontalSeparator({ text, className = '', ...props }) {
	return (
		<div className={clsx('relative', className)} {...props}>
			<div
				className='
                    absolute
                    inset-0
                    flex
                    items-center
                '
			>
				<div className='w-full border-t border-gray-300' />
			</div>
			<div
				className='
                    relative 
                    flex 
                    justify-center 
                    text-sm
                '
			>
				<span
					className='
                        bg-white 
                        px-2 
                        text-gray-500
                    '
				>
					{text}
				</span>
			</div>
		</div>
	);
}

HorizontalSeparator.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};

export default HorizontalSeparator;
