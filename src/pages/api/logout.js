import { withIronSessionApiRoute } from "iron-session/next";
import cookieConfig from "@/helpers/cookieConfig";

export default withIronSessionApiRoute(function logoutRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}, cookieConfig);
