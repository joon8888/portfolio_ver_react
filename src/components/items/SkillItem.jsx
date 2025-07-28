const SkillItem = ({ type, image, title, content }) => {
  const baseClass = '__content--column__image'
  const typeClass = `${baseClass}--${type}`

  if (type === 'static') {
    return (
      <div className={`${baseClass} ${typeClass}`}>
        <div className="image__front">
          <img src={image} alt="관련 이미지" />
        </div>
      </div>
    )
  }

  if (type === 'flip') {
    return (
      <div className={`${baseClass} ${typeClass}`} data-cursor="hover">
        <div className="__inner--flip">
          <div className="image__front">
            <img src={image} alt={`${title} 관련 이미지`} />
            {/* <h3 className="image__front__title">{title}</h3> */}
          </div>
          <div className="image__back">
            <p className="image__back__content" dangerouslySetInnerHTML={{ __html: content}} />
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default SkillItem
