// The purpose of this component is to
// * display the experience of the user
// * allow the user to add new experience
// * allow the user to edit existing experience
// * allow the user to delete existing experience
import React, { useCallback, useState } from 'react';
import { employmentExperience } from 'components/private/profiles/EmploymentExperience';
import { PersonalProfileExperienceItem } from 'components/private/profiles/PersonalProfileExperienceItem';
import { PlusIcon } from '@heroicons/react/outline';
import { ConfirmDelete } from 'components/shared/ConfirmDelete';

export interface Props {
  employmentExperience: readonly (employmentExperience | null)[];
}

export const PersonalProfileExperienceList = (prop: Props) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleTriggerDelete = (employmentExperience: employmentExperience | null) => {
    // Show ConfirmDelete component
    if (!employmentExperience) return;

    setDeletingId(employmentExperience.id);

    setShowDeleteConfirmation(true);
  };

  const handleDelete = useCallback(
    () => {
      if (!deletingId) return;

      setShowDeleteConfirmation(false);
      setDeletingId(null); // Clear this
      setShowDeleteConfirmation(false);

      // Remove the item of given Id from the model's list
      prop.employmentExperience = prop.employmentExperience.filter((i) => i?.id !== deletingId);

      // TODO - Call the API to delete and move the above to handleDeleteCompleted

      // if (model.id === null) return;
      // setIsDeleting(true);
      // const variables: useDeleteMentorProfileMutationVariables = {
      //   userId: model.userId,
      //   profileId: model.id,
      // };
      // return DeleteMentorProfile(variables, handleDeleteCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] //DeleteMentorProfile
  );

  // This is called once the SetMentorProfile mutation has completed
  // const handleDeleteCompleted = (response: useDeleteMentorProfileMutation$data): void => {
  //   outro();
  // };

  const handleDeleteConfirm = () => {
    if (!deletingId) {
      console.log('deletingId is null');
      return;
    }

    handleDelete();
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <ConfirmDelete
        show={showDeleteConfirmation}
        working={isDeleting}
        Title="Delete Experience"
        Message="Are you sure that you want to delete this experience? This action cannot be undone!"
        ConfirmButtonText="Confirm Delete"
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
      <div className="mb-3 grid grid-cols-2">
        <div className="">
          <h2 className="default-h2">Experience (work in progress)</h2>
        </div>
        <div className="ml-auto">
          <button type="button" className="form-button-flat">
            <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
      <div>
        <div className="mt-1">
          {prop.employmentExperience.map((item, index) => (
            <PersonalProfileExperienceItem
              item={item}
              key={index}
              triggerDelete={() => handleTriggerDelete(item)}
              //triggerDelete={() => console.log('triggerDelete')}
            />
          ))}
        </div>
      </div>
    </>
  );
};
