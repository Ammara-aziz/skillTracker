import DashboardLayout from "./layout/DashboardLayout";
import Card from "./components/common/Card";
import Badge from "./components/common/Badge";
import ProgressBar from "./components/common/ProgressBar";

{
  /*import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
*/
}

function App() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back, Ammara
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Here's an overview of your career progress.
            </p>
          </div>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Your Skills
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your Current Target Role
                </p>
              </div>
              <Badge>Target Role</Badge>
            </div>
            <div className="mt-4">
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-slate-700">
                  Job Readiness
                </span>

                <span className="text-sm font-medium text-indigo-600">65%</span>
              </div>
              <ProgressBar progress={65} />
            </div>
          </Card>
        </div>
      </DashboardLayout>
    </>
  );
}

export default App;
