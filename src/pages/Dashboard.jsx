import Customers from "../components/dashboardComponents/Customers";
import TodoList from "../components/dashboardComponents/TodoList";
import TopSection from "../components/dashboardComponents/TopSection";
import Visitors from "../components/dashboardComponents/Visitors";

function Dashboard() {
  return (
    <div className="text-purple-800">
      <h1 className="text-2xl">Dashboard</h1>
      <p className="mt-2 my-8">Welcome to the Jujuna’s admin dashboard</p>
      <div className="grid grid-cols-4 gap-x-6 gap-y-8">
        <TopSection icon="images/annualIcon.svg" text="annual Revenue" />
        <TopSection icon="images/salesIcon.svg" text="Today’s Sales" />
        <TopSection icon="images/customersIcon.svg" text="Customers Feedback" />
        <TopSection icon="images/visitsIcon.svg" text="Today’s visits" />
        <div className="col-span-2">
          <TodoList />
        </div>
        <Visitors />
        <Customers />
      </div>
    </div>
  );
}

export default Dashboard;
