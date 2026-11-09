import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="container py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
