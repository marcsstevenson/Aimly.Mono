import React, { useCallback, useContext, useState } from 'react';
import Pages from 'components/shared/Pages';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetAboutYouMutation from 'useSetAboutYouMutation';
import useDeleteCompanyProfileMutation from 'useDeleteCompanyProfileMutation';
import {
  useDeleteCompanyProfileMutation$data,
  useDeleteCompanyProfileMutationVariables,
} from '__generated__/useDeleteCompanyProfileMutation.graphql';

import {
  GetAboutYouModelInput,
  useSetAboutYouMutation$data,
} from '__generated__/useSetAboutYouMutation.graphql';
import * as GetAboutYouQuery from '__generated__/getAboutYouQuery.graphql';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/PrivateContext';
import { Field, Form, Formik } from 'formik';
import useLocationQuery from 'components/shared/useLocationQuery';
import validateRequiredString from 'validators/validateRequiredString';
import { companyProfileId, context } from 'components/shared/UrlConstants';
import ProfilePhotoSelector from 'components/shared/ProfilePhotoSelector';
import { getLinkedInProfileFromAuthHelper } from 'components/shared/LinkedInProfileAuthHelper';
import { getUsersLanguage } from 'components/shared/UsersLanguageHelper';
import { IndustrySelector } from 'components/shared/IndustrySelector';
import { useUrlParser } from 'components/shared/useUrlParser';
import { ConfirmDelete } from 'components/shared/ConfirmDelete';
import { Switch } from '@headlessui/react';
import { SwitchWrapper } from 'components/shared/SwitchWrapper';
import { LinkIcon } from '@heroicons/react/solid';
import { inviteCodeValue } from 'components/shared/UrlConstants';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import { ContentEditWrapper } from 'components/author/ContentEditWrapper';
import ContentEdit from 'components/author/ContentEdit';
import useDefaultEditor from 'components/author/useDefaultEditor';

const AboutYou = () => {
  const { checkedInUser } = useContext(PrivateContext);
  const { user, userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const locationQuery = useLocationQuery();
  const currentStep = 'AboutYou';
  const getAboutYouQueryVariables = {
    id: userId,
    companyProfileId: locationQuery.get(companyProfileId),
  };

  const inviteCode = locationQuery.get(inviteCodeValue);

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetAboutYouQuery.getAboutYouQuery>(
    GetAboutYouQuery.default,
    getAboutYouQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const loadedData = data.getAboutYou;

  const { getPromptForDeleteValue } = useUrlParser();

  const allowDelete: boolean = loadedData?.companyProfileId !== null;

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(
    allowDelete && getPromptForDeleteValue()
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const conceptType = 'Concept';

  let model: GetAboutYouModelInput = {
    ...data.getAboutYou,
    userId: userId,
    about: loadedData?.about ?? '',
    personalProfilePictureUrl:
      loadedData?.personalProfilePictureUrl ?? checkedInUser?.pictureUrl ?? user?.picture ?? '', // Note we are using the Auth profile values as the first fallback
    language: loadedData?.language ?? getUsersLanguage(),
    timezone: loadedData?.timezone ?? '',
    givenName: loadedData?.givenName ?? user?.given_name ?? '', // Note we are using the Auth profile values as the first fallback
    familyName: loadedData?.familyName ?? user?.family_name ?? '', // Note we are using the Auth profile values as the first fallback
    phoneNumber: loadedData?.phoneNumber ?? '',
    linkedInProfile: loadedData?.linkedInProfile ?? getLinkedInProfileFromAuthHelper(user) ?? '',
    companyProfileId: loadedData?.companyProfileId ?? null,
    companyName: loadedData?.companyName ?? '',
    type: loadedData?.type ?? conceptType, // The default
    listOnMarket: loadedData?.listOnMarket ?? true,
    companyProfilePictureUrl: loadedData?.companyProfilePictureUrl ?? '',
    website: loadedData?.website ?? '',
    numberOfFounders: loadedData?.numberOfFounders ?? 1,
    floor: loadedData?.floor ?? '',
    streetNumber: loadedData?.streetNumber ?? '',
    streetName: loadedData?.streetName ?? '',
    addressLocality: loadedData?.addressLocality ?? '',
    addressCity: loadedData?.addressCity ?? '',
    addressRegion: loadedData?.addressRegion ?? '',
    addressCountry: loadedData?.addressCountry ?? '',
    postalCode: loadedData?.postalCode ?? '',
    postOfficeBoxNumber: loadedData?.postOfficeBoxNumber ?? '',
    industries: loadedData?.industries ?? [],
  };

  const editor = useDefaultEditor(model.about);
  const [profilePictureUrl, setProfilePictureUrl] = useState(model.companyProfilePictureUrl);

  const SetAboutYou = useSetAboutYouMutation();
  const DeleteCompanyProfile = useDeleteCompanyProfileMutation();

  const onSubmit = (getAboutYouModel: GetAboutYouModelInput) => {
    getAboutYouModel.about = editor?.getHTML() ?? '';

    // Just relay the personal profile picture url to the backend for now (until we allow this to be updated)
    getAboutYouModel.personalProfilePictureUrl = model.personalProfilePictureUrl;

    // Just use the browser version of the timezone for now
    getAboutYouModel.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Just use the browser version of the language for now
    getAboutYouModel.language = getUsersLanguage();

    handleSave(getAboutYouModel);
  };

  const handleSave = useCallback(
    (getAboutYouModel: GetAboutYouModelInput) => {
      return SetAboutYou(inviteCode, getAboutYouModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetAboutYou]
  );

  // This is called once the SetAboutYou mutation has completed
  const handleSubmitCompleted = (
    response: useSetAboutYouMutation$data,
    companyName: string | null | undefined
  ): void => {
    const companyProfileIdVal = response.setAboutYou?.updatedCompanyProfileId;

    if (!companyProfileIdVal) {
      console.log('Cannot navigate forward without a company profile Id');
    }

    let queryString = `?${companyProfileId}=${companyProfileIdVal}`;

    // Add a context so that our title component knows what to display
    // and the user can see at a glance what profile they are editing
    if (companyName) {
      queryString += `&${context}=${companyName}`;
    }

    navigateToPage(Pages.TheProblem, queryString);
  };

  // Head back to profiles
  const outro = (queryString: string | null = null) => {
    navigateToPage(Pages.MyProfiles, queryString);
  };

  const handleDelete = useCallback(
    () => {
      if (model.companyProfileId === null) return;

      setIsDeleting(true);
      const variables: useDeleteCompanyProfileMutationVariables = {
        userId: model.userId,
        profileId: model.companyProfileId,
      };
      return DeleteCompanyProfile(variables, handleDeleteCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DeleteCompanyProfile]
  );

  // This is called once the SetCompanyProfile mutation has completed
  const handleDeleteCompleted = (response: useDeleteCompanyProfileMutation$data): void => {
    outro();
  };

  const handleDeleteConfirm = () => {
    handleDelete();
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  // Run this when the form values change to handle profile picture
  const getData = (values: GetAboutYouModelInput) => {
    if (values.companyProfilePictureUrl !== profilePictureUrl) {
      setProfilePictureUrl(values.companyProfilePictureUrl);
    }
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <ConfirmDelete
        show={showDeleteConfirmation}
        working={isDeleting}
        Title="Delete Profile"
        Message="Are you sure that you want to delete this profile? This action cannot be undone!"
        ConfirmButtonText="Confirm Delete"
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />

      <Formik initialValues={model} onSubmit={onSubmit}>
        {({ errors, touched, isValidating, isSubmitting, values, isValid }) => {
          getData(values);

          return (
            <Form className="dark: space-y-8 divide-y divide-gray-200 dark:divide-gray-500">
              <div className="space-y-8 pt-8">
                <div className="sm:col-span-6">
                  <Switch.Group as="li" className="flex items-center justify-between py-4">
                    <div className="flex flex-col">
                      <Switch.Label as="p" className="form-label" passive>
                        List on market
                      </Switch.Label>
                      <Switch.Description className="form-input-description">
                        If you wish for this startup to be visible on the market.
                      </Switch.Description>
                    </div>

                    <Field
                      className="form-input"
                      component={SwitchWrapper}
                      id="listOnMarket"
                      name="listOnMarket"
                    />
                  </Switch.Group>
                </div>

                <div className="sm:col-span-6">
                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label htmlFor="about" className="form-label">
                          About you
                        </label>
                        <div className="mt-1">
                          <ContentEdit inputEditor={editor} />
                          {/* <Field component={ContentEditWrapper} id="about" name="about" /> */}
                        </div>
                        <p className="form-input-description">
                          A brief description for your personal profile.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                      <ProfilePhotoSelector
                        profilePictureUrl={model.personalProfilePictureUrl}
                        allowChange={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <div className="mt-1">
                      <label id="email" className="block text-sm text-gray-700 dark:text-gray-200">
                        {user?.email}
                      </label>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="givenName" className="form-label">
                      First name *
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="givenName"
                        id="givenName"
                        autoComplete="given-name"
                        validate={validateRequiredString}
                        className={errors.givenName ? 'form-input-error' : 'form-input'}
                      />
                      {errors.givenName && touched.givenName && (
                        <div className="form-input-validation">{errors.givenName}</div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="familyName" className="form-label">
                      Last name *
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="familyName"
                        id="familyName"
                        autoComplete="family-name"
                        validate={validateRequiredString}
                        className={errors.familyName ? 'form-input-error' : 'form-input'}
                      />
                      {errors.familyName && touched.familyName && (
                        <div className="form-input-validation">{errors.familyName}</div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="linkedInProfile" className="form-label">
                      LinkedIn Profile
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="linkedInProfile"
                        id="linkedInProfile"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      Your phone number
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="tel"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="companyName" className="form-label">
                      Company name *
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="companyName"
                        id="companyName"
                        autoComplete="organization"
                        validate={validateRequiredString}
                        className={errors.companyName ? 'form-input-error' : 'form-input'}
                      />
                      {errors.companyName && touched.companyName && (
                        <div className="form-input-validation">{errors.companyName}</div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="type" className="form-label">
                      Company Stage
                    </label>
                    <div className="mt-1">
                      <Field type="text" name="type" as="select" className="form-input">
                        <option value="Concept">{conceptType}</option>
                        <option value="Prototype">Prototype</option>
                        <option value="Venture">Venture</option>
                        <option value="Enterprise">Enterprise</option>
                      </Field>
                      {errors.type && touched.type && (
                        <div className="form-input-validation">{errors.type}</div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="website" className="form-label">
                      Company website
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="website"
                        id="website"
                        autoComplete="url"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="numberOfFounders" className="form-label">
                      Number of founders
                    </label>
                    <div className="mt-1">
                      <Field
                        type="number"
                        min="1"
                        name="numberOfFounders"
                        id="numberOfFounders"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="companyProfilePictureUrl" className="form-label">
                      Company logo
                    </label>
                    <p className="form-input-description">
                      This needs to be a square ratio image and ideally small (less than 100KB)
                    </p>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <LinkIcon
                          className="h-5 w-5 text-gray-400 dark:text-gray-600"
                          aria-hidden="true"
                        />
                      </div>
                      <Field
                        type="text"
                        name="companyProfilePictureUrl"
                        id="companyProfilePictureUrl"
                        className="form-input pl-10"
                        placeholder="https://path.to/my_logo.png"
                        as="textarea"
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end sm:col-span-2">
                    <ProfilePhotoViewer
                      profilePictureUrl={profilePictureUrl}
                      imageRoundnessClass={'rounded-md'}
                    />
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="industries" className="form-label">
                      Industries
                    </label>
                    <div className="mt-1">
                      <Field
                        className="form-input"
                        component={IndustrySelector}
                        id="industries"
                        name="industries"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="streetName" className="form-label">
                      Company Street address
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="streetName"
                        id="streetName"
                        autoComplete="street-address"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="addressCity" className="form-label">
                      Company City
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="addressCity"
                        id="addressCity"
                        autoComplete="address-level2"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="addressRegion" className="form-label">
                      State / Province
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="addressRegion"
                        id="addressRegion"
                        autoComplete="address-level1"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="postalCode" className="form-label">
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="addressCountry" className="form-label">
                      Country
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        id="addressCountry"
                        name="addressCountry"
                        autoComplete="country-name"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="flex justify-end">
                  {allowDelete && (
                    <button
                      disabled={isSubmitting || isValidating}
                      type="button"
                      onClick={() => setShowDeleteConfirmation(true)}
                      className="form-delete"
                    >
                      Delete Profile
                    </button>
                  )}
                  <button
                    disabled={isSubmitting || isValidating || !isValid}
                    type="submit"
                    className="form-next ml-3"
                  >
                    Next
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </StartupQuestionnaireManager>
  );
};

export default withAuthenticationRequired(AboutYou, {
  onRedirecting: () => <Loading />,
});
