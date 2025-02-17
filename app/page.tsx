import React from "react";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="absolute top-44 right-0 h-64 w-80 bg-gradient-to-br from-gradient-main-primary to-transparent rounded-full blur-3xl opacity-50"></div>
        <Header />
        <div className="absolute bottom-5 left-8 h-64 w-96 bg-gradient-to-br from-gradient-sub-primary to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>
    </>
  );
}
