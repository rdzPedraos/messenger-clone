import { useMemo } from 'react';
import { useParams } from 'next/navigation';

function useConversation() {
	const params = useParams();

	const conversationId = useMemo(() => {
		return params.conversationId || '';
	}, [params?.conversationId]);

	const isOpen = useMemo(() => !!conversationId, [conversationId]);

	return useMemo(
		() => ({
			isOpen,
			conversationId,
		}),
		[isOpen, conversationId]
	);
}

export default useConversation;
