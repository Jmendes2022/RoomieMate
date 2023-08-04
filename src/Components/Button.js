export default function Button({children, onClick, className}) {
  return (
    <button className={className} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
