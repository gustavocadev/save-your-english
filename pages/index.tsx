import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";

type Props = {};

const Home: NextPage<Props> = () => {
  console.log("hello world");
  return (
    <Layout>
      <h1 className="text-4xl">hello world</h1>
    </Layout>
  );
};

export default Home;
