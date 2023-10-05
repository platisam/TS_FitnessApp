import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur tempora impedit asperiores velit similique. Doloremque
            maxime consequuntur, totam nisi eveniet modi, obcaecati ad pariatur,
            ducimus omnis nam quam reiciendis vitae.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
