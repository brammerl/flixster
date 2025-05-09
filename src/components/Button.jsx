const BUTTON_COLORS = {
    primary: 'primary-button',
    secondary: 'secondary-button'
}

const BUTTON_SIZES = {
    default: 'default-button'
}

const Button = ({onClick, size='default', color='primary'}) => {
    const sizeClassName = `${BUTTON_SIZES[size]}`
    const colorClassName = `${BUTTON_COLORS[color]}`

    const finalClassName = `${sizeClassName} ${colorClassName}`
    

    return (<button className={finalClassName} onClick={() => onClick()}>CLICK ME</button>)
}

export default Button;