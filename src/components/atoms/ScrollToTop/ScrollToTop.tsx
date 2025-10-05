import ArrowUp from '@/assets/icons/arrowup.svg';

import IconButton from '../IconButton/IconButton';

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      size='4rem'
      variant='solid'
      interactionVariant='normal'
      onClick={handleClick}
    >
      <ArrowUp />
    </IconButton>
  );
}
