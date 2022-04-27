import React from 'react';
import { BadgeCheckIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const DashBoardWelcome = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-4 rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <BadgeCheckIcon className="h-12 w-12 text-2xl text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-2xl font-medium text-green-800">
              Welcome to the X Mantra Exchange!
            </h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                Please note that this platform is still in active development and there are many
                more features to be added in the short term.
              </p>
              {/* <p className="mt-4">
                March 16th 2022 -{' '}
                <NavLink className="mr-1 font-medium" to={{ pathname: '/my-profiles' }}>
                  Profiles
                </NavLink>
                can now have experience, skills and industries added to them. You have 148
                industries and over 50 thousand skills to choose from! The{' '}
                <NavLink className="mr-1 font-medium" to={{ pathname: '/market' }}>
                  Market
                </NavLink>
                has been expanded to include the viewing of all profiles types. We have also
                implemented our first client Exchange for Catallyze!
              </p>
              <p className="mt-4">
                March 7th 2022 - The{' '}
                <NavLink className="mr-1 font-medium" to={{ pathname: '/market' }}>
                  Market
                </NavLink>
                has been redeveloped and now displays results for startups, mentors, experts and
                community. Profiles can also be viewed in detail for startups and community.
              </p>
              <p className="mt-4">
                Feb 24th 2022 - At time of writing, the{' '}
                <NavLink className="mr-1 font-medium" to={{ pathname: '/my-profiles' }}>
                  My Profiles
                </NavLink>
                area is the most mature and will allow you to create and manage your own profiles
                for personal, startups, mentors and experts.
              </p> */}
              <p className="mt-4">
                For feedback, support and suggestions, please feel free to contact Marc at:
                <a
                  className="hover:text-primary-500 ml-1 font-medium"
                  href="mailto: marc.stevenson@aimly.io"
                >
                  marc.stevenson@aimly.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardWelcome;
