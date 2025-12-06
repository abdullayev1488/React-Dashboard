import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const HomePage = () => {
  const { data } = useContext(DataContext)
  return (
    <div className="min-h-[80vh] bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Xoş gəldin, Admin 👋
      </h1>

      <p className="text-gray-600 mb-10">
        Dashboard-a xoş gəlmisən! Burada saytının ümumi göstəricilərinə baxa
        bilərsən.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Məhsullar", value: data.length, color: "bg-indigo-500" },
          { title: "İstifadəçilər", value: "2,453", color: "bg-green-500" },
          { title: "Sifarişlər", value: "892", color: "bg-yellow-500" },
          { title: "Qazanc", value: "$12,840", color: "bg-pink-500" },
        ].map((item) => (
          <div
            key={item.title}
            className={`${item.color} text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition`}
          >
            <p className="text-sm opacity-90">{item.title}</p>
            <h2 className="text-2xl font-semibold">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Son fəaliyyətlər
        </h2>

        <ul className="divide-y divide-gray-200 text-gray-600">
          <li className="py-3">✅ Yeni məhsul əlavə edildi: “Smart Watch Pro”.</li>
          <li className="py-3">🛍️ 3 yeni sifariş daxil oldu.</li>
          <li className="py-3">👤 Yeni istifadəçi qeydiyyatdan keçdi.</li>
          <li className="py-3">💰 Qazanc 12% artdı.</li>
        </ul>
      </div>
    </div>
  );
};
