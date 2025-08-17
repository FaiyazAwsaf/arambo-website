import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-16 bg-transparent">
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 w-full max-w-5xl px-10 py-10 flex flex-col md:flex-row md:items-start items-center gap-10 z-10 relative">
          {/* Logo and tagline */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center md:items-start">
            <img src="logo.svg" alt="Arambo Logo" className="h-10 mb-3" />
            <div className="text-gray-700 text-sm text-center md:text-left">
              From Listing to Living—
              <br />
              Smarter with Arambo.
            </div>
          </div>
          {/* Links columns */}
          <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* For Rent */}
            <div>
              <div className="font-semibold mb-3 text-gray-900">For Rent</div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Residential
                  </Link>
                </li>
              </ul>
            </div>
            {/* Property */}
            <div>
              <div className="font-semibold mb-3 text-gray-900">Property</div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    For sale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    List a property
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <div className="font-semibold mb-3 text-gray-900">Company</div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Term of service
                  </Link>
                </li>
              </ul>
            </div>
            {/* Find us at */}
            <div>
              <div className="font-semibold mb-3 text-gray-900">Find us at</div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-700">
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src="https://framerusercontent.com/images/FqwfpHmR02hMAgU6I3O8HeUNOI.png"
          alt="Footer Background"
          className="absolute left-0 right-0 bottom-0 w-full px-4 md:px-8 rounded-3xl z-0 object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
