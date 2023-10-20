import { Button } from 'primereact/button'
import PropTypes from 'prop-types'
import './style.css'

export default function WelcomeCard({buttonText, buttonType, handleButtonClick, isOutlined, message}) {
  return (
    <div className="welcome-card-container">
        <h2>{message}</h2>
        <Button onClick={handleButtonClick} outlined={isOutlined} severity={buttonType}>{buttonText}</Button>
    </div>
  )
}

WelcomeCard.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  isOutlined: PropTypes.bool,
  message: PropTypes.string.isRequired,
}
