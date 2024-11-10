

interface InputProps {
  type: 'text' | 'number',
  placeholder: string,
  name?: string,
  value?: string
}
function Input(props: InputProps) {
  const {type, placeholder, name, value} = props
  return (
    <input type={type} placeholder={placeholder} name={name} value={value}/>
  )
}

export default Input
