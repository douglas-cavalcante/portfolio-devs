

const Selector = ({ options, onChange, value }) => {

  return (
    <div className="option-container" >
      {options.map(item => (
        <div 
        style={{background: value === item ? 'tomato' : '#FFF'}}
        className="option-selector" onClick={() => onChange(item)}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default Selector;