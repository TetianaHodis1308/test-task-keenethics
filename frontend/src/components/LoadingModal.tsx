import type { LoadingModalProps } from "../types/LoadingModalProps";


export const LoadingModal = ({
  message = 'Зачекайте, резюме генерується...',
}: LoadingModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(4,120,87,0.5)]">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800">{message}</h2>
      </div>
    </div>
  );
};
