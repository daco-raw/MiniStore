import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Mini Store" }));

router.get("/productos", (req, res) =>
  res.render("productos", { productos: "Productos" })
);

router.get("/contactanos", (req, res) =>
  res.render("contactanos", { contactanos: "Contactanos" })
);

export default router;
