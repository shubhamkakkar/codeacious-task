import React, { Suspense, lazy } from 'react';

export const components = [
  {
    path: "./components/Component1",
  },
  {
    path: "./components/Component2",
  },
  {
    path: "./components/Component3"
  },
]


function App() {
  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      {
        components.map(({ path }, key) => {
          const RandomVariable = lazy(() => import(`${path}`))
          return (
            <Suspense {...{ key }} fallback={<div>Loading...</div>}>
              <RandomVariable />
            </Suspense>
          )
        })
      }
    </div>
  );
}

export default App;
