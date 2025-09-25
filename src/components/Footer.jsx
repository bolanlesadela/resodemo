import Section from "./Section";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="footer">
    <footer className="text-gray-300 py-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-white">Resobridge</span>. All
          rights reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <a href="#" className="hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Terms
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
    </Section>
  );
}
