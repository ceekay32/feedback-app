function Header({ text, bgColor, textColor }) {
  let headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <header style={headerStyles}>
        <h1 className="container">{text}</h1>
      </header>
    </>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
