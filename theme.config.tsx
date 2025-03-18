import React from "react";
import {Image} from 'nextra/components'
import {useTheme} from "next-themes";
import Imagem from "next/image";

const config = {
  logo: <span>Simple Agro</span>,
  project: {
    link: "",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "",
  footer: {
    text: "Simple Agro Docs",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Define os níveis de colapso
    items: [
      {
        title: "Início",
        href: "/",
        icon: <h1>teste</h1>, // Ícone para o item "Início"
      },
      {
        title: "Documentação",
        href: "/docs",
        icon: <h1>teste</h1>, // Ícone para "Documentação"
        children: [
          { title: "Introdução", href: "/docs/intro" },
          { title: "Guia Rápido", href: "/docs/quick-start" },
        ],
      },
      {
        title: "Sobre",
        href: "/sobre",
        icon: <h1>teste</h1>, // Ícone para "Sobre"
      },
    ],
  }
};

export default config;
