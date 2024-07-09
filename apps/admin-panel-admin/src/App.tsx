import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LogList } from "./log/LogList";
import { LogCreate } from "./log/LogCreate";
import { LogEdit } from "./log/LogEdit";
import { LogShow } from "./log/LogShow";
import { AdminUserList } from "./adminUser/AdminUserList";
import { AdminUserCreate } from "./adminUser/AdminUserCreate";
import { AdminUserEdit } from "./adminUser/AdminUserEdit";
import { AdminUserShow } from "./adminUser/AdminUserShow";
import { BotActivityList } from "./botActivity/BotActivityList";
import { BotActivityCreate } from "./botActivity/BotActivityCreate";
import { BotActivityEdit } from "./botActivity/BotActivityEdit";
import { BotActivityShow } from "./botActivity/BotActivityShow";
import { BotCommandList } from "./botCommand/BotCommandList";
import { BotCommandCreate } from "./botCommand/BotCommandCreate";
import { BotCommandEdit } from "./botCommand/BotCommandEdit";
import { BotCommandShow } from "./botCommand/BotCommandShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { AnalyticsDataList } from "./analyticsData/AnalyticsDataList";
import { AnalyticsDataCreate } from "./analyticsData/AnalyticsDataCreate";
import { AnalyticsDataEdit } from "./analyticsData/AnalyticsDataEdit";
import { AnalyticsDataShow } from "./analyticsData/AnalyticsDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AdminPanel"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Log"
          list={LogList}
          edit={LogEdit}
          create={LogCreate}
          show={LogShow}
        />
        <Resource
          name="AdminUser"
          list={AdminUserList}
          edit={AdminUserEdit}
          create={AdminUserCreate}
          show={AdminUserShow}
        />
        <Resource
          name="BotActivity"
          list={BotActivityList}
          edit={BotActivityEdit}
          create={BotActivityCreate}
          show={BotActivityShow}
        />
        <Resource
          name="BotCommand"
          list={BotCommandList}
          edit={BotCommandEdit}
          create={BotCommandCreate}
          show={BotCommandShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="AnalyticsData"
          list={AnalyticsDataList}
          edit={AnalyticsDataEdit}
          create={AnalyticsDataCreate}
          show={AnalyticsDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
