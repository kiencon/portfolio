import React from "react";

export type TLayoutProps = {
  children: React.ReactNode;
};

export type TTechnology = {
  svgClasses: string;
  classes: string;
};

export type TCard = {
  title: string;
  description: string;
  JSXElementIcon: React.ElementType;
  date?: string;
};