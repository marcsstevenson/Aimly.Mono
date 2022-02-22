import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProfileTypeOption } from '__generated__/profileSearchQuery.graphql';
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
  const classNames = useMemo(() => {
    return 'h-6 w-6 text-gray-400 dark:text-gray-500';
  }, []);

  const allowDelete = useMemo(() => {
    return props.item !== null && props.item.type !== 'PERSONAL';
  }, [props.item]);

  // Return an icon element for the type given on the prop
  const icon: JSX.Element = useMemo(() => {
    if (!props.item) {
      return <StarIcon className={classNames} aria-hidden="true" />;
    }

    switch (props.item.type) {
      case 'PERSONAL':
        return <UserCircleIcon className={classNames} aria-hidden="true" />;
      case 'STARTUP':
        return <LightningBoltIcon className={classNames} aria-hidden="true" />;
      case 'MENTOR':
        return <UserGroupIcon className={classNames} aria-hidden="true" />;
      default:
        // Just catch expert here with default
        return <StarIcon className={classNames} aria-hidden="true" />;
    }
  }, [props.item, classNames]);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">{icon}</div>
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
      <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <div>
          <Link
            to={{
              pathname: getUrlForProfileTypeOptionType(
                props.item?.profileId,
                props.item?.name,
                props.item ? props.item.type : 'PERSONAL',
                false
              ),
            }}
            className="text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400 font-medium"
          >
            Edit
          </Link>
        </div>
        {allowDelete && (
          <div className="justify-self-end">
            <Link
              to={{
                pathname: getUrlForProfileTypeOptionType(
                  props.item?.profileId,
                  props.item?.name,
                  props.item ? props.item.type : 'PERSONAL',
                  true
                ),
              }}
              className="text-validation-700 hover:text-validation-900 dark:text-validation-400 dark:hover:text-validation-500 font-medium"
            >
              Delete
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfileItem;
