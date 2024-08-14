import React from "react";

import Card from "remoteApp/Card";

export default function Page() {
  return (
    <>
      <h1>Vike + React</h1>
      <Card
        title="Hello World"
        description="This is a description passed as a prop."
      />
    </>
  );
}
