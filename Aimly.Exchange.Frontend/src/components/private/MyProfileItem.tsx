import React, { useContext, useMemo } from 'react';
// import { getIconForProfileTypeOptionType } from 'components/shared/IconForProfileTypeOptionType';
import { Link } from 'react-router-dom';
import { ProfileTypeOption } from '__generated__/profileSearchQuery.graphql';
import { JsxElement } from 'typescript';
import { UserCircleIcon, LightningBoltIcon, UserGroupIcon, StarIcon } from '@heroicons/react/solid';
import { getUrlForProfileTypeOptionType } from 'components/shared/UrlForProfileTypeOptionType';

export interface ProfileSearchResult {
  readonly profileId: any;
  readonly name: string | null;
  readonly type: ProfileTypeOption;
}

interface Props {
  item: ProfileSearchResult | null;
}

const MyProfileItem = (props: Props) => {
  // const icon = useMemo(() => {
  //   return getIconForProfileTypeOptionType(props.item.type);
  // }, [props.item.type]);
  //: JSX.Element

  // const getIconForProfileTypeOptionType = (type: ProfileTypeOption) => {
  //   switch (type) {
  //     case 'PERSONAL':
  //       return UserCircleIcon;
  //     case 'STARTUP':
  //       return LightningBoltIcon;
  //     case 'MENTOR':
  //       return UserGroupIcon;
  //     case 'EXPERT':
  //       return StarIcon;
  //     default:
  //       return UserCircleIcon;
  //   };

  const test = StarIcon;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <StarIcon className="h-6 w-6 text-gray-400 dark:text-gray-500" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                {props.item?.type}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900 dark:text-gray-50">
                  {props.item?.name}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <div className="text-sm">
          <Link
            to={{
              pathname: getUrlForProfileTypeOptionType(
                props.item?.profileId,
                props.item?.name,
                props.item ? props.item.type : 'PERSONAL'
              ),
            }}
            className="text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400 font-medium"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfileItem;
