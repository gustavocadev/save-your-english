import { NextPage } from "next";
import Layout from "../../components/layouts/Layout";
type Props = {};
const Blogs: NextPage<Props> = () => {
  return (
    <Layout>
      <h1 className="text-3xl">Blogs</h1>
    </Layout>
  );
};
export default Blogs;
