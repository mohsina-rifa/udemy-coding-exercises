export default function Button({ children, mode = 'filled', Icon, ...props }) {
  let cssClasses = 'button';

  if (mode === 'filled') {
    cssClasses += ' filled-button';
  } else if (mode === 'outline') {
    cssClasses += ' outline-button';
  } else if (mode === 'text') {
    cssClasses += ' text-button';
  }

  if (Icon) {
    cssClasses += ' icon-button';
  }

  return (
    <button className={cssClasses} {...props}>
      {Icon && <span className="button-icon"><Icon /></span>}
      <span>{children}</span>
    </button>
  );
}
