import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";
import Image from "next/image";

const HeroSection: IBlockswebComponent = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <Image
          width={1912}
          height={948}
          className="w-full object-cover rounded-xl"
          src="/images/blocksweb.png"
          alt="Image Description"
        />
      </div>
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
            Create Stunning Websites with Simple Drag-and-Drop Interface
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
            With Blocksweb, content marketers can focus on crafting compelling
            stories and engaging content. Our intuitive drag-and-drop interface
            allows you to assemble web pages using pre-built components, each
            configurable within the boundaries set by the developers.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Intuitive Interface
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Easy-to-use drag-and-drop website builder.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Customizable Options
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Use developer-defined traits to customize components and
                  create unique layouts.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Efficient Workflow
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Quickly assemble web pages without any coding knowledge,
                  saving time and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.schema = {
  displayName: "Features",

  options: [
    {
      type: "text",
      label: "Title",
      name: "title",
    },
    {
      type: "text",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "image",
      label: "Background Image",
      name: "backgroundImage",
    },
  ],
};

export default HeroSection;
