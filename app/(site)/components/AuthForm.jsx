'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import HorizontalSeparator from '@/app/components/HorizontalSeparator';

function AuthForm(props) {
	const [variant, setVariant] = useState('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	const toggleVariant = useCallback(() => {
		const value = variant === 'LOGIN' ? 'REGISTER' : 'LOGIN';
		setVariant(value);
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = data => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			/* Axios Register */
		}

		if (variant === 'LOGIN') {
			/* NextAuth Sign In */
		}
	};

	const socialAction = action => {
		setIsLoading(true);

		/* NextAuth Socail Sign In */
	};

	return (
		<div
			className='
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            '
		>
			<div
				className='
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:rounded-lg
                    sm:px-10
                '
			>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					{variant === 'REGISTER' && (
						<Input
							id='name'
							label='Name'
							register={register}
							errors={errors}
							disabled={isLoading}
						/>
					)}

					<Input
						id='email'
						label='Email address'
						type='email'
						register={register}
						errors={errors}
						disabled={isLoading}
					/>

					<Input
						id='password'
						label='Password'
						register={register}
						errors={errors}
						disabled={isLoading}
					/>

					<div>
						<Button disabled={isLoading} fullWidth type='submit'>
							{variant === 'LOGIN' ? 'Sign in' : 'Register'}
						</Button>
					</div>
				</form>

				<div className='mt-6'>
					<HorizontalSeparator text='Or continue with' />

					<div className='mt-6 flex gap-2'>
						<AuthSocialButton
							icon={BsGithub}
							onClick={() => socialAction('github')}
						/>
						<AuthSocialButton
							icon={BsGoogle}
							onClick={() => socialAction('google')}
						/>
					</div>
				</div>

				<div
					className='
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-6
                        px-2
                        text-gray-500
                    '
				>
					<p>
						{variant === 'LOGIN'
							? 'New to Messenger?'
							: 'Already have an acount?'}
					</p>
					<p onClick={toggleVariant} className='underline cursor-pointer'>
						{variant === 'LOGIN' ? 'Create an account' : 'Login'}
					</p>
				</div>
			</div>
		</div>
	);
}

AuthForm.propTypes = {};

export default AuthForm;
