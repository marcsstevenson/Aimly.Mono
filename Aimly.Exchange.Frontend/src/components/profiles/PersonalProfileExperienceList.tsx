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

import useSetExperienceMutation from 'useSetExperienceMutation';
import {
  ExperienceModelInput,
  useSetExperienceMutation$data,
} from '__generated__/useSetExperienceMutation.graphql';

import useDeleteExperienceMutation from 'useDeleteExperienceMutation';
import {
  useDeleteExperienceMutation$data,
  useDeleteExperienceMutationVariables,
} from '__generated__/useDeleteExperienceMutation.graphql';

export interface Props {
  allowEdit: boolean;
  employmentExperience: readonly (EmploymentExperience | null)[];
  userId: string | null;
}

export const PersonalProfileExperienceList = ({
  allowEdit,
  employmentExperience,
  userId,
}: Props) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const SetExperience = useSetExperienceMutation();
  const DeleteExperience = useDeleteExperienceMutation();

  const sortEmploymentExperience = (
    a: EmploymentExperience | null,
    b: EmploymentExperience | null
  ) => {
    if (!a || !b) return 0;
    return b.startYear * 100 + b.startMonth - (a.startYear * 100 + a.startMonth);
  };

  // useState for employmentExperience
  const [employmentExperienceValues, setEmploymentExperienceStateValues] =
    useState(employmentExperience);

  // const relayEnvironment = useRelayEnvironment();
  // const connectionRecord = ConnectionHandler.getConnection(
  //   userRecord,
  //   'CommentsComponent_comments_connection',
  // );

  const handleTriggerDelete = (employmentExperience: EmploymentExperience | null) => {
    // Show ConfirmDelete component
    if (!employmentExperience) return;

    setDeletingId(employmentExperience.id);
    setShowDeleteConfirmation(true);
  };

  const handleDelete = useCallback(
    (id: string) => {
      setIsDeleting(true);
      const variables: useDeleteExperienceMutationVariables = {
        userId: userId,
        id: id,
      };
      return DeleteExperience(variables, handleDeleteCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] //DeleteExperience
  );

  // This is called once the SetExperience mutation has completed
  const handleDeleteCompleted = (response: useDeleteExperienceMutation$data): void => {
    setShowDeleteConfirmation(false);
    setIsDeleting(false);
    setDeletingId(null);
    // How to update the data with the record removed?

    if (response?.deleteExperience?.deletedId) {
      setEmploymentExperienceStateValues([
        ...employmentExperienceValues.filter(
          (e) => e && e.id !== response?.deleteExperience?.deletedId
        ),
      ]);
    }
  };

  const handleDeleteConfirm = () => {
    if (!deletingId) {
      console.log('deletingId is null');
      return;
    }

    handleDelete(deletingId);
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
    // if (!employmentExperience) return;

    setEditingEmploymentExperience(employmentExperience);
    setShowEditing(true);
  };

  const handleEdit = useCallback(
    (experienceModel: ExperienceModelInput) => {
      return SetExperience(userId ?? '', experienceModel, handleEditCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetExperience]
  );

  // This is called once the SetExperience mutation has completed
  const handleEditCompleted = (
    experienceModel: ExperienceModelInput,
    response: useSetExperienceMutation$data
  ): void => {
    setIsEditing(false);
    setShowEditing(false);

    // How to update the data with the record updated?
    if (response?.setExperience?.updatedExperienceId) {
      const updated: EmploymentExperience = {
        id: response?.setExperience?.updatedExperienceId,
        title: experienceModel?.title ?? '',
        description: experienceModel?.description ?? '',
        organisation: experienceModel?.organisation ?? '',
        startMonth: experienceModel?.startMonth ?? 1,
        startYear: experienceModel?.startYear ?? 2020,
        endMonth: experienceModel?.endMonth ?? null,
        endYear: experienceModel?.endYear ?? null,
      };

      let newArray = [
        updated, // Add the new
        ...employmentExperienceValues.filter(
          (e) => e && e.id !== response?.setExperience?.updatedExperienceId // Take away the old
        ),
      ].sort(sortEmploymentExperience);

      setEmploymentExperienceStateValues(newArray);
    }

    setEditingEmploymentExperience(null);
  };

  const handleEditConfirm = (experienceModel: ExperienceModelInput) => {
    handleEdit(experienceModel);
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
            show={showEditing}
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
            <button
              type="button"
              className="form-button-flat"
              onClick={() => {
                handleTriggerEdit(null);
              }}
            >
              <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Add
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="mt-1">
          {employmentExperienceValues.map((item, index) => (
            <PersonalProfileExperienceItem
              key={index}
              allowEdit={allowEdit}
              item={item}
              triggerDelete={() => handleTriggerDelete(item)}
              triggerEdit={() => handleTriggerEdit(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
