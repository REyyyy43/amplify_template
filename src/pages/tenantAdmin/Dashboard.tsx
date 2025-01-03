//import React from "react";
import "../../styles/tenantAdmin.css";

const TenantAdminDashboard = () => {
  const handleNavigation = (section: string) => {
    alert(`Navigating to ${section}...`);
  };

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <nav className="space-y-4 p-4">
          <a onClick={() => handleNavigation("Dashboard Overview")} className="block py-2 px-4 bg-gray-900 rounded-lg cursor-pointer">Dashboard Overview</a>
          <a onClick={() => handleNavigation("Messaging")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Messaging</a>
          <a onClick={() => handleNavigation("Rentals")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Rentals</a>
          <a onClick={() => handleNavigation("Maintenance Requests")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Maintenance Requests</a>
          <a onClick={() => handleNavigation("Task Management")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Task Management</a>
          <a onClick={() => handleNavigation("Tenant Information")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Tenant Information</a>
          <a onClick={() => handleNavigation("Event Calendar")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Event Calendar</a>
          <a onClick={() => handleNavigation("Reports & Analytics")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Reports & Analytics</a>
          <a onClick={() => handleNavigation("Audit & Notifications")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Audit & Notifications</a>
          <a onClick={() => handleNavigation("Settings")} className="block py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
          <div className="text-lg font-bold text-blue-600">Company Logo</div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mx-4"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full border"
          />
        </header>

        {/* Main Content Sections */}
        <main className="p-6 space-y-6">
          {/* Building Management Overview */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700">Building Management Overview</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-gray-500">Total Buildings</h3>
                <input type="number" className="text-2xl font-bold text-gray-700 w-full" defaultValue={3} />
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-gray-500">Occupancy Rate</h3>
                <input type="number" className="text-2xl font-bold text-gray-700 w-full" defaultValue={85} />
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-gray-500">Total Units</h3>
                <input type="number" className="text-2xl font-bold text-gray-700 w-full" defaultValue={150} />
              </div>
            </div>
          </section>

          {/* Placeholder for Future Content */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700">Future Content Here</h2>
            <div className="p-4 bg-white shadow rounded-lg">
              <p className="text-gray-500">This is a placeholder for future content sections.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TenantAdminDashboard;
