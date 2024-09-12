import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

const Header = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/user")
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>Sign Up</Button>
    </div>
  )
}

export default Header
