import "./DefaultLayout.css";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
