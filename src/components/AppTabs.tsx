import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Children, Suspense } from "react";
import { Tabs, Tab, TabBody } from "react95";

import { Loader } from "@/components/Loader";

interface AppTabsTabProps {
  title: string;
  disabled?: boolean;
  onTabHover?: () => void;
  children: ReactNode;
}

const AppTabsTab = (_props: AppTabsTabProps): null => null;

interface AppTabsProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  tabBodyProps?: Omit<ComponentProps<typeof TabBody>, "children">;
  fallback?: ReactNode;
  children: ReactNode;
}

const AppTabsRenderer = ({
  value,
  onChange,
  rows,
  tabBodyProps,
  fallback,
  children,
}: AppTabsProps) => {
  const tabs = Children.toArray(children) as Array<ReactElement<AppTabsTabProps>>;

  return (
    <>
      <Tabs value={value} onChange={onChange} rows={rows}>
        {tabs.map((tab) => (
          <Tab
            key={tab.props.title}
            value={tab.props.title}
            disabled={tab.props.disabled}
            onMouseEnter={tab.props.onTabHover}
          >
            {tab.props.title}
          </Tab>
        ))}
      </Tabs>
      <TabBody {...tabBodyProps}>
        <Suspense fallback={fallback ?? <Loader />}>
          {tabs.find((tab) => tab.props.title === value)?.props.children}
        </Suspense>
      </TabBody>
    </>
  );
};

export const AppTabs = Object.assign(AppTabsRenderer, {
  Tab: AppTabsTab,
});
