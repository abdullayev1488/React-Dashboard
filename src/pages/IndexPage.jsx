import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const HomePage = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Xoş gəldin, Admin 👋
      </h1>

      <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
        Dashboard-a xoş gəlmisən! Burada saytının ümumi göstəricilərinə baxa
        bilərsən.
      </p>

      {/* ------- Stats Cards ------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { title: "Məhsullar", value: data.length, color: "bg-indigo-500" },
          { title: "İstifadəçilər", value: "2,453", color: "bg-green-500" },
          { title: "Sifarişlər", value: "892", color: "bg-yellow-500" },
          { title: "Qazanc", value: "$12,840", color: "bg-pink-500" },
        ].map((item) => (
          <div
            key={item.title}
            className={` ${item.color} text-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300`}
          >
            <p className="text-xs md:text-sm opacity-75">{item.title}</p>
            <h2 className="text-xl md:text-2xl font-semibold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* -------- Recent Activities -------- */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
          Son fəaliyyətlər
        </h2>

        <ul className="divide-y divide-gray-200 text-gray-600 text-sm md:text-base">
          <li className="py-3">✅ Yeni məhsul əlavə edildi: “Smart Watch Pro”.</li>
          <li className="py-3">🛍️ 3 yeni sifariş daxil oldu.</li>
          <li className="py-3">👤 Yeni istifadəçi qeydiyyatdan keçdi.</li>
          <li className="py-3">💰 Qazanc 12% artdı.</li>
        </ul>
      </div>
    </div>
  );
};
