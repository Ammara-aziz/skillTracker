import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Card from "./components/common/Card";
import Badge from "./components/common/Badge";
import ProgressBar from "./components/common/ProgressBar";
import Loader from "./components/common/Loader";
import EmptyState from "./components/common/EmptyState";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-10">
        <Card className="mx-auto max-w-md">
          <h1 className="text-2xl font-bold text-slate-900">
            Frontend Developer
          </h1>
          <Badge>React</Badge>

          <p className="mt-2 text-slate-500">
            Build modern web applications using React, JavaScript and Tailwind
            CSS.
          </p>

          <div className="mt-5">
            <Button>View Job</Button>
          </div>
        </Card>
        <div className="min-h-screen bg-slate-50 p-10">
          <Card className="mx-auto max-w-md">
            <Badge>React</Badge>
            <Badge>In Progress</Badge>
            <p className="mt-2 text-slate-500">
              Your current React skill progress
            </p>
            <div>
              <ProgressBar progress={55} />
            </div>
            <p className="mt-2 text-slate-500">65%</p>
          </Card>
        </div>
        <div>
          <Card>
            <h1 className="text-2xl font-bold text-slate-900">
              Analyzing Job Description
            </h1>

            <p>This is a simple card component.</p>
            <div className="mt-4">
              <Loader />
            </div>
            <EmptyState
              title="No projects yet"
              description="Add your first project to start building your career evidence."
              action={<Button>Add Project</Button>}
            />
          </Card>
        </div>
      </div>
      {/*Login Form*/}
      {/*<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ae8ae0] to-[#595da5]">
        <div className="w-full max-w-md space-y-5 rounded-xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">JobReady AI</h1>
          
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button label="Submit">Login</Button>
        </div>*/}
      <AppRoutes />
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
