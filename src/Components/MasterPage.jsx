import { Outlet } from "react-router-dom";

const MasterPage = () => {
  return (
    <div>
      {/* Header */}
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default MasterPage;
