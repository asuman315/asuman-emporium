import {Link} from '@shopify/hydrogen';
const dateToday = new Date();
const day = dateToday.getDay();
const month = dateToday.getMonth();
const year = dateToday.getFullYear();

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo">
      <div className="relative border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12"></div>
      </div>

      <div className="py-6 px-4 md:px-8 bg-gray-50">
        <h4 className="text-gray-600 text-center ">
          © {`${day + 1}  - ${months[month]} - ${year} ${days[day]}`}  Asuman Emporium
        </h4>
        <p className='text-center'>All rights reserved</p>
      </div>
    </footer>
  );
}
