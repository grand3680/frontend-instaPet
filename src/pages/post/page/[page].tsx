import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { postT } from 'types';

function PagesPage() {
  const router = useRouter();
  const { page } = router.query;

  return <></>;
}

export default PagesPage;
