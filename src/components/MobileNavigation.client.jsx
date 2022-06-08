import {Fragment, useEffect} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';
import {MdClose} from 'react-icons/md'

import MobileCountrySelector from './MobileCountrySelector.client';
import OpenIcon from './OpenIcon';

let scrollPosition = 0;

/**
 * A client component that defines the navigation for a mobile storefront
 */
export default function MobileNavigation({collections, isOpen, setIsOpen}) {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  useEffect(() => {
    if (isOpen) {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
    } else if (document.body.style.position) {
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <OpenFocusTrap>
        {/* Close and Open Icons */}
        <button
          type="button"
          className=" relative z-10 top-3 flex justify-center items-center w-7 h-full mb-[2rem]"
          onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}
        >
          <span className="sr-only">{isOpen ? 'Close' : 'Open'} Menu</span>
          {isOpen ? <CloseIcon /> : <OpenIcon />}
        </button>
        {/* Set Opening and Closing of the nav bar */}
        {isOpen ? (
          <div className="fixed -left-0 top-0 w-full h-screen z-0 bg-secondary-10 px-4 md:px-12 py-10 opacity-90">
            <ul>
              {/* map over the collections and return each collection's title as a list item */}
              {collections.map((collection) => (
                <li
                  className=" border-secondary-3 border-b-2 text-secondary-1 font-bold text-[1rem]"
                  key={collection.id}
                >
                  <Link
                    className="group py-5 text-secondary-3 flex items-center justify-between"
                    to={`/collections/${collection.handle}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {collection.title}
                    <ArrowRightIcon className="hidden group-hover:block" />
                  </Link>
                </li>
              ))}
            </ul>
            <MobileCountrySelector />
          </div>
        ) : null}
        {/* End of Nav-bar */}
      </OpenFocusTrap>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="text-[2rem] text-secondary-3 border-0 outline-none">
      <MdClose />
    </div>
  );
}

function ArrowRightIcon({className}) {
  return (
   
    <svg
      className={className}
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999762 12C0.743762 12 0.487762 11.902 0.292762 11.707C-0.0982383 11.316 -0.0982383 10.684 0.292762 10.293L4.58576 6.00001L0.292762 1.70701C-0.0982383 1.31601 -0.0982383 0.684006 0.292762 0.293006C0.683762 -0.0979941 1.31576 -0.0979941 1.70676 0.293006L6.70676 5.29301C7.09776 5.68401 7.09776 6.31601 6.70676 6.70701L1.70676 11.707C1.51176 11.902 1.25576 12 0.999762 12Z"
        fill="black"
      />
    </svg>
  );
}
