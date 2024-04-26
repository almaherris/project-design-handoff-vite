import PropTypes from "prop-types"

export const ReasonCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-60 mx-auto tablet:w-auto">
      <img
        className="w-12 h-12 self-center mb-6 tablet:self-start tablet:w-16 tablet:h-16"
        src={icon}
        alt="icon"></img>
      <h3 className="text-xl font-medium self-start mb-4">{title}</h3>
      <p className="self-start">{description}</p>
    </div>
  )
}

ReasonCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
