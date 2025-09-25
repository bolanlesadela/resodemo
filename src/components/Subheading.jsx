import TagLine from "./Tagline";

const Subheading = ({ className, title, text, tag}) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-6 lg:mb-12 text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h4 className="h4 text-[26px]">{title}</h4>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}

    </div>
  );
};

export default Subheading;
