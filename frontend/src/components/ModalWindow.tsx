import type { ModalWindowProps } from '../types/ModalWindowProps';

export const ModalWindow = ({ setIsModalOpen, blob }: ModalWindowProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    if (!blob) {
      return;
    }
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.docx';
    a.click();

    // Відкладене звільнення URL, щоб файл встиг завантажитись
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(4,120,87,0.5)]">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🎉 Резюме згенеровано!
        </h2>

        <p className="text-gray-600 mb-6">
          Ви можете завантажити свій файл нижче.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-emerald-700 text-white font-semibold rounded-md shadow-md hover:bg-emerald-800 hover:cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Завантажити файл
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-emerald-900 text-white font-semibold rounded-md shadow-md hover:bg-emerald-950 hover:cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};
