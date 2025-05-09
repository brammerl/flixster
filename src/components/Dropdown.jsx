const Dropdown = ({options}) => {
    return (
        <select>
            {
                options.map((option) => {
                    return <option value={option.value ?? option.text.toLowerCase()}>{option.text}</option>
                })
            }
        </select>
    )
}

export default Dropdown;