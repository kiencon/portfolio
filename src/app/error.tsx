'use client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const ErrorBoundary = () => (
  <h3 className='text-center text-typoPrimary'>
    OoO :( Something went wrong :( 0o0
  </h3>
);

export default ErrorBoundary;
