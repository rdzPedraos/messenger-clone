'use client';

import PropTypes from 'prop-types';
import { SessionProvider } from 'next-auth/react';

function AuthContext({ children }) {
	return <SessionProvider>{children}</SessionProvider>;
}

AuthContext.propTypes = {
	children: PropTypes.node,
};

export default AuthContext;
