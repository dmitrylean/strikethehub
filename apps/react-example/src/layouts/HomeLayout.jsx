import "./HomeLayout.css";

function HomeLayout({ children }) {
  return (
    <div className="home-layout">
      <main>{children}</main>
    </div>
  );
}

export default HomeLayout;
