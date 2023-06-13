import { withIronSessionSsr } from "iron-session/next";
import React from "react";
import cookieConfig from "@/helpers/cookieConfig";
import { useRouter } from "next/router";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    req.session.destroy();
    res.setHeader("location", "/auth/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {},
    };
  },
  cookieConfig
);

export default function Logout() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/auth/login");
  }, [router]);

  return <div>Logout</div>;
}
