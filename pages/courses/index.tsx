import { NextPage } from "next";
import Layout from "../../components/layouts/Layout";
type Props = {};
const Courses: NextPage<Props> = () => {
  return (
    <Layout>
      <h1 className="text-3xl">Courses</h1>
    </Layout>
  );
};
export default Courses;
