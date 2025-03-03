import React from 'react';
import { Link } from 'react-router-dom';
import { PointsModel, PointItem } from 'types/PointsModel';

export interface props {
  pointsModel: PointsModel
}

const Points = ({ pointsModel }: props) => (
  <div className="py-12 bg-white dark:text-gray-100 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
          { pointsModel.why }
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          { pointsModel.title }
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-white lg:mx-auto">
          { pointsModel.description }
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {pointsModel.points.map((point: PointItem) => (
            <div key={point.title} className="relative">
              <dt>
                <Link
                  to={{
                    pathname: point.link,
                  }}
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <point.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                    {point.title}
                  </p>
                </Link>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                {point.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Points;
