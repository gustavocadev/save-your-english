import Link from "next/link";

const sidebarPages = [
  { name: "Blogs", url: "/blogs" },
  { name: "Cursos", url: "/courses" },
  { name: "Infografias", url: "/contact" },
  { name: "Podcasts", url: "/podcasts" },
];

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="flex flex-col gap-8 ">
      <section className="flex items-center justify-center ">
        <h1 className="text-4xl py-6">Salva tu inglés</h1>
      </section>
      <ul className="flex flex-col items-center">
        {sidebarPages.map(({ name, url }) => (
          <li key={name} className=" border w-full text-center flex">
            <Link href={url}>
              <a className="py-8 text-xl w-full grow hover:bg-[#D1D7DC]">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Sidebar;
