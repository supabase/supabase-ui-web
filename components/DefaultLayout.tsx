import { IconMoon, IconSun, Menu, Space, Typography } from "@supabase/ui";
import Nav from "./Nav";
import Link from "next/link";

import { getAllPostSlugs } from "./../lib/posts";
import { useEffect, useState } from "react";

function DefaultLayout(props: any) {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("supabaseDarkMode");
    if (isDarkMode) {
      setDarkMode(isDarkMode === "true");
      document.documentElement.className = isDarkMode === "true" ? "dark" : "";
    }
  }, []);

  const updateTheme = (isDarkMode: boolean) => {
    document.documentElement.className = isDarkMode ? "dark" : "";
    setDarkMode(isDarkMode);
  };

  function DarkModeToggle() {
    const toggleDarkMode = () => {
      localStorage.setItem("supabaseDarkMode", (!darkMode).toString());
      updateTheme(!darkMode);
    };

    return (
      <span onClick={() => toggleDarkMode()} className="cursor-pointer">
        <Typography.Text>
          <Space className="justify-between">
            {darkMode ? "Light Mode" : "Dark mode"}
            {darkMode ? <IconSun /> : <IconMoon />}
          </Space>
        </Typography.Text>
      </span>
    );
  }

  return (
    // <div className="container">
    //   <div>
    //   <Nav/>
    //   </div>
    //   {props.children}
    // </div>
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="h-screen flex overflow-hidden bg-white dark:bg-gray-800">
      {/* <Nav /> */}

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-60">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 pt-8 flex-1 bg-white dark:bg-gray-800 space-y-1">
                {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */}
                <Menu>
                  <Link href="/">
                    <Menu.Item>Introduction</Menu.Item>
                  </Link>
                  <Menu.Item>Installation</Menu.Item>
                  <Menu.Item>Dark mode</Menu.Item>
                  <div className="mt-4">
                    <Menu.Group title="Components" />
                  </div>
                  <Link href="/components/auth" as="/components/auth">
                    <a>
                      <Menu.Item>Auth</Menu.Item>
                    </a>
                  </Link>
                  <Link href="/components/button" as="/components/button">
                    <a>
                      <Menu.Item>Button</Menu.Item>
                    </a>
                  </Link>
                  <Link href="/components/dropdown" as="/components/dropdown">
                    <a>
                      <Menu.Item>Dropdown</Menu.Item>
                    </a>
                  </Link>
                  <Menu.Item>
                    <DarkModeToggle />
                  </Menu.Item>
                </Menu>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=Dy8dXEWwmB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open sidebar</span>
            {/* <!-- Heroicon name: outline/menu --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
