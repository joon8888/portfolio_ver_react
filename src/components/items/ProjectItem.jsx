// ProjectItem.jsx
const ProjectItem = ({ project, onPopupOpen }) => {
  return (
    <li className="project-list__item">
      <a className="project-list__item__link" href="#" onClick={e => {e.preventDefault(); onPopupOpen();}}>
        <div className="project-list__item__content project-list__item__content--image">
          <img src={project.image} alt={`${project.title} 스크린 이미지`} />
        </div>
        <div className="project-list__item__content project-list__item__content--info">
          <h3 className="__name" dangerouslySetInnerHTML={{ __html: project.title }} />
          <p className="__period">{project.period}</p>
          <ul className="project-tag">
            {project.tags.map((tag, i) => (
              <li key={i} className={`project-tag__item ${tag.className || ''}`}>
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  )
}

export default ProjectItem
