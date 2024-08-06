import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { postT } from 'types';

function PostPage() {
  const router = useRouter();
  const { postId } = router.query;

  return <></>;
}

export default PostPage;
