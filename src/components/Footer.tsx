import Image from "next/image";

import horiLogo from "../../public/white_horzontional_logo.png";

import facebook from "../../public/images/footer/facebook.svg";
import gmap from "../../public/images/footer/gmap.svg";
import linkedin from "../../public/images/footer/linkedin.svg";
import phone from "../../public/images/footer/phone.svg";
import whatsapp from "../../public/images/footer/whatsapp.svg";
import youtube from "../../public/images/footer/youtube.svg";

import email from "../../public/images/footer/email.svg";
import phoneNumber from "../../public/images/footer/phone_number.svg";

type Contact = {
  href: string;
  image: any;
  alt: string;
};

const contacts: Contact[] = [
  {
    href: "tel:+65 6684 4012",
    image: phone,
    alt: "phone",
  },
  {
    href: "https://wa.me/6597274141",
    image: whatsapp,
    alt: "whatsapp",
  },
  {
    href: "https://www.linkedin.com/company/calvary-carpentry-pte-ltd/",
    image: linkedin,
    alt: "linkedin",
  },
  {
    href: "https://g.page/calvary-carpentry-pte-ltd?share",
    image: gmap,
    alt: "gmap",
  },
  {
    href: "https://www.youtube.com/channel/UCy0Jb7Y2W1R0JQl6fJg4JzQ",
    image: youtube,
    alt: "youtube",
  },
  {
    href: "https://www.facebook.com/calvarycarpentry/",
    image: facebook,
    alt: "facebook",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1F2126] px-[38px] py-[70px] mt-[30px]">
      <div className="text-white container mx-auto sm:px-6 lg:px-8 my-6 lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="space-y-[30px] lg:col-span-full">
          <div className="h-[40px] w-[120px] relative">
            <Image
              src={horiLogo}
              alt="calvary carpentry sdn bhd"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            Welcome to Calvary Carpentry Sdn. Bhd., where exceptional
            craftsmanship meets unwavering trust. With a legacy of excellence
            established by prestigious brands in Singapore, we've wood for you.
          </p>
        </div>

        <div className="mt-[30px] lg:col-span-1">
          <div className="text-center py-4 border-b border-b-white">
            <h3 className="font-medium text-lg uppercase">Contact Us</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-[10px] justify-evenly">
            {contacts.map((contact) => (
              <a
                key={contact.alt}
                href={contact.href}
                className="inline-block mr-4"
              >
                <div className="h-[48px] w-[48px] relative">
                  <Image
                    src={contact.image}
                    alt={contact.alt}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[30px] lg:col-span-2">
          <div className="text-center py-4 border-b border-b-white">
            <h3 className="font-medium text-lg uppercase">Enquiry Form</h3>
          </div>
          <form action="">
            <div className="mt-[10px]">
              <div className="mt-2">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your email"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="contact" className="sr-only">
                  Contact
                </label>
                <input
                  type="contact"
                  name="contact"
                  id="contact"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your contact number"
                />
              </div>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="comment"
                  id="comment"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Leave your enquiry here..."
                />
              </div>
              <div className="w-full text-center">
                <button
                  type="button"
                  className="mt-2 mx-auto rounded-md bg-[#137765] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#137765] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137765]"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-[30px] lg:col-span-full lg:grid lg:grid-cols-2">
          <div className="text-center py-4 border-b border-b-white lg:col-span-full">
            <h3 className="font-medium text-lg uppercase">Location</h3>
          </div>
          <div className="space-y-4 mt-4">
            <h4 className="uppercase">Malaysia</h4>
            <p>
              No. 26, Jalan Laman Setia 7/6, Taman Laman Setia,81550 Gelang
              Patah, Johor, Malaysia.
            </p>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={email}
                    alt="email"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>msia@calvarycarpentry.com</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={phoneNumber}
                    alt="phone number"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>+60 16-778 5788</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <h4 className="uppercase">Singapore</h4>
            <p>54 Senoko Road, Singapore 758118, Floor 1</p>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={email}
                    alt="email"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>sales@calvarycarpentry.com</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={phoneNumber}
                    alt="phone number"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>+65 8776 7837</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px] lg:col-span-full">
          <div className="text-center py-4 border-b border-b-white">
            <h3 className="font-medium text-lg uppercase">Support</h3>
          </div>
          <div className="mt-4">
            <ul className="grid grid-cols-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Maintenance</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full text-center text-sm mt-8 lg:col-span-full">
          <p>©2023 Calvary Carpentry Sdn. Bhd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
