

const SelectorMultiple = ({ options, onChange, values }) => {

  return (
    <div className="option-container" >
      {options.map(item => (
        <div 
        style={{background: values.includes(item)  ? 'tomato' : '#FFF'}}
        className="option-selector" onClick={() => onChange(item)}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default SelectorMultiple;