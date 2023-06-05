'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import AuthSocialButton from './AuthSocialButton';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import HorizontalSeparator from '@/app/components/HorizontalSeparator';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

import { toast } from 'react-hot-toast';
import { BsGithub, BsGoogle } from 'react-icons/bs';

function AuthForm() {
	const [variant, setVariant] = useState('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session?.status === 'authenticated') {
			router.push('/users');
		}
	}, [session?.status, router]);

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
			axios
				.post('/api/register', data)
				.then(() => signIn('credentials', data))
				.catch(({ response: { data } }) => toast.error(data))
				.finally(() => setIsLoading(false));
		} else if (variant === 'LOGIN') {
			signIn('credentials', {
				...data,
				redirect: false,
			})
				.then(callback => {
					if (callback?.error) {
						toast.error(callback.error);
					} else if (callback?.ok) {
						toast.success('Logged in!');
					}
				})
				.finally(() => setIsLoading(false));
		}
	};

	const socialAction = action => {
		setIsLoading(true);
		signIn(action, { redirect: false })
			.then(callback => {
				console.log(callback, '???');
				if (callback?.error) {
					toast.error(callback.error);
				} else if (callback?.ok) {
					toast.success('Logged in!');
				}
			})
			.finally(() => setIsLoading(false));
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
					{variant === 'LOGIN' ? (
						<>
							<p>New to Messenger?</p>
							<p
								onClick={() => setVariant('REGISTER')}
								className='underline cursor-pointer'
							>
								Create an account
							</p>
						</>
					) : (
						<>
							<p>Already have an acount?</p>
							<p
								onClick={() => setVariant('LOGIN')}
								className='underline cursor-pointer'
							>
								Login
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default AuthForm;
