const Input = ({placeholder, name, type}: {placeholder: string, name: string, type: string}) => {
  return (
    <input placeholder={placeholder} name={name} type={type}/>
  )
}
export { Input }