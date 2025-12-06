import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = ({
  code = 404,
  title = "Səhifə tapılmadı",
  message = "Axtardığınız səhifə mövcud deyil və ya silinmişdir.",
  homeHref = "/",
}) => {

const navigate = useNavigate()

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/')

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-3xl w-full text-center p-6 sm:p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-800">
        <div className="mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-red-100 to-red-50 dark:from-red-900 dark:to-red-800 flex items-center justify-center shadow-inner">
          {/* Simple error icon */}
          <svg
            className="w-20 h-20 sm:w-24 sm:h-24 text-red-600 dark:text-red-300"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="mt-6 sm:mt-8">
          <p className="text-sm font-medium text-red-600 dark:text-red-300">Xəta</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            {message}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-col sm:flex-row">
            <button
              onClick={goHome}
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 text-white text-sm font-medium shadow-sm transition"
              aria-label="Ana səhifəyə qayıt"
            >
              Ana səhifə
            </button>

            <button
              onClick={goBack}
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 text-sm text-gray-700 dark:text-gray-200 transition"
              aria-label="Geri"
            >
              Geri
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {code}
            </span>
            <span className="ml-3"> — Xəta kodu</span>
          </div>
        </div>
      </div>
    </main>
  );
};
