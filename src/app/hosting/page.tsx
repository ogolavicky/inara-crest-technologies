"use client";
import { BarChart3, PieChart, Search, Presentation } from "lucide-react";

export default function DataAnalytics() {
  return (
    <main className="min-h-screen pb-20">
      <section className="pt-24 pb-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Data Analytics</h1>
          <p className="max-w-2xl mx-auto opacity-90">Data-driven insights for smarter business decisions.</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 grid md:grid-cols-4 gap-6">
        {[
          { icon: <Search />, label: "Data Collection" },
          { icon: <BarChart3 />, label: "Statistical Analysis" },
          { icon: <PieChart />, label: "Visualization" },
          { icon: <Presentation />, label: "BI Dashboards" }
        ].map((item, i) => (
          <div key={i} className="p-8 text-center bg-gray-50 dark:bg-gray-900 rounded-3xl">
            <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
            <h4 className="font-bold dark:text-white">{item.label}</h4>
          </div>
        ))}
      </section>
    </main>
  );
}