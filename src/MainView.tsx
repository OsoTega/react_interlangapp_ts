import React from 'react'
import MaxWidth from "./components/MaxWidth";
import { buttonVariants } from "./components/ui/button";

import { Globe, LayoutPanelLeft, Nfc } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import LanguageChange from "./components/LanguageChange";

const MainView = () => {
  return (
    <main className="bg-white">
      <MaxWidth>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your language-base for the best{' '}
            <span className="text-blue-600">
              international applications
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to InterLang. Every application on our
            platform is translated to meet the core understanding
            and description of the language that is requested
          </p>
          <LanguageChange/>
        </div>
        <div className=" lg:flex lg:flex-row items-center space-y-4 justify-center lg:space-x-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <Globe className="mb-2"/>
              What can you do?
            </CardTitle>
            <CardDescription>
              What can InterLang do for me?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
            InterLang is one of the world{"'"}s first, and most powerful internalization technologies.
            With InterLang and the SDK Provided, you can provide your web applications in as many languages
            as InterLang supports, to your users.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <Nfc className="mb-2"/>
              How many Languages does InterLang Support?
            </CardTitle>
            <CardDescription>
              What are the languages i can convert to?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
            At the moment, InterLang supports over a hundred languages, and work is currently ongoing to
            add more language support to InterLang. The few hundred languages supported by InterLang are
            some of the most commonly spoken languages in the world  
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <LayoutPanelLeft className="mt-2"/>
              Can i start now?
            </CardTitle>
            <CardDescription>
              How do i get started?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
            You can get started for free, by creating an account, then creating a free Test API Key. With 
            this key, you can get a taste of what InterLang can do for your application when it is used with
            the InterLang SDK, which you can install into your application. for more on usage, visit the documentation
            </p>
          </CardContent>
        </Card>
        </div>
        <h1 className="text-4xl mt-20 mb-10 text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                How to use InterLang in my project?
            </h1>
          <center>
          <p className="text-muted-foreground">
            You can start by following the installation and use
             process specified in the {" "}<a className={buttonVariants({
              variant: "link",
              className: "w-fit h-fit pt-0 pb-0 pl-0 pr-0"
             })} href="https://interlang-documentation.vercel.app/">
             docs
             </a>. This is a quick start boilerplate you can 
             follow in creating your InterLang application
          </p>
          <div className="w-[50vw] mt-10 mb-10 border-[1px]"/>
          </center>
      </MaxWidth>
    </main>
  )
}

export default MainView