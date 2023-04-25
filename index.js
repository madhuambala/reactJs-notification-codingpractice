const Notification = (props) => {
  const { className, iconUrl, paragraph } = props;
  const classNameContainer = `notification-container ${className}`;
  return (
    <div className={classNameContainer}>
      <img className="icons" src={iconUrl} />
      <p className="sub-tittle">{paragraph}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notification</h1>
    <div className="container">
      <Notification
        className="primary-bg-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        paragraph="Information Message"
      />
      <Notification
        className="success-bg-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        paragraph="Successful Message"
      />
      <Notification
        className="warning-bg-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        paragraph="Warning Message"
      />
      <Notification
        className="danger-bg-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        paragraph="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
