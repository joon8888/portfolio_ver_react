import './../styles/components/Popup.scss';

const Popup = ({selectedProject, isPopupVisible, onPopupClose}) => {
  const {title, period, image, webType, url, role, contribution, description, point, tags} = selectedProject;
  return (
    <>
      <div className="popup-wrap">
        <div className={`popup ${isPopupVisible ? 'popup--is-open' : '' }`}>
          <div className="__inner">
            <div className="popup__header">
              <button className="popup__close" data-cursor="close" onClick={onPopupClose}><span className="sr-only">닫기</span></button>
              <div className='__title-wrap'>
                {title && (
                  <h2 className="__title" dangerouslySetInnerHTML={{ __html: title }} />
                )}
                {url && (
                  <a className="btn--go-to-site" data-cursor="goToSite" title="새창열림" href={url} target="_blank" rel="noopener noreferrer"><span className="sr-only">사이트이동</span></a>
                )}
              </div>
              {tags.length > 0 && (
                <ul className="popup__tag">
                {tags.map((tag, i) => (
                  <li key={i}>{tag.label}</li>
                ))}
                </ul>
              )}
            </div>
            <div className="popup__body">
              {period && (
                <dl className="popup__body__item">
                  <dt className="__title">투입기간</dt>
                  <dd className="__content">{period}</dd>
                </dl>
              )}
              {role && contribution && (
                <dl className="popup__body__item">
                  <dt className="__title">포지션</dt>
                  <dd className="__content">{role} <span className="__sub-desc">* 기여도 { contribution }</span></dd>
                </dl>
              )}
              {webType && (
                <dl className="popup__body__item">
                  <dt className="__title">개발유형</dt>
                  <dd className="__content">{ webType }</dd>
                </dl>
              )}
              {description && (
                <dl className="popup__body__item">
                  <dt className="__title">업무상세</dt>
                  <dd className="__content" dangerouslySetInnerHTML={{ __html: description }} />
                </dl>
              )}
              {point && (
                <dl className="popup__body__item">
                  <dt className="__title">특이사항</dt>
                  <dd className="__content" dangerouslySetInnerHTML={{ __html: point }} />
                </dl>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`popup-dimmed ${isPopupVisible ? 'popup-dimmed--active' : '' }`}></div>
    </>
  )
}

export default Popup;