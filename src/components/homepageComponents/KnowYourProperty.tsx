import Link from "next/link";
import React from "react";

const KnowYourProperty = () => {
  return (
    <div className="bg-Arambo-Background rounded-2xl w-full max-w-[1200px] mx-auto flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-[1112px] py-6 sm:py-8 px-3 sm:px-5 space-y-8 sm:space-y-12 lg:space-y-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h2 className="h2 pr-0 md:pr-3">
              Know Your Property&apos;s True Worth
            </h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <p className="p-base text-Arambo-Text">
              You get access to verified legal professionals who can review
              contracts, handle documentation, and guide you through every legal
              step of your real estate journey.
            </p>
            <Link href={'/'} className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-Arambo-Accent text-Arambo-White button-label rounded-lg w-full sm:w-auto">
              Know property worth
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-4 lg:gap-6">
          <div className="rounded-xl bg-Arambo-White py-6 sm:py-8 px-4 sm:px-6 space-y-6 sm:space-y-8 flex-1">
            <div>
              <img src="/homepageAssets/HouseIcon2.svg" alt="Icon" />
            </div>
            <div className="space-y-3 mt-7">
              <h5 className="h5">Submit property details</h5>
              <p className="p-base text-Arambo-Text">
                Fill out a quick form with your property&apos;s location, size,
                type, and condition.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-Arambo-White py-6 sm:py-8 px-4 sm:px-6 space-y-6 sm:space-y-8 flex-1">
            <div>
              <img src="/homepageAssets/VerifiedIcon2.svg" alt="Icon" />
            </div>
            <div className="space-y-3 mt-7">
              <h5 className="h5">Submit property details</h5>
              <p className="p-base text-Arambo-Text">
                Fill out a quick form with your property&apos;s location, size,
                type, and condition.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-Arambo-White py-6 sm:py-8 px-4 sm:px-6 space-y-6 sm:space-y-8 flex-1">
            <div>
              <img src="/homepageAssets/CheckBoardIcon.svg" alt="Icon" />
            </div>
            <div className="space-y-3 mt-7">
              <h5 className="h5">Submit property details</h5>
              <p className="p-base text-Arambo-Text">
                Fill out a quick form with your property&apos;s location, size,
                type, and condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourProperty;
