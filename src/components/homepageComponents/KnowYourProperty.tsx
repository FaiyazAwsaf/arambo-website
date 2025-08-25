import React from "react";
import Link from "next/link";

const KnowYourProperty = () => {
  return (
    <div className="bg-Arambo-Background rounded-2xl md:w-[1200px] flex justify-center">
      <div className="md:w-[1112px] py-8 px-5 space-y-16 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <h2 className="h2 pr-3">Know Your Property’s True Worth</h2>
          </div>
          <div className="space-y-8">
            <p className="p-base text-Arambo-Text">
              You get access to verified legal professionals who can review
              contracts, handle documentation, and guide you through every legal
              step of your real estate journey.
            </p>
            <Link
              href="/list-property"
              className="px-10 py-4 bg-Arambo-Accent text-Arambo-White button-label rounded-lg"
            >
              Know property worth
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center space-x-4 ">
          <div className="rounded-xl bg-Arambo-White py-8 px-6 space-y-8">
            <div>
              <img src="/homepageAssets/HouseIcon2.svg" alt="Icon" />
            </div>
            <div className="space-y-3 mt-7">
              <h5 className="h5">Submit property details</h5>
              <p className="p-base text-Arambo-Text">
                Fill out a quick form with your property’s location, size, type,
                and condition.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-Arambo-White py-8 px-6 space-y-8">
            <div>
              <img src="/homepageAssets/VerifiedIcon2.svg" alt="Icon" />
            </div>
            <div className="space-y-3 mt-7">
              <h5 className="h5">Submit property details</h5>
              <p className="p-base text-Arambo-Text">
                Fill out a quick form with your property’s location, size, type,
                and condition.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-Arambo-White py-8 px-6 space-y-8">
            <div>
              <img src="/homepageAssets/CheckBoardIcon.svg" alt="Icon" />
            </div>
            <div className="space-y-3 mt-7">
              <h5 className="h5">Submit property details</h5>
              <p className="p-base text-Arambo-Text">
                Fill out a quick form with your property’s location, size, type,
                and condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourProperty;
