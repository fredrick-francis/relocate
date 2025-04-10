'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Load Bootstrap JS only on client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
