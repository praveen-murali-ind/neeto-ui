import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../lib/components/layouts/Sidebar";
import AppSwitcher from "../../lib/components/layouts/AppSwitcher";
import { STORYBOOK_NAV_LINKS } from "../constants";

export default {
  title: "Layouts/AppSwitcher",
  component: AppSwitcher,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          '`import { AppSwitcher } from "@bigbinary/neetoui/layouts";`',
      },
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: "100vh",
    },
  },
};

export const Default = ({ isOpen, ...args }) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(isOpen);

  useEffect(() => {
    setIsAppSwitcherOpen(isOpen);
  }, [isOpen]);

  return (
    <Router>
      <Sidebar
        navLinks={STORYBOOK_NAV_LINKS.slice(3)}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((open) => !open)}
        showAppSwitcher
        appName="neetoUI"
        profileInfo={{
          name: "John Doe",
          email: "john@doe.com",
          topLinks: [
            {
              label: "Logout",
            },
            {
              label: "Settings",
            },
          ],
        }}
      />
      <AppSwitcher
        {...args}
        isOpen={isAppSwitcherOpen}
        onClose={() => setIsAppSwitcherOpen(false)}
        environment={process.env.NODE_ENV}
      />
    </Router>
  );
};
Default.args = {
  isOpen: true,
  neetoApps: ["KB", "Desk", "Planner"],
  activeApp: "Chat",
};

export const AppSwitcherWithRecentApps = ({ isOpen, ...args }) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(isOpen);

  useEffect(() => {
    setIsAppSwitcherOpen(isOpen);
  }, [isOpen]);

  return (
    <Router>
      <Sidebar
        navLinks={STORYBOOK_NAV_LINKS.slice(3)}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((isOpen) => !isOpen)}
        showAppSwitcher
        appName="neetoUI"
        profileInfo={{
          name: "John Doe",
          email: "john@doe.com",
          topLinks: [
            {
              label: "Logout",
            },
            {
              label: "Settings",
            },
          ],
        }}
      />
      <AppSwitcher
        {...args}
        isOpen={isAppSwitcherOpen}
        onClose={() => setIsAppSwitcherOpen(false)}
        environment={process.env.NODE_ENV}
      />
    </Router>
  );
};
AppSwitcherWithRecentApps.storyName = "AppSwitcher with recent apps";
AppSwitcherWithRecentApps.args = {
  isOpen: true,
  recentApps: ["Quiz", "Runner"],
  activeApp: "Chat",
  neetoApps: ["Chat", "Desk", "KB", "Quiz", "Runner"],
};
