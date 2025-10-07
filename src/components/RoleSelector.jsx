import { useState } from "react";

const RoleSelector = ({role, setRole}) => {
  

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-3 text-white">
      <select
        id="role"
        value={role}
        onChange={handleChange}
        required
        className="bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 w-64 mb-6 cursor-pointer"
      >
        <option value="">Choose your role</option>
        <option value="employee">Employee</option>
        <option value="recruiter">Recruiter</option>
      </select>
    </div>
  );
};

export default RoleSelector;
