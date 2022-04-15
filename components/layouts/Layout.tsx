import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <section className="grid grid-cols-12">
        <section className="col-span-3">
          <Sidebar />
        </section>

        <section className="col-span-9">
          <Navbar />
          <main className="p-4">{children}</main>
        </section>
      </section>
    </>
  );
};
export default Layout;
