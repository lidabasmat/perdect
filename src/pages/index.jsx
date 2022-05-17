import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import IconGoogleSource from '../images/google.svg';
import IconFacebookSource from '../images/facebook.svg';
import IconMicrosoftSource from '../images/microsoft.svg';
import IconAmazonSource from '../images/amazon.svg';
import IconIdeoSource from '../images/ideo.svg';
import IconAdobeSource from '../images/adobe.svg';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 730
          )
        }
      }
      pic1Image: file(relativePath: {eq: "pic1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic2Image: file(relativePath: {eq: "pic2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic3Image: file(relativePath: {eq: "pic3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      computerImage: file(relativePath: {eq: "computer.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 390
          )
        }
      }
      pickImage: file(relativePath: {eq: "pick.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      design2Image: file(relativePath: {eq: "design2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED

          )
        }
      }
      bgImage: file(relativePath: {eq: "backgr.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED

          )
        }
      }
    }
  `);

  return (
    <>
      <div className="container-lg">
        <div className="bg-blue-300 rounded-3xl pl-5 md:pl-24 pr-5 py-5 md:py-0">
          <div className="row items-center">
            <div className="col-full md:col-6">
              <h1 className="typo-h1">
              Creative Design & Development
              </h1>
              <p className="mt-8 typo-blockquote">
                UI/UX design, web & mobile app development, and cloud solutions.
              </p>
              <div className="typo-body flex flex-wrap flex-col md:flex-row mt-12">
                <button className="bg-blue-800 border-2 border-blue-800 text-white px-8 py-2 rounded-lg font-semibold text-base">
                  Buy Now
                </button>
                <button className="border-2 border-blue-200 px-8 py-2 rounded-lg ml-0 md:ml-4 mt-5 md:mt-0 font-semibold text-base">
                  Sale for $1000
                </button>
              </div>
              <p className="typo-body mt-10">
                Or Renew, or Add Seats
              </p>
            </div>
            <div className="col-full col-6 mt-5 md:mt-0">
              <Image
                image={getImage(data.heroImage)}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="container-md">
          <h4 className="typo-h4 text-center">
            The Best Design Teams Use Principo
          </h4>
          <div className="flex flex-wrap justify-center md:justify-between mt-12">
            <div>
              <img src={IconGoogleSource} className="h-5" alt="google icon" />
            </div>
            <div>
              <img src={IconFacebookSource} className="h-5 ml-5 md:ml-0" alt="facebook icon" />
            </div>
            <div>
              <img src={IconMicrosoftSource} className="h-5 ml-5 md:ml-0" alt="microsoft icon" />
            </div>
            <div>
              <img src={IconAmazonSource} className="h-5 ml-5 md:ml-0 mt-5 md:mt-0" alt="amazon icon" />
            </div>
            <div>
              <img src={IconIdeoSource} className="h-5 ml-5 md:ml-0 mt-5 md:mt-0" alt="ideo icon" />
            </div>
            <div>
              <img src={IconAdobeSource} className="h-5 ml-5 md:ml-0 mt-5 md:mt-0" alt="Adobe icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <h2 className="typo-h2 text-center">
            Built for the biggest imaginations
          </h2>
          <p className="typo-body mt-5 text-center mx-auto max-w-3xl">
            A short animation, a slick interaction, or an extensive multi-screen app. No matter what you’re doing, you can do it with Principo.
          </p>
          <div className="row">
            <div className="col-full md:col-4 px-10 mt-16">
              <div className="relative">
                <Image
                  image={getImage(data.pic1Image)}
                />
                <div className="absolute mb-4 ml-4 bottom-0 left-0">
                  <h5 className="typo-blockquote">
                    Design
                  </h5>
                </div>
              </div>
              <p className="typo-small mt-8">
                Always think it’s hard to mack animation? Principlo timeline makes it quick work to illustrate the perfect bounce, ease,and pop.
              </p>
            </div>
            <div className="col-full md:col-4 px-10 mt-16">
              <div className="relative">
                <Image
                  image={getImage(data.pic2Image)}
                />
                <div className="absolute mb-4 ml-4 bottom-0 left-0">
                  <h5 className="typo-blockquote">
                    Development
                  </h5>
                </div>
              </div>
              <p className="typo-small mt-8">
                Always think it’s hard to mack animation? Principlo timeline makes it quick work to illustrate the perfect bounce, ease,and pop.
              </p>
            </div>
            <div className="col-full md:col-4 px-10 mt-16">
              <div className="relative">
                <Image
                  image={getImage(data.pic3Image)}
                />
                <div className="absolute mb-4 ml-4 bottom-0 left-0">
                  <h5 className="typo-blockquote">
                    Design
                  </h5>
                </div>
              </div>
              <p className="typo-small mt-8">
              It’s breeze to design the flow of a multi-screen app; and when you’re done you’ll have a bird’s- eye view of all your screens.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44 text-center">
        <div className="container-lg">
          <div className="bg-blue-300 rounded-3xl pt-24 px-5">
            <h2 className="typo-h2">
              Totally new, yet immediately familiar
            </h2>
            <p className="typo-body mt-8 max-w-xl mx-auto">
              With artboards, magic animation and a timeline, using Principle will give you Deja vu.
            </p>
            <div className="px-5">
              <Image
                image={getImage(data.computerImage)}
                className="relative top-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full md:col-6 ml-0 md:ml-1/12">
              <h2 className="typo-h2 max-w-sm">
                Pick Up Where You Left Off
              </h2>
              <p className="typo-intro mt-4">
                Import your designs from your favorite design tools with a simple,  one-click importer.
              </p>
              <p className="typo-body mt-6">
                Your designs will appear in Principle, ready for you to breathe new life into them. And if you make changes,
                importing again will intelligently merge your work.
              </p>
            </div>
            <div className="col-full md:col-5 mt-10 md:mt-0">
              <Image
                image={getImage(data.pickImage)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full md:col-5 order-2 md:order-1">
              <div className="mt-10 md:mt-0">
                <Image
                  image={getImage(data.design2Image)}
                />
              </div>
            </div>
            <div className="col-full md:col-6 md:ml-1/12 order-1 md:order-2">
              <h2 className="typo-h2">
                Design For Mobile, Web, and Desktop
              </h2>
              <p className="typo-intro mt-4">
                Choose a device preset or enter a custom Artboard size to design for your favorite platform.
              </p>
              <p className="typo-body mt-6">
                Hover events and mouse wheel scrolling make it easy to make web and desktop prototypes that feel like the real thing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44 container-lg text-center relative">
        <div className="absolute inset-0">
          <Image
            image={getImage(data.bgImage)}
            className="h-full w-full"
          />
        </div>
        <div className="relative py-20">
          <h2 className="typo-h2">
            Get started with Principo today
          </h2>
          <p className="typo-blockquote mt-6">
            Turn your ideas into incredible products with a 30-day trial.
          </p>
          <div className="typo-body flex flex-wrap flex-col md:flex-row justify-center mt-12">
            <button className="bg-blue-800 border-2 border-blue-800 text-white px-8 py-2 rounded-lg font-semibold text-base">
              Download
            </button>
            <button className="border-2 border-blue-200 px-8 py-2 rounded-lg ml-0 md:ml-4 mt-5 md:mt-0 font-semibold text-base">
              Buy for $99.9
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
