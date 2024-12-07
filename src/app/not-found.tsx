import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div>
      <h3 className='text-center text-typoPrimary'>
        OoO :( 404 Not found :( 0o0
      </h3>
    </div>
  );
}
