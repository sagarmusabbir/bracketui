import { Tab, TabList, TabPanel, TabContent } from "@thirdbracket/bracketui";
import { PiCodeLight, PiCloudLight, PiRocketLaunchLight } from "react-icons/pi";

const TabService = () => {
  return (
    <Tab defaultValue="code" className="w-full max-w-3xl mx-auto">
      <TabList>
        <TabPanel value="code" icon={<PiCodeLight />}>
          Code
        </TabPanel>
        <TabPanel value="cloud" icon={<PiCloudLight />}>
          Cloud
        </TabPanel>
        <TabPanel value="devops" icon={<PiRocketLaunchLight />}>
          DevOps
        </TabPanel>
      </TabList>

      <TabContent value="code">
        <div className="py-4">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white">
            Web Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Modern web applications built with cutting-edge technologies.
          </p>
        </div>
      </TabContent>

      <TabContent value="cloud">
        <div className="py-4">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white">
            Cloud Infrastructure
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Scalable cloud solutions for modern applications.
          </p>
        </div>
      </TabContent>

      <TabContent value="devops">
        <div className="py-4">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white">
            DevOps Solutions
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Streamline your development workflow.
          </p>
        </div>
      </TabContent>
    </Tab>
  );
};

export default TabService;
