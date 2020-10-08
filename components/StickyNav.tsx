//Uses prop from parent component to display text in Sticky Header
const StickyNav = (props) => {
  return (
    <div className="local-nav">
      <div className="sticky-nav-title">
        <a className="item" href="https://www.apple.com/airpods-pro/">
          {props.name}
        </a>
      </div>
    </div>
  );
};
export default StickyNav;
