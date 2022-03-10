// The purpose of this component is to
// * display the experience of the user
// * allow the user to add new experience
// * allow the user to edit existing experience
// * allow the user to delete existing experience
import React, { useCallback, useState } from 'react';
import { EmploymentExperience } from 'components/profiles/EmploymentExperience';
import { PersonalProfileExperienceItem } from 'components/profiles/PersonalProfileExperienceItem';
import { PersonalProfileExperienceEdit } from 'components/profiles/PersonalProfileExperienceEdit';
import { PlusIcon } from '@heroicons/react/outline';
import { ConfirmDelete } from 'components/shared/ConfirmDelete';

export interface Props {
  allowEdit: boolean;
  employmentExperience: readonly (EmploymentExperience | null)[];
}

export const PersonalProfileExperienceList = ({ allowEdit, employmentExperience }: Props) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleTriggerDelete = (employmentExperience: EmploymentExperience | null) => {
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
      employmentExperience = employmentExperience.filter((i) => i?.id !== deletingId);

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

  const [showEditing, setShowEditing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEmploymentExperience, setEditingEmploymentExperience] =
    useState<EmploymentExperience | null>(null);

  const handleTriggerEdit = (employmentExperience: EmploymentExperience | null) => {
    // Show ConfirmEdit component
    if (!employmentExperience) return;

    setEditingEmploymentExperience(employmentExperience);
    setShowEditing(true);
  };

  const handleEdit = useCallback(
    () => {
      if (!editingEmploymentExperience) return;

      setShowEditing(false);
      setEditingEmploymentExperience(null); // Clear this
      setShowEditing(false);

      // Remove the item of given Id from the model's list
      //employmentExperience = employmentExperience.filter((i) => i?.id !== editingId);

      // TODO - Call the API to edit and move the above to handleEditCompleted

      // if (model.id === null) return;
      // setIsEditing(true);
      // const variables: useEditMentorProfileMutationVariables = {
      //   userId: model.userId,
      //   profileId: model.id,
      // };
      // return EditMentorProfile(variables, handleEditCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] //EditMentorProfile
  );

  // This is called once the SetMentorProfile mutation has completed
  // const handleEditCompleted = (response: useEditMentorProfileMutation$data): void => {
  //   outro();
  // };

  const handleEditConfirm = () => {
    if (!editingEmploymentExperience) {
      console.log('editingId is null');
      return;
    }

    handleEdit();
  };

  const handleEditCancel = () => {
    setShowEditing(false);
  };

  return (
    <>
      {allowEdit && (
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
          <PersonalProfileExperienceEdit
            show={true}
            working={isEditing}
            onCancel={handleEditCancel}
            onConfirm={handleEditConfirm}
            model={editingEmploymentExperience}
          />
        </>
      )}
      <div className="mb-3 grid grid-cols-2">
        <div className="">
          <h2 className="default-h2">Experience (work in progress)</h2>
        </div>
        {allowEdit && (
          <div className="ml-auto">
            <button type="button" className="form-button-flat">
              <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Add
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="mt-1">
          {employmentExperience.map((item, index) => (
            <PersonalProfileExperienceItem
              allowEdit={allowEdit}
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
