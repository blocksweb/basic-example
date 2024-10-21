import { IBlockswebComponent, Text, Image } from "@blocksweb/core-local/src";

type HeroSectionProps = {
  customerAmount: number;
  subtitle: string;
  backgroundImage: string;
};

const Element = ({ attributes, children, element, propName }) => {
  const style = { textAlign: element.align, fontFamily: element.fontFamily };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes} bw-option-name={propName}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes} bw-option-name={propName}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1
          style={{
            fontSize: "3.75rem",
          }}
          {...attributes}
          bw-option-name={propName}
        >
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes} bw-option-name={propName}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes} bw-option-name={propName}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes} bw-option-name={propName}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes} bw-option-name={propName}>
          {children}
        </p>
      );
  }
};

const HeroSection: IBlockswebComponent = (props: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Your Ultimate {props.customerAmount}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent pl-3">
              Visual
            </span>
            <br />
            website builder
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <Text
            key={0}
            text={props.subtitle}
            className="text-lg text-gray-600 dark:text-neutral-400"
            propName="subtitle"
            component="h1"
            element={(props) => <Element {...props} />}
          />
          <Image
            propName={"backgroundImage"}
            asset={props.backgroundImage}
            default={"https://source.unsplash.com/random"}
            alt="Hero Image"
          />
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
            href="https://docs.blocksweb.nl/docs/intro"
            target="_blank"
          >
            Get started
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <button
            type="button"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            $ npx create-blocksweb-app my-app
            <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
              <svg
                className="flex-shrink-0 size-4 group-hover:rotate-6 transition"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

HeroSection.schema = {
  displayName: "HeroSection",

  options: [
    {
      type: "number",
      label: "amount of customers",
      name: "customerAmount",
      default: 50,
    },
    {
      type: "text",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "library-single",
      label: "Product",
      name: "product",
      default: null,
    },
    {
      type: "image",
      label: "Background Image",
      name: "backgroundImage",
    },
  ],
};

export default HeroSection;
