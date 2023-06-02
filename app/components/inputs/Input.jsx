'use client';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function Input({ id, label, required, type, register, errors, disabled }) {
	return (
		<div>
			<label
				htmlFor={id}
				className='
                    block
                    text-sm
                    font-medium
                    leading-6
                    text-gray-900
                '
			>
				{label}
			</label>

			<div className='mt-2'>
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					{...register(id, { required })}
					className={clsx(
						`form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        text-gray-900
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-300
                        placeholder:text-gray-400
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-sky-600
                        sm:text-sm
                        sm:leading-6`,
						errors && errors[id] && 'focus:ring-rose-500',
						disabled && 'opacity-50 cursor-default'
					)}
				/>
			</div>
		</div>
	);
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	type: PropTypes.string,
	required: PropTypes.bool,
	errors: PropTypes.object,
	disabled: PropTypes.bool,
};

export default Input;
