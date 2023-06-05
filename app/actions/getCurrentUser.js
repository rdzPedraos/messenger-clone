import prisma from '@/app/libs/prismadb';
import getSession from './getSession';

async function getCurrentUser() {
	try {
		const session = await getSession();

		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
		});

		return currentUser || null;
	} catch (error) {
		return null;
	}
}

export default getCurrentUser;
