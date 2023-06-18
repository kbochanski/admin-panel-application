import React from "react";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  Layout,
  ThemeProvider,
  LightTheme,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

import { dataProvider } from "./rest-data-provider"; 
// inferencer for creating views, you can copy code from ui to customize
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:3030")}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: 'users', //Same as service name in FeatherJS
              list: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              edit: MuiInferencer,
              canDelete: true,
            },
          ]}
          routerProvider={routerProvider}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
