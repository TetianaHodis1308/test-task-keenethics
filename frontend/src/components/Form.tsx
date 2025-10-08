import { useState } from 'react';
import type { FormEvent } from 'react';
import { TextField } from './TextField';
import { FormFieldName } from '../types/FormFieldName';
import type { ResumeFormData } from '../types/FormData';
import { ModalWindow } from './ModalWindow';
import {
  emptyFormData,
  formFields,
  initialTouchedState,
} from '../constants/constants';
import { LoadingModal } from './LoadingModal';

const Form = () => {
  const [formData, setFormData] = useState<ResumeFormData>(emptyFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState(initialTouchedState);
  const [blob, setBlob] = useState<Blob | MediaSource | null>(null);

  const notReadyToSubmit =
    !formData.name ||
    !formData.position ||
    !formData.city ||
    !formData.email ||
    !formData.skills ||
    !formData.experience;

  const readyToReset = Object.values(formData).some(
    (value) => value.trim() !== '',
  );

  const shouldShowModal = isModalOpen && blob;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: FormFieldName,
  ) => {
    const { value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trimStart(),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://test-task-keenethics.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error('Server error:', err);
        setIsLoading(false);

        return;
      }
      const fileBlob = await response.blob();
      setBlob(fileBlob);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Помилка при надсиланні:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(emptyFormData);
    setTouched(initialTouchedState);
  };

  return (
    <div className="bg-emerald-50 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">
        Анкета для створення резюме
      </h1>
      <h4 className="text-sm text-center text-red-500 mb-8">
        Зірочка (*) указує, що запитання обов’язкове
      </h4>

      {isLoading && <LoadingModal />}

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Дані для резюме
        </h2>

        {formFields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            multiline={field.multiline}
            touched={touched}
            onTouched={setTouched}
          />
        ))}

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <button
            type="submit"
            disabled={notReadyToSubmit}
            className="px-6 py-2 bg-emerald-700 text-white font-semibold rounded-md shadow-md hover:bg-emerald-800 hover:cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Згенерувати резюме
          </button>

          <button
            type="button"
            disabled={!readyToReset}
            onClick={handleReset}
            className="px-6 py-2 bg-emerald-900 text-white font-semibold rounded-md shadow-md hover:bg-emerald-950 hover:cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Очистити анкету
          </button>
        </div>
      </form>

      {shouldShowModal && (
        <ModalWindow
          setIsModalOpen={setIsModalOpen}
          blob={blob}
        />
      )}
    </div>
  );
};

export default Form;
