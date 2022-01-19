import React, { Component } from "react";
import features from "./homeContentData";
import { Link } from "react-router-dom";

class HomeContent extends Component {
  render() {
    return (
      <div className="py-12 bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Aimly?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              A better way to get started
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-white lg:mx-auto">
              Only Aimly has the unique combination of mentorship, experts and community delivered from a single cohesive marketplace.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                  <dt>
                  <Link
                    to={{
                      pathname: feature.link
                      }}>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{feature.title}</p>
                  </Link>

                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
