import React from "react";

const Component = ({ text, secondary }) => {
  return (
    <div>
      <h1 className="title">{text}</h1>

      <p>{secondary}</p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ad
        architecto autem expedita, provident ex tenetur assumenda aliquid
        dignissimos, eaque pariatur vero mollitia. Lorem ipsum , adipisicing
        elit. Animi, incidunt!
      </p>
    </div>
  );
};

export const data = [
  {
    name: "first tab",
    component: (
      <Component text="Ayy! your first click." secondary="This would be fun!" />
    ),
  },
  {
    name: "second tab",
    component: (
      <Component
        text="Close this browser tab."
        secondary="But, before you do that, try copying the URL - it holds the state of the tab you're on, you can use it anytime to return back to this tab without clicking on it."
      />
    ),
  },
  {
    name: "third tab",
    component: (
      <Component
        text="Welcome back! Now, try hard-reload"
        secondary="The state should still be preserved. Normally, the active tab would've returned to the first index."
      />
    ),
  },
];
