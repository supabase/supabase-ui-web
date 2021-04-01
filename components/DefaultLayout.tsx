import {
  Badge,
  Button,
  Divider,
  IconArrowUpRight,
  IconGitHub,
  IconMoon,
  IconSun,
  IconTwitter,
  Menu,
  Space,
  Typography,
} from "@supabase/ui";
import Nav from "./Nav";
import Link from "next/link";

import MenuData from "data/Menu.json";

import { getAllPostSlugs } from "./../lib/posts";
import { useEffect, useState } from "react";

function DefaultLayout(props: any) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

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

  const contents = (
    <>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          {/* <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
      /> */}
          <Link href="/" as="/">
            <img
              className="block h-6 w-auto"
              src={
                darkMode ? `/images/logo-dark.png` : `/images/logo-light.png`
              }
              alt="Logo"
            />
          </Link>
        </div>
        <div className="ml-3 mt-6">
          <Badge>Pre release alpha</Badge>
        </div>
        <nav className="pt-6 flex-1 bg-white dark:bg-gray-800 space-y-1">
          {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */}
          <Menu>
            <div className="flex flex-col px-4 space-y-2 mb-4">
              {/* <Typography.Text small type="secondary"> */}
              <a
                className="ext-link"
                href="https://github.com/supabase/ui"
                target="_blank"
              >
                <span>GitHub</span> <IconGitHub size="tiny" />
              </a>
              <a
                className="ext-link"
                href="https://twitter.com/supabase_io"
                target="_blank"
              >
                <span>Follow</span> <IconTwitter size="tiny" />
              </a>
              <a
                className="ext-link"
                href="https://twitter.com/supabase_io"
                target="_blank"
              >
                <span>supabase.io</span>
              </a>
            </div>
            <Link href="/">
              <Menu.Item>Introduction</Menu.Item>
            </Link>
            <Menu.Item>Dark mode setup (coming soon)</Menu.Item>
            <Menu.Item>Themeing (coming soon)</Menu.Item>
            <Link href="/license">
              <Menu.Item>License</Menu.Item>
            </Link>
            <Divider light className="mt-4" />
            {Object.values(MenuData).map((menu: any, i) => {
              // return <span>{menu}</span>;
              const title = Object.keys(MenuData)[i];
              return (
                <>
                  <div className="mt-4">
                    <Menu.Group title={title} />
                  </div>
                  {menu.map((menu: any) => {
                    return (
                      <Link
                        href={`/components/${menu.toLowerCase()}`}
                        as={`/components/${menu.toLowerCase()}`}
                      >
                        <a>
                          <Menu.Item>{menu}</Menu.Item>
                        </a>
                      </Link>
                    );
                  })}
                </>
              );
            })}
          </Menu>
        </nav>
      </div>
      <div className=" border-t dark:border-gray-600">
        <div className="">
          <Menu>
            <Menu.Item>
              <DarkModeToggle />
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );

  return (
    // <div className="container">
    //   <div>
    //   <Nav/>
    //   </div>
    //   {props.children}
    // </div>
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="h-screen flex overflow-hidden bg-white dark:bg-gray-800">
      <Nav
        contents={contents}
        show={showMobileMenu}
        setShow={() => setShowMobileMenu(!showMobileMenu)}
      />

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-60">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            {contents}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-200 hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
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
