import config from '../../lib/config';

/**
 * The shared footer component.
 */
export default function Footer() {
  return (
    <footer className='text-center text-sm py-20'>
      <p>
        Created by{' '}
        <a
          target='_blank'
          className='font-bold uppercase text-secondary transition-all duration-50 animate-pulse'
          href={config.authorUrl}
        >
          {config.author}
        </a>
      </p>
    </footer>
  );
}
