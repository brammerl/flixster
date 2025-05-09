const Dropdown = ({options, onChange}) => {

    
    return (
        <select id='sort' onChange={() => onChange()}>
            {
                options.map((option) => {
                    const value = option.value ?? option.label.toLowerCase()
                    return <option value={value} key={value}>{option.label}</option>
                })
            }
        </select>
    )
}

export default Dropdown;