function Footer() {
  const time = new Date().toLocaleDateString();
  return (
    <>
        <p>© {time} My Website. All rights reserved.</p>
    </>
  );
}

export default Footer;