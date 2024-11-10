
interface ButtonProps {
  children : React.ReactNode | React.ReactElement 
  onClick? : () => void
  type: 'submit' | 'button'
}

function Button(props : ButtonProps) {
  const {children, onClick, type} = props;
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}

export default Button;