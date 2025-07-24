import './../styles/components/Popup.scss';

const Popup = ({isPopupVisible, onPopupClose}) => {
  return (
    <div className="popup-wrap">
      <div className={`popup ${isPopupVisible ? 'popup--is-open' : '' }`}>
        <div className="__inner">
          <div className="popup__header">
            <button className="popup__close" onClick={onPopupClose}><span className="sr-only">닫기</span></button>
            <h2 className="__title">
              KT닷컴 사이트 운영<br/>상품/혜택 담당
              <a className="btn--go-to-site" href="https://product.kt.com/" target="_blank"><span className="sr-only">사이트이동</span></a>
            </h2>
          </div>
          <div className="popup__body">
            <div className="__inner--scroll">
              <dl className="popup__body__item">
                <dt className="__title">투입기간</dt>
                <dd className="__content">2025.05 - 2025.07</dd>
              </dl>
              <dl className="popup__body__item">
                <dt className="__title">포지션</dt>
                <dd className="__content">PA <span>기여도: 100%</span></dd>
              </dl>
              <dl className="popup__body__item">
                <dt className="__title">업무상세</dt>
                <dd className="__content">
                  <ul>
                    <li>CMS</li>
                  </ul>
                </dd>
              </dl>
              <dl className="popup__body__item">
                <dt className="__title">특이사항</dt>
                <dd className="__content">
                  <ul>
                    <li>배포 전 내부 웹접근성 심사 필수</li>
                    <li>2023 쇼핑센터분야 대상 웹어워드 <a className="btn--detail" href="" target="_blank">자세히보기</a></li>
                  </ul> 
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;