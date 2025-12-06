import React from "react";

export const ContactPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Əlaqə Formu</h1>
        <p className="text-gray-600 mb-6">
          Bizimlə əlaqə saxlamaq üçün aşağıdakı formanı doldur.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Ad Soyad
            </label>
            <input
              type="text"
              placeholder="Adınızı yazın"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              E-poçt
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Mesaj
            </label>
            <textarea
              rows="4"
              placeholder="Mesajınızı yazın..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition"
          >
            Göndər
          </button>
        </form>
      </div>
    </div>
  );
};
