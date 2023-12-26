import Image from "next/image";
import productAccoya from "../../public/images/home/product_accoya.jpg";
import productCompositeDecking from "../../public/images/home/product_composite_decking.jpg";
import productEngineeredFlooring from "../../public/images/home/product_engineered_flooring.jpg";
import productMosoBamboo from "../../public/images/home/product_moso_bamboo.jpeg";
import productTimberDecking from "../../public/images/home/product_timber_decking.jpg";

import brandAccoya from "../../public/images/home/brand_accoya.svg";
import brandCalvaryComposite from "../../public/images/home/brand_calvary_composite.svg";
import brandKandinsky from "../../public/images/home/brand_kandinsky.svg";
import brandMosoBamboo from "../../public/images/home/brand_moso_bamboo.svg";
import brandTimberDecking from "../../public/images/home/brand_timber_decking.svg";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type Product = {
  title: string;
  description: string;
  brandImage: any;
  image: any;
};

const products: Product[] = [
  {
    title: "composite decking",
    description:
      "#1 Removable Decking in Singapore.  Experience Lasting Beauty, Unmatched Durability, and Effortless Maintenance",
    brandImage: brandCalvaryComposite,
    image: productCompositeDecking,
  },
  {
    title: "engineered flooring",
    description:
      "Where Art Meets Wood: Kandinsky® - Explore Our Timber. Experience the Beauty of Natural Patterns and a Broad Spectrum of Colors.",
    brandImage: brandKandinsky,
    image: productEngineeredFlooring,
  },
  {
    title: "timber decking",
    description:
      "Discover Unrivalled Woodwork and High-Performance Timbers. Endless Possibilities: Trellis, Benches, Cladding, Ceilings, Screens.",
    brandImage: brandTimberDecking,
    image: productTimberDecking,
  },
  {
    title: "moso bamboo",
    description:
      "Discover reconstituted Bamboo, the fastest growing and sustainable material with high durability and class 0 fire rating. Available for outdoor and indoors.",
    brandImage: brandMosoBamboo,
    image: productMosoBamboo,
  },
  {
    title: "accoya",
    description:
      "Sustainable acetylated Pine: High Durability, Termite-Fungal-Water Resistance. Perfect for All Weather Conditions.",
    brandImage: brandAccoya,
    image: productAccoya,
  },
];

const HomeProducts = () => {
  return (
    <section className="section white">
      <div className="row">
        <div className="border bg-transparent p-6 text-center">
          <h2 className="uppercase text-headingDark font-semibold text-xl">
            Product
          </h2>
        </div>
        <div className="container mx-auto sm:px-6 lg:px-8 my-6">
          <h3 className="mb-4">
            Diverse Wood Selection: WPC, Sustainable Engineered Flooring,
            Natural Timber, and Treated Options -
          </h3>
          <div className="flex flex-wrap gap-4">
            <div>
              <div className="text-[#805C00] font-medium text-lg flex space-x-2 items-center">
                <ArrowLongRightIcon className="w-4 h-4" />
                <h4>Engieered Flooring</h4>
              </div>
              <p className="pl-6">KANDINSKY, KANDINSKY Lite, TimberWise</p>
            </div>
            <div>
              <div className="text-[#805C00] font-medium text-lg flex space-x-2 items-center">
                <ArrowLongRightIcon className="w-4 h-4" />
                <h4>Decking and Outdoor</h4>
              </div>
              <p className="pl-6">Calvary Composite, MOSO, Accoya, Timber</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-6 lg:px-8">
        {/* <!-- ***** Section Title Start ***** --> */}
        {/* <!-- ***** Section Title End ***** --> */}
        <div className="row">
          <div className="grid grid-cols-12 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="lg:col-span-4 md:col-span-6 col-span-full"
              >
                <a
                  href=""
                  className="mb-[30px] group hover:pb-[10px] transition-all ease-in-out duration-300"
                >
                  <div className="w-full h-[228px] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] w-11/12 m-auto relative z-[2] -mt-[30px] text-center px-[30px] py-[25px] group-hover:-mt-[40px] transition-all ease-in-out duration-300">
                    <h3 className="uppercase text-base text-headingDark tracking-[0.7px] mb-[10px]">
                      {product.title}
                    </h3>
                    <div className="w-auto h-[30px] relative mb-[10px]">
                      <Image
                        src={product.brandImage}
                        alt={product.title}
                        fill
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <p className="mb-0 text-textDark tracking-[0.88px] leading-[26px]">
                      {product.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
